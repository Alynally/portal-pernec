# for production build only. do a stage before these stages to have development environment docker

FROM php:8.3-fpm as php-build

ENV COMPOSER_ALLOW_SUPERUSER 1

RUN apt-get update -y && apt-get install -y zip unzip

USER root

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /pernec

COPY . .

RUN composer install


FROM node:20-alpine as npm-build

WORKDIR /pernec

# because npm run build requires ziggy (in vendor folder)
COPY --from=php-build /pernec /pernec

# TODO: restructure package.json and sort devDependencies correctly. then use npm ci (clean install)
RUN npm i

RUN npm run build


FROM php:8.3-fpm as production

ENV COMPOSER_ALLOW_SUPERUSER 1

RUN apt-get update -y \
    && apt-get install -y nginx

# PHP_CPPFLAGS are used by the docker-php-ext-* scripts
ENV PHP_CPPFLAGS="$PHP_CPPFLAGS -std=c++11"

RUN docker-php-ext-install pdo_mysql \
    && docker-php-ext-install opcache \
    && apt-get install libicu-dev -y \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl \
    && apt-get remove libicu-dev icu-devtools -y
RUN { \
        echo 'opcache.memory_consumption=128'; \
        echo 'opcache.interned_strings_buffer=8'; \
        echo 'opcache.max_accelerated_files=4000'; \
        echo 'opcache.revalidate_freq=2'; \
        echo 'opcache.fast_shutdown=1'; \
        echo 'opcache.enable_cli=1'; \
    } > /usr/local/etc/php/conf.d/php-opocache-cfg.ini

COPY docker/nginx.conf /etc/nginx/sites-enabled/default
COPY docker/entrypoint.sh /etc/entrypoint.sh

# Set working directory
WORKDIR /var/www/pernec

# Remove default server definition
RUN rm -rf /var/www/html

# Copy existing application directory contents
COPY --chown=www-data:www-data . /var/www/pernec
COPY --chown=www-data:www-data --from=npm-build /pernec /var/www/pernec

EXPOSE 80 443

ENTRYPOINT ["/etc/entrypoint.sh"]


