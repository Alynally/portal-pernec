<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import telco from "@/assets/img/services/service-details/telco.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import connection from "@/assets/img/services/service-details/connection.png"
import system from "@/assets/img/services/service-details/system.png"


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
  title: "Telecommunication",
  description: "Since its establishment in 1973, Telco (Telecommunication) has remained a central focus of Pernec's business operations. This encompasses various facets such as infrastructure setup including towers, transmission, switching, and systems management. Leveraging our expertise in ICT, we've embraced Telco 2.0, marking the convergence of ICT and Telco to facilitate enhanced value exchange among upstream and downstream stakeholders. This strategic alignment allows us to drive innovation and deliver tailored solutions that cater to the evolving needs of the telecommunications industry.",
  description_2: "Our Telecommunication offerings comprise Core & Access Network solutions and Telco Systems & Applications. These encompass a wide range of services aimed at providing comprehensive solutions to our clients' telecommunications needs. From building robust network infrastructures to developing innovative systems and applications, we strive to deliver cutting-edge solutions that drive efficiency and innovation in the telecommunications industry. With a focus on quality, reliability, and customer satisfaction, Pernec is committed to providing exceptional Telecommunication services that empower businesses to thrive in the digital age.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: connection, title: "Core & Access Network", sm_des: [
      "Network Management System",
      "Fiber Optics",
      "Endpoint Public Switched Telephone Network (PSTN)",
      "Multi Service Access Node (MSAN)",
      "Residential Gateway",
      "Wi-Fi"
    ]
  },
  {
    id: 2, img: system, title: "Telco Systems & Application", sm_des: [
      "Business Support System (BSS)",
      "Operational Support System (OSS)",
      "Service Performance Assurance Network Management System",
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
                    <router-link :class="i === 4 ? 'active' : ''" :to="item.link">
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
              <img :src="telco" alt="image-title-here" v-motion-pop-visible>
            </div>
            <h3 class="tp-service-details-title"  v-motion-slide-visible-left>{{ title }}</h3>
            <p  v-motion-slide-right>{{ description }}</p>
            <p  v-motion-slide-visible-left> {{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-9 col-md-6"  v-motion-slide-visible-left>
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
