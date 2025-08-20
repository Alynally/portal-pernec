<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import ServiceArea from "./ServiceArea.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";


</script>

<template>
    <!-- <div class="wow fadeInLeft" data-wow-duration="2s"> -->
    <div>
        <HeaderThree />
        <main>

            <Breadcrumb title="Our Services" page_title="Services" />
            <ServiceArea />

        </main>
        <CommonFooter />
    </div>
</template>
