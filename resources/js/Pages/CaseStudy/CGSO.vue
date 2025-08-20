<script setup>
import CGSO from "@/Components/blogTwo/CGSO.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="E-Vetting 3.0 - CGSO Case Study" page_title="Case Study" />
    <CGSO :reverse="true" />
  </main>
  <CommonFooter />
</template> 