<script setup>
import { ref, onMounted, reactive } from 'vue';
import world_img from "@/assets/img/fun-fact/world.png";


// import img here
import service_img_1 from "@/assets/img/services/services-1.svg";
import service_img_2 from "@/assets/img/services/services-2.svg";
import service_img_3 from "@/assets/img/services/services-3.svg";

// service data
const service_data = reactive([
    {
        id: 1,
        alphabet: "I",
        title: "Integrity",
        img: service_img_1,
        description: "Integrity in essence, calls for honesty and transparency in everything we do. We will be fair and honest when dealing with our customers, partner and stakeholders.We ensure that we consistenly do what we say and deliver on our promises.",
    },
    {
        id: 2,
        alphabet: "S",
        title: "Simplicity",
        img: service_img_2,
        description: "Simplicity in essence describes the manner of doing things, reflecting the idea of being simple or freedom from difficulty or hardship in effort.We will strive to be efficient and effective in our business process and transactions, with attention to details. ",
    },
    {
        id: 3,
        alphabet: "I",
        title: "Innovative",
        img: service_img_3,
        description: "Innovative is the readiness to try new things and ideas to explore new apportunities. We are ready to embrace new ideas and solutions in overcoming problem and generating business opportunities.",
    },
])


const reload = ref(null);

const setReloadClassName = () => {
    reload.value = document.getElementById('reload');
    if (reload.value !== null) {
        window.addEventListener('scroll', scrollRotate);
    }
};
const scrollRotate = () => {
    if (reload.value !== null) {
        reload.value.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
    }
};

onMounted(() => {
    setReloadClassName();
});


</script>

<template>
    <div class="tp-service-funfact-box">

        <section class="tp-service-area pt-85 pb-30" id="corevalue">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tp-service-title-wrapper text-center">
                            <h3 class="tp-section-title">Core <i>Values</i>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <!-- Loop through service_data and display service items in a single row -->
                    <div v-for="(item, i) in service_data" :key="i" class="col-lg-4 col-md-6">
                        <div class="tp-service-wrapper p-relative mb-55 mx-2">
                            <div class="tp-service-designation">
                                <p>{{ item.alphabet }}</p>
                            </div>
                            <h3 class="service-title" v-html="item.title"></h3>
                            <div class="tp-service-icon">
                                <img :src="item.img" alt="image-title-here">
                            </div>
                            <p class="hide-text" v-html="item.description"></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tp-service-all-text">

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- service area end -->

        <!-- fun fact area start -->
        <section class="tp-fun-fact-area pt-50 pb-100 p-relative">
            <div class="container container-1400">
                <div class="tp-fun-fact-shape">
                </div>
                <div class="row">
                    <div class="col-lg-2 col-md-4">
                        <div class="tp-fun-fact-wrapper-box">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-8">
                        <div class="tp-fun-fact-thumb p-relative">
                            <img id="reload" :src="world_img" alt="scroll">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="tp-fun-fact-content">
                            <div class="tp-fun-fact-title-wrapper">
                                <h3 class="tp-section-title"><i>I</i>ntegrity<i> S</i>implicity<i> I</i>nnovative
                                </h3>
                                <p>The bedrock of the company is based upon the true substances of the company and are
                                    aptly acronymed “I.S.I.” ― for just as the solid base of the business operations
                                    provides a solid support to the group, so do the inner qualities of INTEGRITY,
                                    SIMPLICITY, and INNOVATION that all Pernec citizens should appreciate and therefore,
                                    strive to possess to provide the required stability to the company, now and to the
                                    future.
                                </p>
                                <p>"ISI" also reflects PERNEC’s aspirations and conduct as an innovative,
                                    forward-thinking and responsible organization geared towards embracing every
                                    opportunity to go beyond expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- fun fact area end -->
    </div>
</template>

<style>
.tp-service-designation p {
    text-align: center;
    margin-bottom: 15px;
}

.tp-service-wrapper:hover {
    border: 1px solid #00ADEF;
}

.tp-fun-fact-content p {
    text-align: justify;
}

/* Responsive styles */

@media screen and (max-width: 1200px) {
    .tp-service-title-wrapper {
        margin-bottom: 40px;
    }
}

@media screen and (max-width: 991px) {
    .tp-service-wrapper {
        margin-bottom: 30px;
    }
}

@media screen and (max-width: 768px) {
    .tp-fun-fact-thumb {
        margin-top: 40px;
    }

    .tp-fun-fact-content {
        margin-top: 40px;
    }
}

@media screen and (max-width: 576px) {
    .tp-service-wrapper {
        margin-left: -10px;
        margin-right: -10px;
    }

    .tp-service-wrapper .tp-service-designation {
        margin-bottom: 10px;
    }

    .tp-service-wrapper .service-title {
        font-size: 24px;
    }

    .tp-service-wrapper .tp-service-icon img {
        width: 80%;
    }

    .tp-fun-fact-thumb {
        margin-top: 30px;
    }

    .tp-fun-fact-content {
        margin-top: 30px;
    }

    .tp-fun-fact-title-wrapper {
        font-size: 24px;
    }

    .tp-fun-fact-content p {
        font-size: 14px;
    }
}
</style>
