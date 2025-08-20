<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/Ainul.png";
import RightSymble from "@/svg/RightSymble.vue";



const team_details_contact = {
  name: "Ainul Azam bin Ahmad Khamal",
  job_title: "Board of Director / Cyseca Solution ",
  description: "Ainul Azam bin Ahmad Khamal is a seasoned legal practitioner and trademarks agent with nearly three decades of comprehensive experience. Currently serving as the Managing Partner of a distinguished boutique law firm in Kuala Lumpur, he specializes in corporate laws. Ainul Azam's expertise extends to various legal domains, including corporate restructuring, corporate finance, insolvency, information and communication technology law, competition law, copyright, and trademarks laws. He has played pivotal roles in numerous cross-border M&A transactions, acting as foreign legal counsel for clients in Saudi Arabia, Indonesia, Japan, Thailand, and the United Kingdom. His client portfolio includes Malaysian sovereign wealth funds, government-linked companies (GLCs), government-linked investment companies (GLICs), private equity firms (PEs), venture capital firms (VCs), as well as private and public listed companies (PLCs). With a diverse industry focus spanning telecommunications, automotive, real estate, financial institutions, banking, fintech, oil and gas, among others, Ainul Azam holds a Bachelor of Laws (LL.B) from the International Islamic University Malaysia and a Master in Laws (LL.M) specializing in Corporate Laws from the University of Malaya. Additionally, he is an alumnus of the Asian Institute of Management (AIM) Manila, further solidifying his expertise and international perspective in the legal arena.",
  list_title: "Board of Director",
  lists: [
    "Cyseca Solution SDN BHD",
  ]
}
const { name, job_title, member_info, description, list_title, lists } = team_details_contact


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


