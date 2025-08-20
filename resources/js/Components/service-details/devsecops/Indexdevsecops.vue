<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Devsecops from "./Devsecops.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
  <HeaderThree />
  <main>
    <Breadcrumb title="DevSecOps" page_title="DevSecOps" />
    <Devsecops />
  </main>
  <CommonFooter />
</div>
</template>