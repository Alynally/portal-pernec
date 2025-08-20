
<script>
import datukzainun from '@/assets/img/breadcrumb/team/Datukzainun.png';
import hizamshah from '@/assets/img/breadcrumb/team/Hizamshah.png';
import eijiobana from '@/assets/img/breadcrumb/team/Eiji.png';

import Aos from 'aos';
export default {
  data() {
    return {
      profile_bod: [
        { id: 1, img: datukzainun, name: 'Datuk Zainun Aishah Ahmad', link: '/bod1', title: 'Board Member' },
        { id: 2, img: hizamshah, name: 'Hizam Shah Azaime', link: '/bod2', title: 'Board Member' },
        { id: 3, img: eijiobana, name: 'Eiji Obana', link: '/bod3', title: 'Board Member' },
      ],
    };
    },
  mounted() {
      Aos.init({
      });
    }
};
</script>

<template>
  <section class="boardDirector">
    <!-- Board of Directors Section -->
    <div class="pt-90 pb-50" >
      <div class="column text-center">
        <div class="word word--heading--textblock">
          <h2 class="font-bold" >Board of Directors</h2>
          <p class=" text-center ">Company success hinges on innovation, integrity, and a thriving team culture.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid section-board " data-aos="fade-up" data-aos-duration="3000">
      <div class="members-container">
        <div v-for="member in profile_bod" :key="member.id" class="member text-center">
          <img :src="member.img" :alt="member.name" class="member-image">
          <h3 class="nama"><router-link :to="member.link">{{ member.name }}</router-link></h3>
          <p class="text-center">{{ member.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.members-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* Optional: Center align the members horizontally */
}

.member {
  flex: 1 1 25%;
  /* Each member will take up 20% of the container width */
  max-width: 25%;
  /* Ensure that no member takes more than 20% of the container width */
  box-sizing: border-box;
  padding: 10px;
  /* Add padding for spacing between members */
}

.member img {
  max-width: 100px;
  height: auto;
  border-radius: 50%;
  /* Make images circular */
}

.section-board {
  padding: 16px 0;
  position: relative;
  min-width: auto;
}

.nama {
  padding-top: 16px;
  font-size: 16px;
}

.members-container p {
  font-size: 14px;
  color: #000;
}

@media (max-width: 1024px) {
  /* For tablets */
  .member {
    flex: 1 1 33.33%;
    max-width: 33.33%;
  }
}

@media (max-width: 768px) {
  /* For phones */
  .member {
    flex: 1 1 50%;
    max-width: 50%;
  }
}

@media (max-width: 480px) {
  /* For smaller phones */
  .member {
    flex: 1 1 100%;
    max-width: 100%;
  }

  .member img {
    max-width: 80px;
  }
}
</style>
