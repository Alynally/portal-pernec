<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import transformation from "@/assets/img/services/service-details/transformation.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import cloud from "@/assets/img/services/service-details/cloud.png"
import data from "@/assets/img/services/service-details/data.png"
import vr from "@/assets/img/services/service-details/vr.png"


if (typeof window !== 'undefined') {
  import('bootstrap/dist/js/bootstrap');
}

const service_details_content = {
  service_details_tab: reactive([
    {
    service: "IT Essentials",
    link:"/it-essentials"
    },
    {
    service: "IT Productivity Suites",
    link:"/ict-productivity-suites"
    },
    {
    service: "Digital Transformation & Enabler",
    link:"/digital-transformation-enabler"
    },
    {
    service: "Cyber Security Solution",
    link:"/cyber-security"
    },
    {
    service: "Telecommunication Solutions",
    link:"/telecommunication"
    },
    {
    service: "Power & Utilities",
    link:"/power-and-utilities"
    },
    {
    service: "Public Safety",
    link:"/public-safety"
    },
    {
    service: "Defence Tactical Solutions",
    link:"/defence-tactical-solutions"
    },
    {
    service: "Deployment Operation Services",
    link:"/deployment-operation-services"
    },
    {
    service: "DevSecOps",
    link:"/dev-sec-ops"
    }
  ]),
  title: "Digital Transformation Enabler",
  description: "Elevate your business to new heights by embracing the latest technologies and innovative solutions to enhance business value and drive sustainable growth. In today's dynamic marketplace, staying ahead requires a proactive approach to digital transformation. While there's no universal solution for this journey, our team is dedicated to providing guidance and support every step of the way. We offer intelligent platforms to streamline operations, cutting-edge analytics tools to extract valuable insights from your business data, and user-centric experiences tailored to your unique needs.",
  description_2: "Our comprehensive Digital Transformation Enabler encompasses a diverse range of services, including intelligent platforms, a robust data landscape, and user experience enhancements. With our expertise and personalized solutions, your business can stay agile and competitive in the rapidly evolving digital landscape. Let us partner with you to navigate the complexities of digital transformation and unlock new opportunities for sustainable growth and success.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: cloud, title: "Intelligent Platforms", sm_des: [
      "Cloud Platforms",
      "Virtualization",
      "Software Defined Network"
    ]
  },
  {
    id: 2, img: data, title: "Data Landscape", sm_des: [
      "Big Data",
      "Data Analytics",
      "Artificial Intelligence"
    ]
  },
  {
    id: 3, img: vr, title: "User Experience", sm_des: [
      "Smart Glass",
      "Virtual Reality",
      "Augmented Reality"
    ]
  }
])

// video popup
import VideoModal from "@/Components/common/VideoModal.vue";
import { useVideoModal } from "@/composables/useVideoModal.js";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';

</script>

<template>
  <section class="tp-service-details-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="tp-service-widget">
            <div class="tp-service-widget-item mb-40">
              <div class="tp-service-widget-tab">
                <ul>
                  <li v-for="(item, i) in service_details_tab" :key="i"  v-motion-slide-visible-left>
                    <router-link :class="i === 2 ? 'active' : ''" :to="item.link">
                      {{ item.service }}
                      <i class="fa-regular fa-arrow-right-long"></i></router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tp-service-widget-item mb-40">
              <div class="tp-service-contact">
                <div class="tp-service-contact-form"  v-motion-slide-visible-left>
                    <h1>Contact Us</h1>
                  <ContactFormServiceDetails />
                  <p class="ajax-response"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="tp-service-details-wrapper">
            <div class="tp-service-details-thumb">
              <img :src="transformation" alt="image-title-here" v-motion-pop-visible>
            </div>
            <h3 class="tp-service-details-title"  v-motion-slide-visible-left>{{ title }}</h3>
            <p   v-motion-slide-right>{{ description }}</p>
            <p   v-motion-slide-visible-left> {{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-6 col-md-6"  v-motion-slide-visible-left>
                <div class="tp-business-box mb-30">
                  <div class="tp-business-box-title d-flex align-items-center">
                    <span v-if="index === 0"> <img :src="item.img"> </span>
                    <span v-if="index === 1"> <img :src="item.img"> </span>
                    <span v-if="index === 2"> <img :src="item.img"> </span>
                    <h4 class="tp-business-title">{{ item.title }}</h4>
                  </div>
                  <div class="tp-service-details-list">
                    <ul>
                      <li v-for="(feture, index) in item.sm_des" :key="index">
                        <span>
                          <RightSymble />
                        </span> {{ feture }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <video-modal ref="video_modal" :video-url="videoUrl" />
</template>
