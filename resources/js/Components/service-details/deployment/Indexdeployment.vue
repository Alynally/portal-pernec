<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CyberSecurity from "./Deployment.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
  <HeaderThree />
  <main>
    <Breadcrumb title="Deployment Operation Service" page_title="Deployment Operation Service" />
    <CyberSecurity />
  </main>
  <CommonFooter />
</div>
</template>