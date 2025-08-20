<script setup>
import { reactive, onMounted } from 'vue';

// Import images
import p_img_1 from "@/assets/img/blog/img1.png"
import p_img_2 from "@/assets/img/blog/pins.png"
import p_img_3 from "@/assets/img/blog/padv.png"
import p_img_4 from "@/assets/img/blog/cyseca.png"
import bar from "@/assets/img/blog/img5.png"
// import bg from "@/assets/img/blog/waveline.svg"
import AOS from 'aos';
import '@/assets/css/aos.css';

const pernec = reactive([
   {
      id: 1,
      img: p_img_1,
      child: [

         {
            id: 2,
            img: p_img_2,
         },

         {
            id: 3,
            img: p_img_3,
         },
         {
            id: 4,
            img: p_img_4,
         },



      ]
   }
]);

const isMobile = reactive({
   value: false
});

onMounted(() => {
   AOS.init();
   // Check if mobile
   isMobile.value = window.innerWidth <= 1024; // Adjust breakpoint as needed
   window.addEventListener('resize', () => {
      isMobile.value = window.innerWidth <= 1024; // Adjust breakpoint as needed
   });
});

</script>

<template>
   <div class="org-chart" id="chart">
      <template v-for="person in pernec" :key="person.id">
         <div class="person" :class="{ mobile: isMobile }">
            <img :src="person.img" alt="Person Image" data-aos="flip-left" />

            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
               <br>
               <img :src="bar" alt="Bar Image" />
            </div>
            <div v-if="person.child && person.child.length" class="children">
               <template v-for="child in person.child" :key="child.id">
                  <div class="child" data-aos="zoom-in" data-aos-delay="500">
                     <div class="child">
                        <img :src="child.img" alt="Child Image" />
                     </div>
                  </div>
               </template>
            </div>
         </div>
      </template>
   </div>
</template>

<style scoped>
.org-chart {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-top: 0px;
   padding-top: 50px;
   background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f759 50px), repeating-linear-gradient(#ffffff, #ffffff);
}

.person {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 20px;
   max-width: 100%;
   
}

.person img {
   max-width: 100%;
   height: auto;
}

.children {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
}

.child {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 20px;
   max-width: 100%;
}

.child img {
   max-width: 100%;
   height: auto;
}


@media (max-width: 1024px) {
   .person.mobile {
      position: relative;
   }

   .person.mobile>div[data-aos="flip-left"] {
      display: none;
   }
}
</style>