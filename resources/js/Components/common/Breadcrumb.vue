<script setup>

import bgb2 from  "@/assets/img/breadcrumb/breadcrumb-bg-2.gif"
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Pernec title",
  },
  page_title: {
    type: String,
    default: "pernec page title",
  },
})
</script>

<template>
  <section class="breadcrumb__area breadcrumb-style pt-200 pb-200 p-relative z-index-1"
    :style="{ 'background-image': 'url(' + bgb2 + ')' }">
    <div class="breadcrumb__bg-overlay m-img"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="breadcrumb__content text-center">
            <h3 class="breadcrumb__title">
              {{ title }}
            </h3>
            <div className="breadcrumb__list breadcrumb__list-translate">
              <span> <router-link to="/">Home</router-link> </span>
              <span className="dvdr"> <i className="fa-regular fa-angle-right"></i> </span>
              <span>{{ page_title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



