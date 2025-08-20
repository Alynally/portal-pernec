

<script setup>
import { reactive } from "vue";

const social_links = reactive([
  {
    link: "http://facebook.com", 
    icon: "fab fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.linkedin.com",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.youtube.com",
    icon: "fa-brands fa-youtube",
  },
])

</script>


<template>
  <a v-for="(item, i) in social_links" :key="i" :href="item.link"  target="_blank">
    <i :class="item.icon"></i>
  </a>
</template>
