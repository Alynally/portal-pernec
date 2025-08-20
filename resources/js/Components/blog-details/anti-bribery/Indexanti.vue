<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Antibribery from "@/Components/blog-details/anti-bribery/Antibribery.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
// import loadingSpinner from "@/Components/loadingSpinner.vue";
</script>

<template>
  <!-- <loadingSpinner></loadingSpinner> -->
  <HeaderThree />
  <main>
    <Breadcrumb title="Anti-Bribery & Corruption" page_title="Anti-Bribery & Corruption" />
    <Antibribery />
  </main>
  <CommonFooter />
</template>


