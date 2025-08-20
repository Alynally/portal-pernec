<script setup>
import { reactive } from "vue";
import shape_1 from "@/assets/img/offering/shape.png";
import shape_2 from "@/assets/img/offering/shape-2.png";
import bg_img from "@/assets/img/offering/bg.png";
import telco from "@/assets/img/services/home-3/telco.png";
import essentials3 from "@/assets/img/offering/essentials3.png";
import cyseca from "@/assets/img/offering/cyseca.png";
import moreservice from "@/assets/img/offering/moreservice.png";

const offering_data = reactive([
    {
        id: 1,
        img: essentials3,
        title: "ICT<br /> Essentials",
        link: "it-essentials" 
    },
    {
        id: 2,
        img: cyseca,
        title: "Cyber Security <br /> Solution",
        link: "cyber-security" 
    },
    {
        id: 3,
        img: telco,
        title: "Telecommunication <br /> Solutions",
        link: "telecommunication"
    },
    {
        id: 4,
        img: moreservice,
        title: "Click Here to <br /> Explore More Services",
        link: "service"
    },
])
  
const offering_content = reactive({
  sub_title: 'Feature <span class="title-pre-color">IT Services</span>',
  title: "Thing that you might be interested",
  info: 'As building complexity rises, the architecture <br> landscape diversifies with technological prowess',
  info_2: 'Bring them together and you overcome the ordinary.',

})
const {sub_title, title, info} = offering_content

</script>

<template>
  <section class="tp-offer-area p-relative pt-80 pb-100" :style="{ backgroundImage: `url(${bg_img})` }" id="service_id">
      <div class="tp-offer-overlay"></div>
      <div class="tp-offer-shape">
         <img class="shape-1 d-none d-xl-block" :src="shape_1" alt="image-title-here">
         <img class="shape-2" :src="shape_2" alt="image-title-here">
      </div>
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6">
               <div class="tp-feature-title-wrapper">
                  <span class="tp-section-title__pre" v-motion-slide-visible-left> <span v-html="sub_title"></span> 
                  </span>
                  <h3 class="tp-section-title" v-motion-slide-visible-left>{{ title }}
                     <span class="title-left-shape">
                     </span>
                  </h3>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="tp-feature-wrapper offer p-relative">
                  <p v-html="info" v-motion-slide-visible-left></p>
               </div>
            </div>
         </div>
         <div class="row">

            <div v-for="(item, index) in offering_data" :key="index" class="col-lg-3 col-md-6 col-sm-6" v-motion-slide-visible-left>
               <div class="tp-offer-wrapper text-center mb-30">
                  <h3 class="offer-title" v-html="item.title"></h3>
                  <div class="tp-offer-wrapper-thumb">
                     <img :src="item.img" alt="image-title-here">
                  </div>
                  <div class="tp-offer-wrapper-btn">
                     <router-link :to="`/${item.link}`">Read Out More <i class="fa-solid fa-arrow-up-right"></i></router-link>
                  </div>
               </div>
            </div> 
         </div>
      </div>
   </section>
</template>