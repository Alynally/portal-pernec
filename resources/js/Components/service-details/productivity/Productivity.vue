<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import productivity from "@/assets/img/services/service-details/productivity.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import enterprise from "@/assets/img/services/service-details/enterprise.png"
import specific from "@/assets/img/services/service-details/specific.png"


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
  title: "ICT Productivity Suites",
  description: "In the dynamic realm of ICT, software systems and applications undergo rapid changes, often rendering them outdated and potentially disrupting business productivity. Recognizing this challenge, we at PERNEC offer a diverse application portfolio sourced from established partners and reliable commercial open systems. Our solutions cater to both general enterprise requirements and specific vertical industry needs, providing comprehensive and adaptable solutions to address various business demands.",
  description_2: "Our meticulously curated productivity suites are designed to deliver the perfect mix and types of applications tailored to your unique needs. Leveraging emerging technologies, we ensure your business maintains agility and relevance in the ever-evolving digital landscape. Whether you require general enterprise solutions or industry-specific tools, our ICT Productivity Suites are crafted to empower your organization, foster innovation, and drive sustained growth.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: enterprise, title: "General Enterprise", sm_des: [
      "Unified Communications",
      "HRIMS",
      "Library Management",
      "Document Management",
      "Enterprise Mobile Management",
      "Device Management",
      "Building and Facility Management"
    ]
  },
  {
    id: 2, img: specific, title: "Specific Industry", sm_des: [
      "Fund / Investment Management",
      "Traffic / Highway Management",
      "Fleet Management",
      "Logistics / Port Management",
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
                    <router-link :class="i === 1 ? 'active' : ''" :to="item.link">
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
              <img :src="productivity" alt="image-title-here" v-motion-pop-visible>
            </div>
            <h3 class="tp-service-details-title"  v-motion-slide-visible-left>{{ title }}</h3>
            <p  v-motion-slide-right>{{ description }}</p>
            <p  v-motion-slide-visible-left> {{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-6 col-md-6"  v-motion-slide-visible-left>
                <div class="tp-business-box mb-30">
                  <div class="tp-business-box-title d-flex align-items-center">
                    <span v-if="index === 0"> <img :src="item.img"> </span>
                    <span v-if="index === 1"> <img :src="item.img"> </span>
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
