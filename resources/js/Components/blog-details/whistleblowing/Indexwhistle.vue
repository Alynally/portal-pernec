<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Whistleblowing from "@/Components/blog-details/whistleblowing/Whistleblowing.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
// import loadingSpinner from "@/Components/loadingSpinner.vue";
</script>

<template>
  <!-- <loadingSpinner></loadingSpinner> -->
  <HeaderThree />
  <main>
    <Breadcrumb title="Whistleblowing" page_title="Whistleblowing" />
    <Whistleblowing />
  </main>
  <CommonFooter />
</template>

