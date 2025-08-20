<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import cybersecurity2 from "@/assets/img/services/service-details/cybersecurity2.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import Cyseca2 from "@/assets/img/services/service-details/Cyseca2.png"
import securityservice from "@/assets/img/services/service-details/securityservice.png"


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
  title: "Cyber Security Solutions",
  description: "Amidst today's constantly evolving business landscape, the expansion of your ecosystem, be it through legacy on-premise systems or cloud infrastructure, exposes your business to heightened risks of cyber threats. PERNEC fully acknowledges the critical importance of shielding your business from these potential dangers. Our comprehensive portfolio is designed to bolster your resilience against cyber threats. From security health-checks to robust IT security systems, we offer a range of solutions tailored to your specific needs. Our in-house endpoint application control ensures that your business users can operate with confidence and safety, knowing that their digital environment is protected",
  description_2: "At PERNEC, we deliver security solutions that work. With our in-house product development, along with a curated selection of security products and services, we provide the peace of mind that comes from knowing your business is fortified against cyber threats. Trust us to safeguard your digital assets and keep your operations secure.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: Cyseca2, title: "Security Products Product", sm_des: [
      "CYSECA Application Whitelist",
      "Next Generation Anti-Virus",
      "Endpoint Detection & Response (EDR)",
      "Next Generation Firewall",
      "Web Application Firewall",
      "Email Security",
      "Network Access Control & SIEM"
    ]
  },
  {
    id: 2, img: securityservice, title: "Security Services", sm_des: [
      "Managed Security Services (MSS)",
      "Security Operation Center (SOC)",
      "Security Posture Assessment (SPA)",
      "Cyber Threat Forensics",
      "Penetration Testing",
      "Security Training ",
      "Awareness"
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
                    <router-link :class="i === 3 ? 'active' : ''" :to="item.link">
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
              <img :src="cybersecurity2" alt="image-title-here" v-motion-pop-visible>
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

<style>
.desc{
  text-align: justify;
}
</style>
