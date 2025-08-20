<script setup>
// import TeamArea from "./TeamArea2.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
import TabLeaders from "./TabLeaders.vue";
</script>


<template>
    <!-- <div class="wow fadeInLeft" data-wow-duration="2s">  -->
    <div>
        <HeaderThree />
        <main>
            <Breadcrumb title="Our Leaders" page_title="Leaders" />
            <!-- <TeamArea /> -->
            <TabLeaders />
        </main>
        <CommonFooter />
    </div>
</template>
