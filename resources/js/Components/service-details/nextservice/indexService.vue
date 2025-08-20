<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import nextService from "./nextService.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
    <HeaderThree />
    <main>
      <Breadcrumb title="incoming Services" page_title="Next Services" />
      <nextService />
    </main>
    <CommonFooter />
  </div>
</template>