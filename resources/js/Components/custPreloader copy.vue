<script setup>
import { ref, onMounted } from 'vue';
import desktopVideo from '@/assets/img/logo/1.mp4';
import mobileVideo from '@/assets/img/logo/2.mp4';

const loading = ref(true);
const showLoader = ref(true);
const videoSource = ref(desktopVideo);

const isMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

const switchVideoSource = () => {
    if (isMobile()) {
        videoSource.value = mobileVideo;
    } else {
        videoSource.value = desktopVideo;
    }
};




onMounted(() => {

    switchVideoSource();
    setTimeout(() => {
        loading.value = false;
        setTimeout(() => {
            showLoader.value = false; // Completely hide the loader after fade-out
            document.getElementById('app').style.display = 'block'; // Show the main app content
            document.body.style.overflow = 'auto'; // Allow scrolling
        }, 500); // Duration of the fade-out effect should match the CSS transition duration
    }, 4000); // Adjust delay as necessary
});
</script>

<template>
    <!-- Background wrapper -->
    <div class="background">
        <transition name="fade">
            <div v-if="showLoader" class="loader-wrapper">
                <video autoplay muted playsinline>
                    <source :src="videoSource" type="video/mp4">
                </video>
            </div>
        </transition>
    </div>
    <div id="app"></div>
</template>

<style scoped>
.app {
    display: none;
}

.loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
    ;
    z-index: 9999;
    transition: opacity 0.5s ease-in-out;
    /* Fade-out transition */
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
