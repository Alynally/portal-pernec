<script setup>
import { reactive, ref, onMounted } from "vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";


import testimonial_shape_1 from "@/assets/img/testimonial/home-3/shape-1.png";
import testimonial_shape_2 from "@/assets/img/testimonial/home-3/shape-2.png";

import testimonial_img_1 from "@/assets/img/testimonial/home-3/img-2.svg";
import testimonial_img_2 from "@/assets/img/testimonial/home-3/img-3.svg";

import testimonial_slider_img_1 from "@/assets/img/testimonial/home-3/ict.png";
import testimonial_slider_img_2 from "@/assets/img/testimonial/home-3/corenetwork.png";
import testimonial_slider_img_3 from "@/assets/img/testimonial/home-3/accessnetwork.png";
import testimonial_slider_img_4 from "@/assets/img/testimonial/home-3/infra.png";
import testimonial_slider_img_5 from "@/assets/img/testimonial/home-3/application.png";
import testimonial_slider_img_6 from "@/assets/img/testimonial/home-3/services.png";

const testimonial_images = reactive([testimonial_slider_img_1, testimonial_slider_img_2, testimonial_slider_img_3, testimonial_slider_img_4, testimonial_slider_img_5, testimonial_slider_img_6]);

const slider_text = reactive([
    "Pernec delivers advanced <span>ICT solutions</span> that drive digital transformation. With expertise in cloud services, big data, and IoT, we help businesses boost efficiency, make smarter decisions, and stay future-ready.",

    "We design and implement high-performance <span>core network</span> infrastructures that ensure seamless communication and data transfer. Our focus on optimization and security guarantees reliable connectivity with minimal downtime, supporting businesses with scalable and resilient network solutions.",

    "Our <span>access network</span> capabilities include deploying wireless networks, fiber optic systems, and broadband services that deliver fast, stable, and widespread connectivity tailored to the needs of both enterprises and end users across diverse environments.",

    "We build robust, scalable, and sustainable telecommunications <span>infrastructure</span> include data centers and network facilities that form the backbone of modern digital ecosystems, designed to support long-term growth and evolving technology demands.",

    "We develop custom <span>applications</span> tailored to specific business needs, combining intuitive user experiences, seamless integration with existing systems, and efficient workflows to enhance productivity and digital engagement.",

    "From round-the-clock customer support and professional training programs to strategic consulting, our comprehensive <span>service </span>offerings ensure that clients receive continuous guidance, technical assistance, and expert insights to navigate the digital landscape confidently.",
])


const settingImg = {
    gap: 0,
    pagination: false,
    arrows: false,
    type: 'loop',
    perPage: 1,
    isNavigation: true,
    autoplay: true,
    interval: 3000,
};

const settingText = {
    pagination: true,
    arrows: false,
    type: 'loop',
    autoplay: true,
    interval: 3000,
    breakpoints: {
        576: {
            perPage: 1,
            isNavigation: true,
        },
        768: {
            perPage: 1,
            isNavigation: false,
        }
    },
};

const mainRef = ref(null);
const thumbsRef = ref(null);


onMounted(() => {
    if (mainRef.value && thumbsRef.value && thumbsRef.value.splide) {
        mainRef.value.sync(thumbsRef.value.splide);
    }
});


</script>


<template>
    <section class="tp-testimonial-3-area pb-140 pt100">
        <div class="tp-testimonial-3-large-box"></div>
        <div class="tp-testimonial-3-shape">
            <img class="shape-1" :src="testimonial_shape_1" alt="image-title-here">
            <img class="shape-2" :src="testimonial_shape_2" alt="image-title-here">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-4">
                    <div class="tp-testimonial-3-wrapper">
                        <div class="tp-testimonial-3-wrapper-thumb p-relative">
                            <Splide :options='settingImg' ref="mainRef"
                                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                                class="testimonial-navigation-active splide">
                                <SplideSlide v-for="(item, i) in testimonial_images" :key="i" class="splide__slide">
                                    <img class="slide" :src="item" alt="image-title-here">
                                </SplideSlide>

                            </Splide>
                            <img class="shape-1" :src="testimonial_img_1" alt="image-title-here">
                            <img class="shape-2" :src="testimonial_img_2" alt="image-title-here">
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-8">
                    <div class="tp-testimonial-3-content">
                        <Splide :options='settingText' ref="thumbsRef" class="testimonial-3-active splide">

                            <SplideSlide v-for="(item, i) in slider_text" :key="i">
                                <div class="tp-testimonial-3-slider-wrapper">
                                    <p v-html="item"></p>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>
