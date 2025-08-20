<template>
  <div class="popup-container" @click="$emit('close')">
    <div class="popup-content animate-fade-in-out text-center">
      <h2 class="text-3xl font-bold text-pink-600 mb-[1.5rem] happy-birthday-heading">
        🎉 Happy Birthday! 🎂
      </h2>
      <p class="text-gray-700 mb-3">We celebrate:</p>
      <ul class="list-none text-lg font-medium text-gray-800 mb-3">
        <li v-for="(name, index) in names" :key="index">
          <span class="birthday-member-name">{{ name }}</span>
        </li>
      </ul>
      <p class="text-sm text-gray-600 text-center">Have a fantastic celebration!</p>
      <audio ref="birthdayAudio" :src="birthdaySong" autoplay />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import birthdaySong from './birthdaysong.mp3'

const props = defineProps({
  names: Array
})

const birthdayAudio = ref(null)

onMounted(() => {
  if (birthdayAudio.value) {
    birthdayAudio.value.currentTime = 0
    birthdayAudio.value.play()
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

@keyframes fadeInOut {
  0%, 100% { opacity: 0; transform: scale(0.95); }
  10%, 90% { opacity: 1; transform: scale(1); }
}

.animate-fade-in-out {
  animation: fadeInOut 6s ease-in-out;
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.9);
}

.popup-content {
  background: linear-gradient(to bottom right, #fff9ff, #fff0ff);
  border: 3px solid #ec4899;
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.2);
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 100%;
  width: 500px;
  text-align: center;
}

.happy-birthday-heading {
  font-family: 'Pacifico', cursive;
}

.birthday-member-name {
  font-family: 'Great Vibes', cursive;
  font-size: 1.85rem;
  letter-spacing: 0.5px;
  color: #000;
}
ul.list-none {
  list-style-type: none !important;
  padding-left: 0 !important;
  margin-left: 0 !important;
}
</style>