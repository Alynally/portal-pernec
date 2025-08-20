<script setup>
import {useVideoModal} from "../../composables/useVideoModal";
const { closeVideo } = useVideoModal();


</script>

<template>
  <div id="video-overlay" class="video-overlay" @click="closeVideo">
    <a class="video-overlay-close" @click.prevent="closeVideo">x</a>
  </div>
</template>

 
