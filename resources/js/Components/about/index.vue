<script setup>
import AboutArea2 from "./AboutArea2.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import AboutFeatureArea from "./AboutFeatureArea.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
// import ShareHolder from "./ShareHolder.vue";
// import orgaChart2nd from "./orgaChart.vue"
// import AboutCounterArea from "./AboutCounterArea.vue";
// import experiance from "./PortfolioArea.vue"
import AboutPernec2 from "./AboutPernec2.vue";
import IndustryArea from "./IndustryArea.vue";
import FeatureAreaHomeTwo from "./FeatureAreaHomeTwo.vue";
import BrandHomeTwo from "./BrandHomeTwo.vue";
import FeatureAreaHomeThree from "./FeatureAreaHomeThree.vue";


</script>
<template>
    <div>
        <HeaderThree />
        <main>
            <Breadcrumb title="About Us" page_title="Company" />
            <AboutArea2 />
            <AboutFeatureArea />
            <AboutPernec2 />
            <IndustryArea />
            <FeatureAreaHomeTwo />
            <FeatureAreaHomeThree />
            <!-- <AboutCounterArea /> -->
            <!-- <experiance /> -->
            <BrandHomeTwo />
        </main>

        <CommonFooter />
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
