<script setup>
import PostboxAreaTwo from "./PostboxAreaTwo.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HRMJPA from "./HRMJPA.vue";
import MyGovUc from "./MyGovUc.vue";
import NawabsJPS from "./NawabsJPS.vue";
import CGSO from "./CGSO.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="Blog" page_title="Blog" />
    <PostboxAreaTwo />
    <HRMJPA :reverse="false" />
    <CGSO :reverse="true" />
    <MyGovUc :reverse="false" />
    <NawabsJPS :reverse="true" />
  </main>
  <CommonFooter />
</template>