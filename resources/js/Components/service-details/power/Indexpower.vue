<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CyberSecurity from "./Power.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
  <HeaderThree />
  <main>
    <Breadcrumb title="Power & Utilities" page_title="Power & Utilities" />
    <CyberSecurity />
  </main>
  <CommonFooter />
</div>
</template>