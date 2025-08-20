<script setup>

import Portal from "./portalContent.vue";
import Breadcrumb from "../common/Breadcrumb.vue"; 
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";

</script>


<template>
   <!-- <div class="wow fadeInLeft" data-wow-duration="2s">  -->
    <div>
   <HeaderThree />
   <main>
      <Breadcrumb title="Staff Portal" page_title="Staff Portal" />
      <Portal />
   </main>
   <CommonFooter />
   </div>
</template>
