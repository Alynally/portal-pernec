<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import devops from "@/assets/img/services/service-details/devops.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import cubes from "@/assets/img/services/service-details/cubes.png"
import continuous from "@/assets/img/services/service-details/continuous.png"


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
  title: "DevSecOps",
  description: "Embark on a transformative journey into the realm of DevSecOps, where innovation meets security to redefine the paradigms of software development. At the forefront of this revolution, our suite of DevSecOps solutions offers a holistic approach, seamlessly integrating development, security, and operations into a unified ecosystem. With meticulous attention to detail, we curate each component of our solutions to align with the evolving landscape of digital transformation. Our commitment to DevSecOps extends beyond mere implementation – it's about fostering a culture of collaboration and innovation within organizations. By breaking down silos between development, security, and operations teams, we enable seamless communication and alignment of objectives, resulting in faster delivery cycles and higher-quality software. With our deep expertise in DevSecOps practices and technologies, we guide organizations towards a more secure and efficient software development lifecycle, ensuring that security is ingrained into the DNA of their operations.",
  description_2: "From the inception of code to the deployment of robust applications, our DevSecOps framework ensures that security is not an afterthought but an integral part of every stage of the software development lifecycle. Through the implementation of cutting-edge security measures, automated testing, and continuous monitoring, we empower organizations to build and deploy software with confidence and resilience against cyber threats. At every step of the journey, we prioritize flexibility and customization, recognizing that each organization has unique challenges and requirements. Our solutions are highly adaptable, designed to evolve alongside our clients' needs while maintaining compliance with industry regulations and standards. Whether you're a startup striving for secure growth or an enterprise aiming to fortify your DevSecOps capabilities, we're here to empower you with the tools, knowledge, and support needed to succeed in today's rapidly evolving digital landscape.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
{
    id: 1, img: continuous, title: "CI/CD", sm_des: [
      "Frequent Code Integration",
      "Increased Deployment Frequency",
      "Continuous Delivery of Features"
    ]
  },
  {
    id: 2, img: cubes, title: "Microservices", sm_des: [
      "Decoupled Architectural Style",
      "Improved Fault Isolation",
      "Efficient Resource Utilization"
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
                    <router-link :class="i === 9 ? 'active' : ''" :to="item.link">
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
              <img :src="devops" alt="image-title-here" v-motion-pop-visible>
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

<style>
.desc{
  text-align: justify;
}
</style>
