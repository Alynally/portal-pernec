<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Itessentials from "./Itessentials.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
  <HeaderThree />
  <main>
    <Breadcrumb title="IT Essentials" page_title="IT Essentials" />
    <Itessentials />
  </main>
  <CommonFooter />
</div>
</template>