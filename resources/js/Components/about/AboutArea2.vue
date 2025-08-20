<script setup>
import CircleProgress from "vue3-circle-progress";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import about_shape from "@/assets/img/business/shape-5.png";

// about img import here
import about_img_1 from "@/assets/img/about/about-2.png";

</script>

<template>
    <section class="tp-about-breadcrumb p-relative pt-100 pb-90">
        <div class="tp-about-3-shape d-none d-lg-block">
            <img :src="about_shape" alt="shape" />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                        <img :src="about_img_1" alt="image-title-here" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-about-3-wrapper">
                        <div class="tp-about-3-title-wrapper">
                            <span class="tp-section-title__pre">
                                Our Decades-Long Expertise in <span class="title-pre-color">ICT System
                                    Integration</span>
                                <TitleUnderIcon />
                            </span>
                            <h3 class="tp-section-title">
                                Business <span class="title-color">Overview</span>
                            </h3>
                        </div>
                        <p class="text">
                            We deliver end-to-end system integration solutions that empower organizations to navigate
                            modern technology challenges and drive digital transformation. With expertise in Turnkey
                            Telco solutions and people-centric business systems, we collaborate closely with
                            stakeholders to design agile, adaptable strategies tailored to your needs. Our flexible
                            delivery model ensures seamless implementation, while our global best practices—rooted in
                            decades of ICT integration experience—optimize operations, enhance customer experiences, and
                            fuel sustainable growth. From initial consultation to final execution, we partner with you
                            to turn vision into actionable results, helping your organization thrive in today’s
                            competitive landscape.
                        </p>
                        <div class="tp-about-progressbar-inner d-flex flex-wrap pt-20">
                            <div class="tp-about-3-progressbar d-flex align-items-center">
                                <div class="circular tl-progress">
                                    <circle-progress :border-width="7" style="
                      width: 96px;
                      height: 96px;
                      font-weight: 700;
                      font-size: 18px;
                    " fill-color="#00ADEF" :bg-shadow="{
                        inset: true,
                        vertical: 2,
                        horizontal: 2,
                        blur: 1,
                        opacity: 0.4,
                        color: '#000000',
                    }" :border-bg-width="7" percent="65" show-percent="true" />
                                </div>
                                <div class="tp-about-3-progressbar-title">
                                    <p>
                                        Business <br />
                                        Strategy Growth
                                    </p>
                                </div>
                            </div>
                            <div class="tp-about-3-progressbar d-flex align-items-center">
                                <div class="circular tl-progress">
                                    <circle-progress :border-width="7" style="
                      width: 96px;
                      height: 96px;
                      font-weight: 700;
                      font-size: 18px;
                    " fill-color="#00ADEF" :bg-shadow="{
                        inset: true,
                        vertical: 2,
                        horizontal: 2,
                        blur: 1,
                        opacity: 0.4,
                        color: '#000000',
                    }" :border-bg-width="7" percent="80" show-percent="true" />
                                </div>
                                <div class="tp-about-3-progressbar-title">
                                    <p>
                                        Operational <br />
                                        Efficiency
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
