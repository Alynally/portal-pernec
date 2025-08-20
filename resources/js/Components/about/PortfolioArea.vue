<script setup>
import { reactive } from 'vue'
import ict from "@/assets/img/portfolio/ict.png";
import network from "@/assets/img/portfolio/access-network.png";
import server from "@/assets/img/portfolio/infra.png";
import core from "@/assets/img/portfolio/core-network.png";
import app from "@/assets/img/portfolio/application.png";
import service from "@/assets/img/portfolio/services.png";





const info_slider = reactive([
    {
        stitle: 'APPLICATIONS',
        description: 'Elevate your business capabilities with our diverse range of applications, designed to streamline processes, improve customer experiences, and drive growth.',
        image: app,

    },
    {
        stitle: 'ACCESS NETWORK',
        description: 'Unlock reliable and high-speed connectivity with our advanced Access Network solutions, providing seamless access to critical data and applications for your business needs.',
        image: network,

    },
    {
        stitle: 'ICT',
        description: 'Transform your operations with our innovative ICT solutions, leveraging the latest technologies to enhance productivity, collaboration, and efficiency across your organization.',
        image: ict,
    },
    {
        stitle: 'INFRASTRUCTURE',
        description: 'Empower your business with a robust and secure IT infrastructure, featuring cutting-edge hardware, software, and networking solutions tailored to drive efficiency and support your growth',
        image: server,
    },
    {

        stitle: 'CORE NETWORK',
        description: 'Experience seamless connectivity and optimized data routing with our state-of-the-art core network, ensuring reliable communication and efficient resource utilization for your business.',
        image: core,
    },
    {
        stitle: 'SERVICES',
        description: 'Simplify IT management and enhance operational efficiency with our comprehensive managed services, tailored to meet your organizations unique needs and ensure smooth, reliable performance.',
        image: service,
    },
])



</script>


<template>
    <section class="tp-portfolio-area pt-60 pb-60">
        <div class="container">
            <div class="row">
                <div v-for="(item, i) in info_slider" :key="i" class="col-xl-4 col-lg-6 col-md-6">
                    <div class="tp-portfolio-item-wrapper">
                        <div class="tp-portfolio-item-thumb">
                            <img :src="item.image" :alt="item.stitle" />
                        </div>
                        <div class="tp-portfolio-item-content">
                            <h3 class="tp-portfolio-item-title text-center">{{ item.stitle }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
