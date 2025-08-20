<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import defence from "@/assets/img/services/service-details/defence.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import hardenednetwork from "@/assets/img/services/service-details/hardenednetwork.png"
import securitysystem from "@/assets/img/services/service-details/securitysystem.png"
import gadget from "@/assets/img/services/service-details/gadget.png"


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
  title: "Defence & Tactical Solutions",
  description: `Amidst the ongoing modernization and digitalization within the defense industry, the imperative for robust digital transformation becomes increasingly apparent, particularly with the stringent "military-grade" standards in place. Recognizing these evolving challenges, we are committed to adapting and innovating to meet the dynamic demands of defense operations. Leveraging our extensive expertise in ICT convergence and access to domain experts, we're primed to deliver highly secure convergence ICT solutions that surpass the exacting standards of the defense sector.`,
  description_2: "With a focus on resilience and adaptability, our Defense & Tactical Solutions portfolio is designed to address the unique challenges faced by defense organizations. From fortified infrastructure to hardened systems and advanced gadgets, we prioritize security across all facets of our offerings. By integrating the latest technological advancements with our domain expertise, we empower defense agencies to bolster their operational capabilities and sustain a competitive edge in an increasingly intricate and interconnected landscape. Through our unwavering commitment to continuous innovation and customer-centric solutions, we stand poised to assist defense organizations in meeting their evolving needs and accomplishing their mission objectives.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: hardenednetwork, title: "Hardened Infrastructure", sm_des: [
      "Hardened Network",
      "Optimised server, storage and applications over Distributed Computing"
    ]
  },
  {
    id: 2, img: securitysystem, title: "Hardened Systems", sm_des: [
      "Non-proprietary open suite of consolidated tools for network-centric operation",
      "IT Security systems"
    ]
  },
  {
    id: 3, img: gadget, title: "Gadgets and Assets", sm_des: [
      "Ruggedized devices"
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
                    <router-link :class="i === 7 ? 'active' : ''" :to="item.link">
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
              <img :src="defence" alt="image-title-here" v-motion-pop-visible>
            </div>
            <h3 class="tp-service-details-title"  v-motion-slide-visible-left>{{ title }}</h3>
            <p   v-motion-slide-right>{{ description }}</p>
            <p   v-motion-slide-visible-left> {{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-12 col-md-6"  v-motion-slide-visible-left>
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
