<script setup>
import { reactive } from "vue";

// import  business_shape_4 from "@/assets/img/business/shape-4.png" ;
import PernecStaff from "@/assets/img/business/img-3.png";
import PernecHQ from "@/assets/img/business/PernecHQ.png";
import PERNECALL from "@/assets/img/business/PERNECALL.png";


const business_content = reactive({
    title: "Company's Overview",
    info: "PERNEC Corporation Bhd stands as a prominent player in Malaysia's telecommunications infrastructure and information, communications, and technology sector. With a strong foothold in the nation, we actively engage in collaborations and smart partnerships to enhance our presence. As part of our strategic growth initiatives, we are diligently venturing into international markets, showcasing our cutting-edge telecommunications services and products. ",
    info2: "For over fifthy years, we have remained steadfast in delivering innovative, dependable, and top-tier products and services alongside unwavering customer support. Our commitment lies in crafting novel solutions for both individual consumers and businesses, propelling innovation within the telecommunications and ICT landscape.",
})
const { title, info, info2 } = business_content





</script>

<template>
    <section class="tp-business-area p-relative pt-110 pb-90" id="company_overview">
        <div class="tp-business-shape">
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="tp-business-thumb-wrapper p-relative">
                        <div class="tp-business-thumb text-center">
                            <img class="PERNECall" :src="PERNECALL" alt="PERNECALL">
                        </div>
                        <div class="circle-animation business-4"> <!--line-->
                            <span class="tp-circle-1"></span> <!--circle symbol -->
                        </div>
                        <div class="circle-animation business-3">
                            <span class="tp-circle-2"></span>
                        </div>
                        <div class="circle-animation business-2">
                            <span class="tp-circle-3"></span>
                        </div>
                        <div class="tp-business-thumb-shape">
                            <img class="shape-hq" :src="PernecHQ" alt="PernecHQ">
                            <img class="PernecStaff" :src="PernecStaff" alt="PernecStaff">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-business-title-wrapper">
                        <h3 class="tp-section-title">
                            {{ title }}
                        </h3>
                        <p class="desc">{{ info }}</p>
                        <br>
                        <p class="desc">{{ info2 }}</p>
                    </div>
                    <div class="row">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.shape-hq {
    z-index: 1;
    position: absolute;
    top: 55%;
    left: 10%;
    width: 25%;

}

.PERNECall {
    z-index: 1;
    position: absolute;
    top: 10%;
    bottom: 60%;
    left: 0%;
    width: 56%;
}

.PernecStaff {
    z-index: 1;
    position: absolute;
    top: 55%;
    left: 65%;
    bottom: 1%;
}


@media (width < 650px) {

    .shape-hq {
        width: 70%;
        position: relative;
        top: -15%;
        left: 0%;
    }

    .PERNECALL {
        display: none;
    }

    .PernecStaff {
        display: none;

    }

}
</style>
