<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import operation from "@/assets/img/services/service-details/operation.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import consultancy from "@/assets/img/services/service-details/consultancy.png"
import helpdesk from "@/assets/img/services/service-details/helpdesk.png"
import deploy from "@/assets/img/services/service-details/deploy.png"


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
  title: "Deployment & Operation Services",
  description: "Pernec prides itself on its robust team, which includes certified Project Managers, skilled IT engineers, proficient programmers, and accredited technical support professionals. Collaborating seamlessly with our network of specialized partners and sub-contractors, we offer an extensive range of ICT services tailored to meet your organization's needs at every stage of development. From the earliest phases of presales consultancy to the meticulous execution of projects and ongoing post-project support, we are dedicated to ensuring that your objectives are not only met but exceeded.",
  description_2: "Our Deployment and Operation Services encompass a comprehensive suite of offerings, including consultancy, deployment, and operational assistance. Whether you require expert guidance to refine project concepts, meticulous deployment of technological solutions, or ongoing operational support to maintain optimal functionality, Pernec is committed to providing tailored solutions that drive your organization towards success. With our collaborative approach and unwavering commitment to excellence, we stand ready to partner with you on your journey towards achieving your ICT goals.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: consultancy, title: "Consultancy Services", sm_des: [
      "ICT Consultancy",
      "Network Design"
    ]
  },
  {
    id: 2, img: helpdesk, title: "Operation Services", sm_des: [
      "Helpdesk & Support Maintenance",
      "Managed Services"
    ]
  },
  {
    id: 3, img: deploy, title: "Deployment Services", sm_des: [
      "Project Management",
      "Site Acquisition",
      "Install, Test, Commission",
      "Integration, Migration",
      "Change Management",
      "Software Development"
    ]
  }
])



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
                    <router-link :class="i === 8 ? 'active' : ''" :to="item.link">
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
              <img :src="operation" alt="image-title-here" v-motion-pop-visible>
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
