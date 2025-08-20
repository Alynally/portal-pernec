<script setup>
import NawabsJPS from "@/Components/blogTwo/NawabsJPS.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="DMSS - Nawabs JPS Case Study" page_title="Case Study" />
    <NawabsJPS :reverse="true" />
  </main>
  <CommonFooter />
</template> 