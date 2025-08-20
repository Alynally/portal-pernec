<script setup>
import { reactive } from "vue";

const counter_data = reactive([
    {
        id: 1,
        text: "Our ",
        text2: "Experience",
        border: "tp-counter-border",
    },

]);
</script>

<template>
    <section class=" p-relative counter-breadcrumb pt-60">
        <div class="container">
            <div class="col-lg-12">
                <div class="tp-counter-box">
                    <div v-for="(item, i) in counter_data" :key="i">
                        <div class=" text-center" :class="item.border">
                            <h3 class="tp-section-title m-0">{{ item.text }}
                                <span class="tp-section-title title-color">{{ item.text2 }}</span>
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
