<script setup>
import HRMJPA from "@/Components/blogTwo/HRMJPA.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="HRM 3.0 - JPA Case Study" page_title="Case Study" />
    <HRMJPA :reverse="false" />
  </main>
  <CommonFooter />
</template> 