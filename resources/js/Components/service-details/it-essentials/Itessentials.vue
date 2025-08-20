<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import itessentials from "@/assets/img/services/service-details/itessentials.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import hosting from "@/assets/img/services/service-details/hosting.png"
import networking from "@/assets/img/services/service-details/networking.png"


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
  title: "IT Essentials",
  description: "In today’s fast-paced digital world, the performance of your business is intricately linked to the quality and efficiency of your IT infrastructure. A robust and adaptable infrastructure not only ensures swift adaptation to evolving technological landscapes but also serves as the cornerstone for innovation, enabling you to stay ahead of the competition, streamline operations, and explore new avenues for growth and expansion",
  description_2: "With over two decades of expertise in ICT System Integration, we at PERNEC stand ready to collaborate with you in deploying a tailored IT infrastructure that aligns seamlessly with your business objectives. Whether you require server and storage solutions or networking services, our team of dedicated professionals will work closely with you to design and implement a cloud-ready infrastructure that not only meets your current needs but also lays a solid foundation for future growth and expansion. Trust PERNEC to be your partner in navigating the complexities of the digital age and unlocking the full potential of your business.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {

    id: 1, img: hosting, title: "Server and Storage", sm_des: [
      "Storage",
      "Database",
      "Endpoint Devices"
    ]
  },
  {

    id: 2, img: networking, title: "Networking", sm_des: [
      "Wired and Wireless Network",
      "Structured Cabling",
      "Server"
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
                    <router-link :class="i === 0 ? 'active' : ''" :to="item.link">
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
              <img :src="itessentials" alt="image-title-here" v-motion-pop-visible>
            </div>
            <h3 class="tp-service-details-title"  v-motion-slide-visible-left>{{ title }}</h3>
            <p   v-motion-slide-right>{{ description }}</p>
            <p   v-motion-slide-visible-left>{{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-5 col-md-6"  v-motion-slide-visbile-left>
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
</template>
