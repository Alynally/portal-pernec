<script setup>

import service from "@/assets/img/services/service-details/service.jpg"

const nextService = {
  title: "Next Services",
  description: "With our expanded range of services, Pernec is your one-stop destination for all your IT needs. Whether you're a small startup or a large enterprise, we have the solutions, expertise, and dedication to help you succeed in today's digital world.",
  descrip: "Stay tuned for more updates and announcements as we continue to expand and enhance our services. The future of IT is bright, and it's happening at Pernec. Join us on this exciting journey and unlock the full potential of your business with our innovative IT solutions!",
}

const { title, description, descrip } = nextService
</script>

<template>
  <section class="tp-service-details-area pt-100 pb-90">
    <div class="container">
      <div class="row"></div>
      <div class="col-lg-12">
        <div class="tp-service-details-wrapper">
          <div class="tp-service-details-thumb col-lg-8">
            <img :src="service" alt="image-title-here" v-motion-pop-visible>
          </div>
          <h3 class="tp-service-details-title"  v-motion-slide-visible-left>{{ title }}</h3>
          <p   v-motion-slide-right>{{ description }}</p>
          <p   v-motion-slide-visible-left>{{ descrip }}</p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <router-link to="/service" class="back-button">
              <i class="fas fa-arrow-left"></i> Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>