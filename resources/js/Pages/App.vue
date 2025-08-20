<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import Preloader from "@/Components/custPreloader.vue";
const loading = ref(false);
const router = useRouter();

// Global navigation guard to show loader
router.beforeEach((to, from, next) => {
    loading.value = true;
    next();
});

// Global navigation guard to hide loader
router.afterEach(() => {
    loading.value = false;
});

onMounted(async () => {
    // Dynamically import and initialize WOW.js
    const WOW = await import('wow.js');
    const wow = new WOW.default({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
});
</script>

<template>

    <div id="app">
        <Preloader />
        <router-view />
    </div>
</template>
