<script>
import datukzainun from '@/assets/img/breadcrumb/team/Datukzainun.png';
import hizamshah from '@/assets/img/breadcrumb/team/Hizamshah.png';
import azzman from '@/assets/img/breadcrumb/team/Azzman.png';
import khalil from '@/assets/img/breadcrumb/team/Khalil.png';
import takeshi from '@/assets/img/breadcrumb/team/Takeshi.png';
import hideharu from '@/assets/img/breadcrumb/team/Hideharu.png';
import sugimori from '@/assets/img/breadcrumb/team/Sugimori.png';
import ceo from '@/assets/img/breadcrumb/team/CEO.png';
import azmi from '@/assets/img/breadcrumb/team/Azmi.png';
import wan from '@/assets/img/breadcrumb/team/Wan.png';
import latif from '@/assets/img/breadcrumb/team/Latif.png';
import adnan from '@/assets/img/breadcrumb/team/Adnan.png';
import noralida from '@/assets/img/breadcrumb/team/Noralida.png';
import ariff from '@/assets/img/breadcrumb/team/Ariff.png';


export default {
    data() {
        return {
            profile_bod: [
                { id: 1, img: datukzainun, name: 'Datuk Zainun Aishah Ahmad',link:'/bod1',title:'Board Member' },
                { id: 2, img: hizamshah, name: 'Hizam Shah Azaime',link:'/bod2',title:'Board Member' },
                { id: 4, img: azzman, name: "Tengku Datuk Dr. Mohd Azzman Shariffadeen Tengku Ibrahim" ,link:'/bod4',title:'Board Member'},
                { id: 5, img: khalil, name: 'Khalil Abdul Jabar',link:'/bod5',title:'Board Member' },
                { id: 6, img: takeshi, name: 'Takeshi Tsukamoto',link:'/bod6',title:'Board Member' },
                { id: 7, img: hideharu, name: 'Hideharu Suzuki' ,link:'/bod9',title:'Board Member'},
                { id: 8, img: sugimori, name: 'Takashi Sugimori' ,link:'/bod10',title:'Board Member'},
            ],
            profile_sm: [
                { id: 1, img: ceo, name: 'Azizul Abdul Aziz',link:'/ms1',title:'CEO' },
                { id: 2, img: ariff, name: 'Ariff Fadzli Fadzi',link:'/ms2',title:'CFO' },
                { id: 3, img: azmi, name: 'Azmi Abdul Wahid',link:'/ms3',title:'CMO' },
                { id: 4, img: wan, name: 'Wan Kamaruddin Wan Mustaffa',link:'/ms4',title:'CPO' },
                { id: 5, img: latif, name: 'Abdul Latif Allah Pitchy' ,link:'/ms5',title:'CIO'},
                { id: 6, img: adnan, name: 'Adnan Zamri Abdullah',link:'/ms6',title:'Head, Human Resources & Administration' },
                { id: 7, img: noralida, name: 'Noralida Shamsudin',link:'/ms7',title:'Company Secretary' },
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
                    <p class=" text-center">Team success is driven by collaboration, trust, and shared goals.</p>
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

        <!-- Senior Management Section -->
        <div class="pt-90 pb-50">
            <div class="column text-center">
                <div class="word word--heading--textblock">
                    <h2 class="font-bold" data-aos="fade-up">Senior Management</h2>
                    <p class="text-center" data-aos="fade-up">Effective senior management is the cornerstone of a company's vision and growth.</p>
                </div>
            </div>
            <div class="container-fluid section-board" data-aos="fade-up" data-aos-duration="3000">
                <div class="members-container">
                    <div v-for="member in profile_sm" :key="member.id"
                        class="member member--image img-circle text-center">
                        <img :src="member.img" :alt="member.name" class="member-image">
                        <h3 class="nama"><router-link :to="member.link">{{ member.name }}</router-link></h3>
                        <p class="text-center">{{ member.title }}</p>
                    </div>
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

