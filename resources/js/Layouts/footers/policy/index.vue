<script setup>
import policy from '@/Layouts/footers/policy/policy.vue';
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";

</script>
<template>
    <!-- <div class="wow fadeInLeft" data-wow-duration="2s"> -->
    <div>
        <HeaderThree />
        <main>
            <Breadcrumb title="Privacy Policy" page_title="Privacy Policy" />
            <policy />
        </main>
        <CommonFooter />
    </div>
</template>
