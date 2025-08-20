<script>
import sharin from '@/assets/img/breadcrumb/team/Shahrin.png';
import ainul from '@/assets/img/breadcrumb/team/Ainul.png';
import azhar from '@/assets/img/breadcrumb/team/Azhar.png';
import norazmi from '@/assets/img/breadcrumb/team/Norazmi.png';
import hisham from '@/assets/img/breadcrumb/team/Hisham.png';
import azlan from '@/assets/img/breadcrumb/team/Azlan.png';
import nurul from '@/assets/img/breadcrumb/team/Nurul.png';
import junaidi from '@/assets/img/breadcrumb/team/Junaidi.png';
import ahmad from '@/assets/img/breadcrumb/team/Ahmad.png';

export default {
    data() {
        return {
            profile_bod: [
                { id: 11, img: sharin, name: 'Shahrin Ali', link: '/bod11', title: 'Board Member' },
                { id: 12, img: ainul, name: 'Ainul Azam Ahmad Khamal', link: '/bod12', title: 'Board Member' },
                { id: 13, img: azhar, name: 'Azhar Abu Bakar', link: '/bod13', title: 'Board Member' },
            ],
            profile_sm: [
                { id: 8, img: norazmi, name: 'Norazmi Mohd Yusoff', link: '/ms8', title: 'CEO' },
                { id: 9, img: hisham, name: 'Hisham Pandak Hamzah', link: '/ms9', title: 'CCO' },
                { id: 10, img: azlan, name: 'Azlan Mukhtar', link: '/ms10', title: 'Head Software Development' },
                { id: 11, img: nurul, name: 'Nurul Azuma Makmor', link: '/ms11', title: 'Head Business Development' },
                { id: 12, img: junaidi, name: 'Junaidi Zainuddin', link: '/ms12', title: 'Head Business Support & Operation' },
                { id: 13, img: ahmad, name: 'Ahmad Nawawi Abdul Rahman', link: '/ms13', title: 'Head Managed Security Services' },
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
                    <h2 class="font-bold" >Board of Directors</h2>
                    <p class=" text-center ">Board directors guide strategy and uphold the core values of the organization.</p>
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
                    <h2 class="font-bold" data-aos="fade-up" >Senior Management</h2>
                    <p class="text-center" data-aos="fade-up">Senior management steers organizational success through strategic leadership.</p>
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
    justify-content: center;
    /* Optional: Center align the members horizontally */
}

.member {
    flex: 1 1 25%;
    /* Each member will take up 25% of the container width */
    max-width: 25%;
    /* Ensure that no member takes more than 25% of the container width */
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
  .big p{
    font-size: 10px;
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
  .big p{
    font-size: 10px;
  }
}
</style>
