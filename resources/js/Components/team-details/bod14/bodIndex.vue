<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import bodProfile from "@/Components/team-details/bod14/bodProfile.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
</script>

<template>
    <div class="wow fadeInRight" data-wow-duration="2s">
        <HeaderThree />
        <main>
            <Breadcrumb title="Board of Director" page_title="Board of Director" />
            <bodProfile />
        </main>
        <CommonFooter />
    </div>
</template>
