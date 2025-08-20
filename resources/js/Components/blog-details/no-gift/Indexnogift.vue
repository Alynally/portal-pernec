<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Nogift from "@/Components/blog-details/no-gift/Nogift.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
// import loadingSpinner from "@/Components/loadingSpinner.vue";
</script>

<template>
  <!-- <loadingSpinner></loadingSpinner> -->
  <HeaderThree />
  <main>
    <Breadcrumb title="No Gift" page_title="No Gift" />
    <Nogift />
  </main>
  <CommonFooter />
</template>


