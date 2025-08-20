<script setup>
import BrandHomeTwo from "./BrandHomeTwo.vue";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo.vue";
import HeroAreaHomeThree from "@/Components/homes/home-2/HeroAreaHomeThree.vue";
import OfferAreaHomeTwo from "./OfferAreaHomeTwo.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import BusinessAreaHomeTwo from "./BusinessAreaHomeTwo.vue";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo.vue";
// import homeIndicator from "@/Components/homeIndicator.vue";
// import homeIndicator2 from "@/Components/homeIndicator2.vue";
import HeaderThree from "@/Layouts/headers/headerVerTh.vue";
// import ChatbotInterface from "../../chatbot-widget/ChatbotInterface.vue";
import bannerCookies from "../../bannerCookies.vue";
// import BirthdayCalendar from "./BirthdayCalendar.vue";

</script>


<template>
    <div>
        <HeaderThree />
        <main>
            <HeroAreaHomeThree />
            <BusinessAreaHomeTwo />
            <OfferAreaHomeTwo />
            <BlogAreaHomeTwo />
            <TestimonialAreaHomeTwo />
            <BrandHomeTwo />
            <!-- <homeIndicator />
            <homeIndicator2 /> -->
            <!-- <ChatbotInterface /> -->
            <bannerCookies />
        </main>
        <CommonFooter />
    </div>


</template>
