<script setup>
import Bulletin from "./Bulletin.vue";
import headerV2 from "@/Layouts/headers/headerVerTh.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import BirthdayCalendar from "./BirthdayCalendar.vue";
</script>

<template>
  <headerV2 />
  <main>
    <Breadcrumb title="Bulletin" page_title="Bulletin" />
    <BirthdayCalendar />
    <Bulletin/>
    
  </main>
  <CommonFooter />
</template>