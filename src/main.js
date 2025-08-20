// CSS Imports (Sorted logically)
import "bootstrap/scss/bootstrap.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/vue-splide/css";
import "swiper/css/bundle";
import "vue3-carousel/dist/carousel.css";
import "vue3-circle-progress/dist/circle-progress.css";
import "@/assets/css/font-awesome-pro.css";
import "@/assets/css/bootstrap.css";
import "@/assets/css/spacing.css";
import '@/assets/scss/main.scss';

// JS Imports (Sorted by type)
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { MotionPlugin } from "@vueuse/motion";
import Vue3Marquee from "vue3-marquee";
import PrimeVue from "primevue/config";
import Aos from "aos";
import router from '@/routes';

// Initialize AOS
Aos.init();

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    return resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob('./Pages/**/*.vue')
    )
  },
  setup({ el, App, props, plugin }) {
    const vueApp = createApp({
      render: () => h(App, props),
    });

    return vueApp
      .use(plugin)
      .use(ZiggyVue)
      .use(router)
      .use(MotionPlugin)
      .use(Vue3Marquee)
      .use(PrimeVue)
      .mount(el);
  },
  progress: {
    color: '#4B5563',
    includeCSS: true,
    showSpinner: true,
  },
});