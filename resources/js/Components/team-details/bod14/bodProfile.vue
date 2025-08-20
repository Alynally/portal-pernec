<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/hiroki.png";
import RightSymble from "@/svg/RightSymble.vue";



const team_details_contact = {
    name: "Mr. Yoshifuji Hiroki",
    job_title: "Board of Director / Pernec Integration Network Systems ",
    description: "Mr. Yoshifuji Hiroki He was appointed to the Board on 3 April 2023. He is currently a Senior Professional, Global Department, NEC Corporation. He has been with NEC Corporation since 2002.",
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
