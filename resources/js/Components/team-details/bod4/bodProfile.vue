<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/Azzman.png";
import RightSymble from "@/svg/RightSymble.vue";



const team_details_contact = {
  name: "Tengku Datuk Dr. Mohd Azzman Shariffadeen Tengku Ibrahim,",
  job_title: "Board of Director / Pernec Integration Network Systems ",
  description: "Tengku Datuk Dr. Mohd Azzman Shariffadeen Tengku Ibrahim, appointed to the Board on 2 December 2004, is a respected figure in the Information Technology (IT) sector. As the former President and CEO of MIMOS Berhad, a prominent Government-owned research and development (R&D) organization, he played a pivotal role in the inception of the Multimedia Super Corridor (MSC). With a Ph.D. in Automatic Control from UMIST, UK, Tengku Azzman has a robust academic background, having presented and published over 70 papers. His influence extends to international committees such as the United Nations Task Force on Information and Communications Technology (ICT) and the International Network of UNESCO Chairs in Communications (ORBICOM), Canada. Locally, he serves on the National Council for Scientific Research and Development and has been a Board member of University Malaysia since 2003. Currently, he holds the esteemed position of Chairman of the Board of Directors at the University of Malaya, showcasing his enduring commitment to education and technological advancement.",
  list_title: "Board of Director",
  lists: [
    "Pernec Integrated Network System",
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
