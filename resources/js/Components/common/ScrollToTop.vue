 

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; 
const showScroll = ref(false); 
// scroll to top
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


const checkScrollTop = () => {
  if (!showScroll.value && window.pageYOffset > 400) {
    showScroll.value = true;
  } else if (showScroll.value && window.pageYOffset <= 400) {
    showScroll.value = false;
  }
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollTop);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollTop);
});
</script>

<template> 
    <div class="back-to-top-wrapper" :class="{ 'back-to-top-btn-show': isSticky }">
      <button @click="scrollTop" class="back-to-top-btn" data-target="html" id="back_to_top">
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 6L6 1L1 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div> 
</template>
