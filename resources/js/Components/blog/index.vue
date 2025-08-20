<script setup>
import PostboxArea from "./PostboxArea.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="Blog" page_title="Blog" />
    <PostboxArea />
  </main>
  <CommonFooter />
</template>