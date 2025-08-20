<script>

import jeneral from '@/assets/img/breadcrumb/team/Jeneral.png';
import ceo from '@/assets/img/breadcrumb/team/CEO.png';

export default {
    data() {
        return {
            profile_bod: [
                { id: 9, img: jeneral, name: 'Lt. General Dato Sri Wan Normazlan Che Jaafar RMAF',link:'/bod7',title:'Board Member' },
                { id: 10, img: ceo, name: 'Azizul Abdul Aziz',link:'/bod8',title:'CEO' },
            ],
        };
    },
};
</script>


<template>
    <section class="boardDirector">
        <!-- Board of Directors Section -->
        <div class="pt-90 pb-50">
            <div class="column text-center">
                <div class="word word--heading--textblock">
                    <h2 class="font-bold">Board of Directors</h2>
                    <p class=" text-center ">Board directors shape the vision and ensure the integrity of an organization.</p>
                </div>
            </div>
        </div>
        <div class="container-fluid section-board" data-aos="fade-up" data-aos-duration="3000">
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

<style>
.members-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Optional: Center align the members horizontally */
}

.member {
    flex: 1 1 25%; /* Each member will take up 25% of the container width */
    max-width: 25%; /* Ensure that no member takes more than 25% of the container width */
    box-sizing: border-box;
    padding: 10px; /* Add padding for spacing between members */
}

.member img {
    max-width: 100px;
    height: auto;
    border-radius: 50%; /* Make images circular */
}

.section-board {
    padding: 16px 0;
    position: relative;
    min-width: auto;
}
.nama{
    padding-top: 16px;
    font-size: 16px;
}
.members-container p{
  font-size: 14px;
  color:#000;
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

