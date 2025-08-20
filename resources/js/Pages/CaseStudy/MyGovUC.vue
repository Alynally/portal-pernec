<script setup>
import MyGovUc from "@/Components/blogTwo/MyGovUc.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="MyGovUC 2.0 - JDN Case Study" page_title="Case Study" />
    <MyGovUc :reverse="false" />
  </main>
  <CommonFooter />
</template> 