import "vue3-carousel/dist/carousel.css";
import "@splidejs/vue-splide/css";
import '@splidejs/splide/dist/css/splide.min.css';
import "swiper/css/bundle";
import "@/assets/css/font-awesome-pro.css";
import "bootstrap/scss/bootstrap.scss";
import "@/assets/css/spacing.css";
import "vue3-circle-progress/dist/circle-progress.css";
import "@/assets/css/bootstrap.css";
import '@/assets/scss/main.scss'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import router from '@/routes';
import { MotionPlugin } from "@vueuse/motion";
import Vue3Marquee from "vue3-marquee";
import PrimeVue from "primevue/config";
import Aos from "aos";
import "aos/dist/aos.css";




const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({
            render: () => h(App, props),

        })
            .use(plugin)
            .use(ZiggyVue)
            .use(router)
            .use(MotionPlugin)
            .use(Vue3Marquee)
            .use(PrimeVue)
            .use(Aos)
            .mount(el)


    },
    progress: {
        color: '#4B5563',
    },
});
