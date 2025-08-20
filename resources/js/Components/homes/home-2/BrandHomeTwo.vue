<script setup>
import brand_logo1 from "@/assets/img/brand/home-2/logo1.svg";
import brand_logo2 from "@/assets/img/brand/home-2/logo2.svg";
import shape_bg from "@/assets/img/brand/home-2/shape-bg.png";


const brandImages1 = [
    brand_logo1
];

const brandImages2 = [
    brand_logo2
];


// Duplicate the brandImages array to create an extended loop
const extendedBrandImages1 = brandImages1.concat(brandImages1);
const extendedBrandImages2 = brandImages2.concat(brandImages2);



</script>

<template>
    <section class="tp-brand-2-area p-relative pt-2 pb-100" id="client_id">
        <div class="tp-brand-2-bg" :style="{ backgroundImage: `url(${shape_bg})` }"></div>
        <div class="container">
            <div class="row">
                <div class="row gx-12">
                    <div class="col-xl-12">
                        <div class="tp-text-style text-center fadeUp">
                            <h3 class="feature-title mb-12">
                                Our Clients</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquebox">
                <Vue3Marquee :pause-on-click="true" :duration="90" :gradient="true">
                    <img v-for="brand in extendedBrandImages1" :key="brand" :src="brand" />
                </Vue3Marquee>
                <Vue3Marquee :pause-on-click="true" :duration="90" :gradient="true" :direction="'reverse'">
                    <img v-for="brand in extendedBrandImages2" :key="brand" :src="brand" />
                </Vue3Marquee>
            </div>
        </div>

    </section>
</template>

<style scoped>
.feature-title {
    color: #4088A7;
    font-size: 70px;
    padding-bottom: -190px;
}

.tp-text-style {
    padding-bottom: 50px;
    padding-top: 50px;
}

.tp-brand-2-area {
    width: 100%;
    overflow: hidden;
}

.tp-brand-2-area .tp-feature-3-text-style {
    margin-bottom: 10px;
}

.tp-brand-2-area .feature-title {
    margin-bottom: 0;
}

.marquebox {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    padding: 0px;
    margin: 0px;
}

.container {
    max-width: 100%;
    padding: 0px;
    margin: 0px;
}
</style>
