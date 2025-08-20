<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/Latif.png";



const team_details_contact = {
  name: "Abdul Latif Allah Pitchy",
  job_title: "Senior Manegement/ Pernec Integrated Network System",
  description: "Abdul Latif, the Chief Integration Officer, commenced his career with Pernec in 1996, amassing over 25 years of invaluable experience in project management and leadership within the IT and Telecommunication sectors. Since 2020, Latif has held the position of the head of Pernec's Cyberjaya branch, demonstrating his capabilities in driving strategic initiatives. He holds a first-class MBA in Strategic Management and a Bachelor's Degree in Science & Computer from Universiti Teknologi Malaysia. Latif's credentials also include being a certified Project Management Professional (PMP) since 2013, underscoring his expertise in project execution and integration. His multifaceted background equips him well to spearhead integration efforts within Pernec, ensuring seamless operations and strategic alignment across the organization.",
}
const { name, job_title, member_info, description } = team_details_contact




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
                    <p class="tp-team-details-designation">{{ job_title }}</p>
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
    </div>
  </section>
</template>


