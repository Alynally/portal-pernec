<script setup>

import about_shape from "@/assets/img/business/shape-5.png";
import about_img_6 from "@/assets/img/about/about-7.avif";

</script>

<template>
    <section class="tp-about-breadcrumb p-relative pt-100 pb-90" id="business">
        <div class="tp-about-3-shape d-none d-lg-block">
            <img :src="about_shape" alt="shape" />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                        <img :src="about_img_6" alt="image-title-here" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-about-3-wrapper">
                        <div class="tp-about-3-title-wrapper">
                            <span class="tp-section-title__pre">
                                Our Decades-Long Expertise in <span class="title-pre-color"> ICT System
                                    Integration</span>
                            </span>
                            <h3 class="tp-section-title">
                                Business <span class="title-color"> Overview</span>
                            </h3>
                        </div>
                        <p class="text">
                            We are dedicated to providing comprehensive and innovative solutions
                            that drive the digital transformation of businesses.
                            Through our end-to-end system integration solutions and services,
                            we enable organizations to navigate the complexities of modern
                            technology and emerge stronger, more efficient, and more competitive.
                        </p>
                        <p class="text">
                            We have been involved in Turnkey Telco solutions to the nation’s
                            telecommunication network, as well as people-centric business systems.
                            Our involvement require that we interact closely with stakeholders,
                            understand the functional and business requirements and propose
                            best-fit innovative solutions. Our solutions are supported by our flexible
                            delivery model.
                        </p>

                        <p class="text">
                            Our commitment to excellence in service delivery is evident in every aspect of our services,
                            from
                            initial consultation to final implementation.
                            We provide transformative solutions that are adaptable to each project's unique
                            circumstances, enabling
                            us to navigate digital transformation challenges
                            with agility and precision. With a rich history as an ICT System Integrator, we offer global
                            best
                            practices tailored to local contexts.
                            Our solutions are designed to optimize operations, enhance customer experiences, and drive
                            business
                            growth, empowering organizations to achieve their strategic objectives with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.text {
    text-align: justify;
}

/* .tp-about-breadcrumb-img {
    position: absolute;
    left: 280px;
    bottom: 100px;
} */
</style>
