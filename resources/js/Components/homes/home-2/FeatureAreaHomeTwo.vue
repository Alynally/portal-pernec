
<script setup>
import { reactive } from "vue"; 
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import feature_img_1 from "@/assets/img/feature/home-2/img-2.jpg";
import feature_img_2 from "@/assets/img/feature/home-2/img-3.jpg";
import feature_img_3 from "@/assets/img/feature/home-2/img-1.jpg";

const feature_slide_data = reactive([
    {
        id: 1, 
        img: feature_img_1,
        subtitle: "Project no:2",
        title: "Artificial intelligence",
    },
    {
        id: 2, 
        img: feature_img_2,
        subtitle: "Project no:3",
        title: "Modern Web Design",
    },
    {
        id: 3, 
        img: feature_img_3,
        subtitle: "Project no:1",
        title: "App Design",
    },
    // reused
    {
        id: 1, 
        img: feature_img_1,
        subtitle: "Project no:2",
        title: "Artificial intelligence",
    },
    {
        id: 2, 
        img: feature_img_2,
        subtitle: "Project no:3",
        title: "Modern Web Design",
    },
    {
        id: 3, 
        img: feature_img_3,
        subtitle: "Project no:1",
        title: "App Design",
    },
  ])

const setting = {
  type   : 'loop',
  pagination: false,
  arrows: false,
  focus: 'center',
  perPage: 1,
  gap:'30px',
  padding: '25%',
  throttle: 300,
  breakpoints: {
      991: {
          padding: '15%'
      },
      765: {
          padding: '12%',
          gap:'25px',
      },
      575: {
          arrows: false,
          padding: '0%',
      },
    },
}
</script>

<template>
  <section class="tp-feature-area-2">
      <div class="container-fluid gx-0">
          <div class="row gx-0">
            <div class="col-lg-12">
                <div class="tp-feature-active-2 splide wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                  <Splide :options="setting"  class="splide__track pt-35">
                    <SplideSlide v-for="(item, index) in feature_slide_data" :key="index" class="splide__slide">
                          <div class="tp-feature-thumb-2 w-img p-relative">
                            <router-link to="/portfolio-details">
                              <img :src="item.img" alt="image-title-here"></router-link>
                            <div class="tp-feature-2-info d-flex align-items-center p-relative">
                                <div class="tp-feature-2-title-wrapper">
                                  <span class="tp-feature-2-title-sub">{{ item.subtitle }}</span>
                                  <h4 class="tp-feature-2-title">
                                    <router-link to="/portfolio-details">{{ item.title }}</router-link>
                                   </h4>
                                </div>
                                <div class="tp-feature-2-btn">
                                  <router-link to="/portfolio-details"><i class="fa-regular fa-arrow-up-right"></i></router-link>
                                </div>
                            </div>
                          </div>
                      </SplideSlide> 
                  </Splide>
                </div>
            </div>
          </div>
      </div> 
    </section>
</template>
