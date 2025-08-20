<script setup>
import ContactArea from "./ContactArea.vue";
import GoogleMapArea from "./GoogleMapArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";


</script>

<template>
    <!-- <div class="wow fadeInLeft" data-wow-duration="2s"> -->
    <div>
        <HeaderThree />
        <main>
            <Breadcrumb title="Contact Us" page_title="Contact" />
            <ContactArea />
            <GoogleMapArea />
        </main>
        <CommonFooter />
    </div>
</template>
