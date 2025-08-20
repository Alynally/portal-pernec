<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import HeroLineIcon from "../../../svg/HeroLineIcon.vue";

import shape_1 from "@/assets/img/hero/hero-2/shape-1.png";
import shape_2 from "@/assets/img/hero/hero-2/shape-2.png";
import shape_3 from "@/assets/img/hero/hero-2/shape-3.png";
// import img1 from "@/assets/img/hero/hero-2/hero-bg.png"

// import hero from "@/assets/img/hero/hero-2/hero-bg.png"

const slider_data = [
    "technology",
    "architecture",
    "Computer",
]

</script>

<template>
    <section class="tp-hero-2-area p-relative" style="background-image: url(assets/img/hero/hero-2/hero-bg.png);">
        <div class="tp-hero-2-wrapper p-relative">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-12">
                        <div class="tp-hero-2-shape">
                            <img class="shape-1 d-none d-lg-block" :src="shape_1" alt="image-theme-pure" />
                            <img class="shape-2 d-none d-lg-block" :src="shape_2" alt="image-theme-pure" />
                            <img class="shape-3 d-none d-lg-block" :src="shape_3" alt="image-theme-pure">
                        </div>
                        <div class="tp-hero-2-content text-center pt-200">
                            <div class="tp-hero-2-title-wrapper fadeUp">
                                <h3 class="tp-hero-2-title">
                                    Most Trusted
                                    <HeroLineIcon /> <br /> Technology <span>Services</span>
                                </h3>
                            </div>
                            <div class="tp-hero-2-btn fadeUp">
                                <router-link class="tp-btn" to="/contact">Tell Us How Can We Help</router-link>
                            </div>
                        </div>
                        <div class="tp-hero-2-side-text">
                            <div class="tp-hero-2-mail">
                                <a href="mailto:Contact@gmail.com"><i class="fa-light fa-envelope"></i>
                                    Contact@gmail.com
                                </a>
                            </div>
                            <div class="tp-hero-2-message">
                                <p>
                                    <i class="fa-solid fa-comments"></i>
                                    734 H, Bryan Burlington, NC 27215
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-hero-2-bottom p-relative d-none d-md-block">
            <swiper :slides-per-view="1" :space-between="20" :loop="true" :modules="[Navigation, Autoplay]" :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }" :navigation="{ nextEl: '.hero-button-next-1', prevEl: '.hero-button-prev-1' }" class="hero-active-2">
                <swiper-slide v-for="(item, index) in slider_data" :key="index" class="swiper-slide">
                    <h3 class="tp-hero-2-bottom-title">{{ item }}</h3>
                </swiper-slide>
            </swiper>
            <div class="tp-hero-2-nav d-none d-xl-block">
                <button type="button" class="hero-button-prev-1">prev</button>
                <button type="button" class="hero-button-next-1">Next</button>
            </div>
        </div>
    </section>
</template>
