<script setup>
import { reactive } from "vue";
import telco from "@/assets/img/services/home-3/telco.png";
import essentials from "@/assets/img/services/home-3/essentials.png";
import productivity from "@/assets/img/services/home-3/productivity.png";
import enabler from "@/assets/img/services/home-3/enabler.png";
import cyseca from "@/assets/img/offering/cyseca.png";
import publicsafety from "@/assets/img/services/home-3/public-safety.png";
import power from "@/assets/img/services/home-3/power.png";
import defence from "@/assets/img/services/home-3/defence.png";
import deployment2 from "@/assets/img/services/home-3/deployment2.png";
import devops from "@/assets/img/services/home-3/devops.png";
import staytuned from "@/assets/img/services/home-3/staytuned.png";
// import axios from "axios";



const service = reactive([
  {
    id: 1,
    icon: essentials,
    title: "IT </br> Essentials",
    description: "Explore our IT Essentials service for streamlined business solutions",
    link: '/it-essentials'
  },
  {
    id: 2,
    icon: productivity,
    title: "ICT Productivity </br> Suites",
    description: "Boost your business productivity with our advanced ICT solutions",
    link: '/ict-productivity-suites'
  },
  {
    id: 3,
    icon: enabler,
    title: "Digital Trasnsformation Enabler",
    description: "Empower your digital transformation with our specialized services",
    link: '/digital-transformation-enabler'
  },
  {
    id: 4,
    icon: cyseca,
    title: "Cyber Security Solution",
    description: "Secure your business with our Cyber Security Solutions",
    link: '/cyber-security'
  },
  {
    id: 5,
    icon: telco,
    title: "Telecommunication",
    description: "Pernec provides Telco solutions, spanning infrastructure and Telco 2.0",
    link: '/telecommunication'
  },
  {
    id: 6,
    icon: publicsafety,
    title: "Public Safety",
    description: "Pernec innovates public safety: CCTV, analytics, biometrics for 20 years",
    link: '/public-safety'
  },
  {
    id: 7,
    icon: power,
    title: "Power & </br> Utilities",
    description: "Empower utilities' digital growth with Renewable Energy, Smart Meters, and Infra Systems",
    link: '/power-and-utilities'
  },
  {
    id: 8,
    icon: defence,
    title: "Defence Tactical </br> Solutions",
    description: 'Provide "military-grade" defense solutions with ICT expertise: Infrastructure, Systems, Gadgets',
    link: '/defence-tactical-solutions'
  },
  {
    id: 9,
    icon: deployment2,
    title: "Deployment Operation Services",
    description: "Deliver end-to-end ICT solutions with certified experts, partners, and specialized resources",
    link: '/deployment-operation-services'
  },
  {
    id: 10,
    icon: devops,
    title: "DevSecOps",
    description: "Optimize your DevOps pipeline with expert integration and advanced tools.",
    link: '/dev-sec-ops'
  },
  {
    id: 11,
    icon: staytuned,
    title: "Stay Tuned for More Offerings",
    description: "Stay tuned for exciting updates and upcoming offerings",
    link: '/nextservice'
  },

])

</script>

<template>
  <section class="tp-service-breadcrumb-area p-relative pt-120">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="tp-service-breadcrumb-title-wrapper">
            <span class="tp-section-title__pre">
              service <span class="title-pre-color">IT Solutions</span>
            </span>
            <h3 class="tp-section-title">Best Digital <span class="title-color">Technology</span> <br> Agency For People
            </h3>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="tp-service-breadcrumb-title-wrapper justify-content-start justify-content-xl-end d-flex">
            <p>As building complexity rises, the architecture
              landscape diversifies with technological prowess.</p>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="item in service" :key="item.id" class="col-xl-4 col-lg-3 col-md-6">
          <div v-if="service.length > 0">
            <div class="tp-service-3-content breadcrumb-item mb-30">
              <div class="tp-service-3-content-thumb">
                <img :src="item.icon" alt="image-title-here">
              </div>
              <h4 class="tp-service-breadcrumb-title">
                <router-link :to="item.link"><span v-html="item.title"></span></router-link>
              </h4>
              <p>{{ item.description }}</p>
              <div v-if="item.link !== '/service'" class="tp-service-btn">
                <router-link :to="item.link">Read More <i class="fa-solid fa-arrow-up-right"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
