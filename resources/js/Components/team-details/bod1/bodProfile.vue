<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/Datukzainon.png";
import RightSymble from "@/svg/RightSymble.vue";



const team_details_contact = {
  name: "Datuk Zainun Aishah Ahmad",
  job_title: "Board of Director / Pernec Corporation Berhad",
  description: "Datuk Zainun Aishah Ahmad's illustrious career, spanning from her Honours Degree in Economics from the University of Malaya to her 35-year tenure at the Malaysian Industrial Development Authority (MIDA) as Director General, showcases her unwavering dedication to Malaysia's industrial development. Her leadership at Pernec, where she served as Chairman since 2005, and directorships at Maybank Berhad, Scomi Engineering Berhad, Microlink Solutions Berhad, and Degem Berhad highlight her versatility and expertise across industries. From academia to boardrooms, Datuk Zainun's journey is a shining example of leadership, commitment, and vision, making her an inspirational figure in Malaysia's business landscape.",
  list_title: "Board of Director",
  lists: [
    "Pernec Corporation Berhad",
    "Pernec Integrated Network Systems",
  ]
}
const { name, job_title, description, list_title, lists } = team_details_contact


</script>

<template>
  <section class="tp-team-details-area p-relative pt-120 pb-90">
    <div class="tp-team-details-shape">
      <img class="shape-1" :src="team_shape_1" alt="image-title-here">
      <img class="shape-2" :src="team_shape_2" alt="image-title-here">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="tp-team-details-thumb p-relative text-center fadeLeft">
            <img :src="team_member" alt="image-title-here">
          </div>
        </div>
        <div class="col-lg-8">
          <div class="tp-team-details-wrapper fadeRight">
            <div class="row">
              <div class="col-lg-9">
                <div class="tp-team-detials-designation-wrapper">
                  <div class="tp-team-details-designation-content">
                    <h4 class="tp-team-details-designation-title">{{ name }}</h4>
                    <p >{{ job_title }}</p>
                    <div class="tp-team-details-meta d-flex">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
              </div>
            </div>

            <div class="tp-team-details-info">
              <p>{{ description }}</p>
            </div>

            <div class="tp-team-details-list">
              <p class="list-title">{{ list_title }}</p>
              <ul>
                <li v-for="(item, i) in lists" :key="i">
                  <span>
                    <RightSymble />
                  </span>{{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-md-12">
              <router-link to="/team" class="back-button">
                <i class="fas fa-arrow-left"></i> Back
              </router-link>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
