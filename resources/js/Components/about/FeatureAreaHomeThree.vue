<script setup>
import feature_bg from "@/assets/img/feature/home-3/feature-bg.png";
</script>

<template>
    <section class="tp-feature-3-area " :style="{ backgroundImage: `url(${feature_bg})` }">
        <div class="container-fluid gx-0">
            <div class="row gx-0">
            </div>
        </div>
        <div class="row gx-0">
            <div class="col-xl-12">
                <div class="tp-feature-3-text-style text-center fadeUp pt-80">
                    <h3 class="tp-section-title">
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.tp-feature-3-text-style {
    padding-bottom: 200px;
    position: relative;
    z-index: 1;
}

.tp-feature-3-text-style .feature-title {
    position: relative;
    z-index: 2;
}
</style>