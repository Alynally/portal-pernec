<script setup>
import { inject, defineEmits } from "vue";
import MobileMenu from "@/Layouts/headers/MobileMenu.vue";

const propValue = inject('sidebarOpen');
const emit = defineEmits(["setSidebarOpen"]);

const handleClose = () => {
  emit("setSidebarOpen", false);
}

const propValue2 = inject('addClass');


</script>


<template>
  <div class="offcanvas__area" :class="`${propValue ? 'offcanvas-opened' : ''} ${propValue2 ? 'home-3-pos' : ''}`">
    <div class="offcanvas__wrapper">
      <div class="offcanvas__close">
        <button class="offcanvas__close-btn offcanvas-close-btn" @click="handleClose(false)">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="offcanvas__content">
        <div class="tp-mobile-menu-pos mean-container d-xl-none">
          <MobileMenu />
        </div>
      </div>
      <div class="offcanvas__contact">
        <h4 class="offcanvas__title">Contacts</h4>
        <div class="offcanvas__contact-content d-flex">
          <div class="offcanvas__contact-content-icon">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
          </div>
          <div class="offcanvas__contact-content-content">
            <a href="https://maps.app.goo.gl/sn57iU6SAzBS2BrY9">
              No. 21, Jalan Setiawangsa 8,Taman Setiawangsa,54200 Kuala Lumpur
            </a>
          </div>
        </div>
        <div class="offcanvas__contact-content d-flex">
          <div class="offcanvas__contact-content-icon">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
          </div>
          <div class="offcanvas__contact-content-content">
            <a href="https://maps.app.goo.gl/RZ1cZ5jH44BCsz436">
              C1-1 & D1-2, Level 1, Signature Office Unit BIRO, Jalan Teknokrat 6, Cyber 5, 63000 Cyberjaya, Selangor
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="body-overlay" :class="`${propValue ? 'opened' : ''}`" @click="handleClose(false)">
  </div>
</template>
