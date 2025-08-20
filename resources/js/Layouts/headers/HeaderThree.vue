<script setup>
import { provide, ref, onMounted } from "vue";
import NavMenu from "./NavMenu.vue";
import PernecLogo from "@/assets/img/logo/Pernecnew.svg";
import HamburgerButton from "@/svg/HamburgerButton.vue";
import Sidebar from "../../Components/common/Sidebar.vue";
import SearchPopup from "../../Components/common/SearchPopup.vue";

const isSticky = ref(false)
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true
  }
  else {
    isSticky.value = false
  }
}
window.addEventListener('scroll', handleSticky)

const searchOpen = ref(false);
provide('searchOpen', searchOpen)

const setSearchOpen = (value = true) => {
  searchOpen.value = value;
};

// slidebar open
const sidebarOpen = ref(false);
provide('sidebarOpen', sidebarOpen)
const setSidebarOpen = (value = true) => {
  sidebarOpen.value = value;
};

//  props passing
const addClass = ref(true);
provide('addClass', addClass)

const handleAddClass = (value = true) => {
  addClass.value = value;
};

const isSmall = ref(false);

onMounted(()=> {
  const handleResize =() =>{
    isSmall.value = window.innerWidth <= 400
  };

  handleResize();

  window.addEventListener('resize', handleResize);

  return() => {
    window.removeEventListener('resize',handleResize);
  };
});

</script>

<template>
  <header class="tp-header-3-area tp-header-3-transparent tp-header-height p-relative">
    <div id="header-sticky" class="tp-header-3-bottom header__sticky p-relative"
      :class="isSticky ? 'tp-header-sticky' : ''">
      <div class="tp-header-3-bottom-inner p-relative">
        <div class="container-fluid gx-0">
          <div class="row gx-0 align-items-center">
            <div class="col-xl-2 col-6">
              <div class="tp-header-2-main-left d-flex align-items-center justify-content-xl-center p-relative">
                <div class="tp-header-3-logo">
                <router-link to="/" style="display: flex; justify-content: space-between;">
                <img :src="PernecLogo" alt="image-title-here" style="max-width: 120%;" />
                <!-- <img :src="PernecLogo" alt="image-title-here" style="max-width: 195px; max-height: 60px; order: 1;" /> -->
                <!-- <img v-if="!isSmall" :src="PernecAnny" alt="image-title-here" style="max-width: 195px; max-height: 63px; order: 2;" /> -->
                </router-link>
              </div>
              </div>
            </div>
            <div class="col-xl-8 d-none d-xl-block">
              <div class="tp-main-menu-2-left d-flex align-items-center justify-content-center"> 
                <div class="tp-main-menu menu-icon">
                  <nav id="tp-mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-6">
              <div class="tp-header-3-right ">
                <div class="tp-header-3-main-right d-flex align-items-center justify-content-end">
                  <!-- <div class="tp-header-2-phone d-flex align-items-center"> -->
                    <div class="tp-header-3-phone-icon">
                      <!-- <img v-if="!isSmall" :src="PernecAnny" alt="image-title-here" /> -->
                    </div>
                  <!-- </div> -->
                  <div class="tp-header-3-hamburger-btn offcanvas-open-btn" @click="setSidebarOpen(true)">
                    <button class="hamburger-btn">
                      <span>
                        <HamburgerButton />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <SearchPopup v-if="searchOpen" @set-search-open="setSearchOpen" />
  <Sidebar v-if="sidebarOpen" @set-sidebar-open="setSidebarOpen" @handleAddClass="handleAddClass" />


</template>
<style></style>