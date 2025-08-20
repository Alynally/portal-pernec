<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'


import TitleUnderIcon from '@/svg/TitleUnderIcon.vue';
import AboutLineIcon from '@/svg/AboutLineIcon.vue';

//  shapes
import shape_3 from "@/assets/img/fun-fact/shape-3.png";
import world_img from "@/assets/img/fun-fact/world.png";


// import img here
import service_img_1 from "@/assets/img/services/services-6.svg";
import service_img_2 from "@/assets/img/services/services-5.svg";
import service_img_3 from "@/assets/img/services/services-7.svg";

// service data
const service_data = [
    {
        id: 1,
        alphabet: "I",
        title: "Integrity",
        img: service_img_1,
        description: "Integrity in essence, calls for honesty and transparency in everything we do. We will be fair and honest when dealing with our customers, partner and stakeholders.We ensure that we consistenly do what we say and deliver on our promises.",
    },
    {
        id: 2,
        alphabet: "S",
        title: "Simplicity",
        img: service_img_2,
        description: "Simplicity in essence describes the manner of doing things, reflecting the idea of being simple or freedom from difficulty or hardship in effort.We will strive to be efficient and effective in our business process and transactions, with attention to details.",
    },
    {
        id: 3,
        alphabet: "I",
        title: "Innovative",
        img: service_img_3,
        description: "Innovative is the readiness to try new things and ideas to explore new apportunities. We are ready to embrace new ideas and solutions in overcoming problem and generating business opportunities.",
    },
    // update for swiper
    {
        id: 1,
        alphabet: "I",
        title: "Integrity",
        img: service_img_1,
        description: "Integrity in essence, calls for honesty and transparency in everything we do. We will be fair and honest when dealing with our customers, partner and stakeholders.We ensure that we consistenly do what we say and deliver on our promises.",
    },
    {
        id: 2,
        alphabet: "S",
        title: "Simplicity",
        img: service_img_2,
        description: "Simplicity in essence describes the manner of doing things, reflecting the idea of being simple or freedom from difficulty or hardship in effort.We will strive to be efficient and effective in our business process and transactions, with attention to details.",
    },
    {
        id: 3,
        alphabet: "I",
        title: "Innovative",
        img: service_img_3,
        description: "Innovative is the readiness to try new things and ideas to explore new apportunities. We are ready to embrace new ideas and solutions in overcoming problem and generating business opportunities.",
    },
]

const reload = ref(null);

const setReloadClassName = () => {
    reload.value = document.getElementById('reload');
    if (reload.value !== null) {
        window.addEventListener('scroll', scrollRotate);
    }
};
const scrollRotate = () => {
    if (reload.value !== null) {
        reload.value.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
    }
};

onMounted(() => {
    setReloadClassName();
});

</script>


<template>
    <div class="tp-service-funfact-box">
        <!-- service area start -->
        <section class="tp-service-area pt-85 pb-50">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tp-service-title-wrapper text-center">
                            <span class="tp-section-title__pre">
                                PERNEC <span class="title-pre-color">Corporate</span>
                                <TitleUnderIcon />
                            </span>
                            <h3 class="tp-section-title">Core <i>Values</i>
                                <span class="title-center-shape">
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div class="tp-service-slider-wrapper">
                        <div class="service-active">

                            <swiper :loop="true" :slides-per-view="3" :space-between="20" :breakpoints="{
                                '@0.00': {
                                    slidesPerView: 1,
                                },
                                '@0.50': {
                                    slidesPerView: 1,
                                },
                                '@0.75': {
                                    slidesPerView: 1,
                                },
                                '@1.00': {
                                    slidesPerView: 2,
                                },
                                '@1.50': {
                                    slidesPerView: 3,
                                },
                                '@2.00': {
                                    slidesPerView: 3,
                                },
                                '@2.25': {
                                    slidesPerView: 3,
                                },
                            }">
                                <swiper-slide v-for="(item, i) in service_data" :key="i"
                                    class="carousel__item tp-service-wrapper p-relative mb-55 mx-2">
                                    <div class="">
                                        <div class="tp-service-designation">
                                            <p class="text-center">{{ item.alphabet }}</p>
                                        </div>
                                        <h3 class="service-title" v-html="item.title"></h3>
                                        <div class="tp-service-icon">
                                            <img :src="item.img" alt="image-title-here">
                                        </div>
                                        <p class="hide-text">{{ item.description }}</p>
                                        <div class="tp-service-btn">
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tp-service-all-btn text-center fadeUp">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service area end -->


        <!-- fun fact area start -->
        <section class="tp-fun-fact-area pt-80 pb-65 p-relative">
            <div class="container container-1400">
                <div class="tp-fun-fact-shape">
                    <img class="shape-3" :src="shape_3" alt="image-shape-here">
                </div>
                <div class="row">
                    <div class="col-lg-2 col-md-4">
                        <div class="tp-fun-fact-wrapper-box">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-8">
                        <div class="tp-fun-fact-thumb p-relative">
                            <img id="reload" :src="world_img" alt="scroll">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="tp-fun-fact-content">
                            <div class="tp-fun-fact-title-wrapper">
                                <span class="tp-section-title__pre">
                                    PERNEC <span class="title-pre-color">Corporate</span>
                                    <TitleUnderIcon />
                                </span>
                                <h3 class="tp-section-title"><i>I</i>ntegrity<i> S</i>implicity<i> I</i>nnovative
                                    <span class="title-left-shape">
                                        <AboutLineIcon />
                                    </span>
                                </h3>
                                <p>The bedrock of the company is based upon the true substances of the company and are
                                    aptly acronymed “I.S.I.” ― for just as the solid base of the business operations
                                    provides a solid support to the group, so do the inner qualities of INTEGRITY,
                                    SIMPLICITY, and INNOVATION that all Pernec citizens should appreciate and therefore,
                                    strive to possess to provide the required stability to the company, now and to the
                                    future. "ISI" also reflects PERNEC’s aspirations and conduct as an innovative,
                                    forward-thinking and responsible organization geared towards embracing every
                                    opportunity to go beyond expectations.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- fun fact area end -->
    </div>
</template>

<style>
.tp-service-wrapper:hover {
    border: 1px solid #00ADEF;
}
</style>
