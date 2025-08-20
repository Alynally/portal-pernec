<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/Ariff.png";

const team_details_contact = {
  name: "Ariff Fadzli Fadzil",
  job_title: "Senior Manegement/ Pernec Integrated Network System",
  description: "Ariff Fadzli Fadzil, the Chief Financial Officer, brings a wealth of financial expertise to Pernec. Prior to joining the company, he held the position of Chief Financial Officer at Perbadanan Kemajuan Ekonomi Islam Sdn Bhd (PKEINPK). With over 26 years of experience in the private sector and state government agencies, Ariff has held senior positions in various esteemed companies. These include Kuala Lumpur Metropolitan College University, KUB Malaysia Bhd, Kapar Energy Ventures Sdn Bhd, Ras Hafeera Sdn Bhd, and Konsortium Perkapalan Bhd. His academic credentials include a Bachelor of Accounting from IIUM and Chartered Accountant certification from MIA. Ariff's extensive background underscores his ability to navigate complex financial landscapes, making him an invaluable asset in guiding Pernec's financial strategies and operations.",
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



