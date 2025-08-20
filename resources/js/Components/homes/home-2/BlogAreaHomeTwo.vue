<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Navigation, Autoplay} from "swiper/modules";

import whistle from "@/assets/img/blog/whistle.jpg";
import antibribery from "@/assets/img/blog/antibribery.png";
import nogift from "@/assets/img/blog/nogift.png";
import test from "@/assets/img/blog/test.png";


const blog_data = reactive([ 
    {
        id: 1, 
        img: whistle,
        title: "Whistleblowing",
        link: "/whistleblowing",
    }, 
    {
        id: 2, 
        img: antibribery,
        title: "Anti-Bribery & Corruption",
        link: "/anti-bribery-corruption",
    },
    {
        id: 3, 
        img: nogift,
        title: "No Gift",
        link: "/no-gift",
    },
])

  
</script>

<template>
  <section class="tp-blog-2-area p-relative pt-120" id="governace_id">
    <div class="tp-blog-2-shape">
        <div class="shape-1">
          <img :src="test" alt="image-title-here">
        </div>
    </div>
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="tp-blog-2-title-wrapper">
                      <h3 class="tp-section-title" v-motion-slide-visible-left>Governance
                          <span class="title-left-shape">
                          </span>
                      </h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-blog-text justify-content-start justify-content-lg-end d-flex">
                      <p v-motion-slide-visible-left>As a PNB subsidiary, Pernec prioritizes transparency and follows corporate governance principles, striving to meet Malaysian standards.</p>
                    </div>
                </div>
              </div>
          </div>


          <div v-for="(item, index) in blog_data" :key="index" class="col-lg-4 col-md-6" v-motion-slide-visible-left>
            <div class="tp-blog-2-wrapper mb-30">
              <div class="tp-blog-2-thumb">

                <div v-if="item.img">
                      <router-link :to="item.link"><img :src="item?.img" alt="image-title-here"></router-link>
                </div> 

                <template v-if="item.img_slide">

                  <swiper 
                        :slides-per-view="1"
                        :space-between="20" 
                        :loop="true"  
                        :modules="[Navigation, Autoplay]" 
                        :autoplay="{
                          delay: 3000,
                          disableOnInteraction: false,
                        }"
                        :navigation="{nextEl: '.blog-button-next-1', prevEl:'.blog-button-prev-1'}"   
                        class="blog-img-active swiper-container">
                    <swiper-slide v-for="(item_img, i) in item.img_slide" :key="i">
                      <router-link to="/blog-details"><img :src="item_img" alt="image-title-here"></router-link>
                    </swiper-slide> 
                  </swiper>
  
                  <div class="tp-blog-2-nav">
                    <button type="button" class="blog-button-prev-1"><i class="fa-light fa-arrow-left-long"></i>
                    <b></b>
                    </button>
                    <button type="button" class="blog-button-next-1"><i class="fa-light fa-arrow-right-long"></i>
                    <b></b>
                    </button>
                  </div>
                </template>

              </div>
              <div class="tp-blog-2-content">
                  <div class="tp-blog-2-details">
                  </div>
                  <h3 class="tp-blog-2-title"><router-link :to="item.link"> <span v-html="item.title"></span> </router-link></h3>
                  <div class="tp-blog-2-btn">
                    <div class="read-more p-relative">
                      <router-link :to="item.link"><a>Read More <span><i class="fa-regular fa-arrow-right"></i></span></a></router-link>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        </div>
    </div>
  </section>
</template>

