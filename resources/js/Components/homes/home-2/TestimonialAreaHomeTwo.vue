<template>
  <section class="tp-testimonial-2-area p-relative pt-150 pb-150" id="testimonal_id">
    <div class="tp-testimonial-2-shape">
      <img class="shape-1" :src="testimonial_shape_1" alt="image-shape-1" />
      <img class="shape-5" :src="testimonial_shape_5" alt="image-shape-5" />
    </div>

    <div class="tp-testimonial-2-np">
      <span class="prev"></span>
      <span class="next"></span>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <swiper
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :modules="[Navigation, Autoplay]"
            :autoplay="{
              delay: 9000,
              disableOnInteraction: false
            }"
            :navigation="{ nextEl: '.testimonial-button-next-1', prevEl: '.testimonial-button-prev-1' }"
            class="testimonial-2-active swiper-container"
          >
            <swiper-slide
              v-for="(item, i) in testimonial_data"
              :key="i"
              class="testimonial-item"
            >
              <div class="tp-testimonial-2-content">
                <div class="tp-testimonial-2-thumb text-center">
                  <img :src="item.img" :alt="item.name" class="mx-auto" />
                </div>
                <div class="tp-testimonial-2-info">
                  <h4 class="tp-testimonial-2-info-title text-center">{{ item.name }}</h4>
                  <p class="tp-testimonial-2-info-designation text-center">({{ item.title }})</p>
                </div>
                <div class="tp-testimonial-2-text text-center">
                  <p class="desc text-center text-gray-700 italic px-4" v-html="item.description"></p>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="tp-testimonial-2-nav d-none d-lg-block">
            <button type="button" class="testimonial-button-prev-1">
              <span><PrevIconHomeTwo /></span>
            </button>
            <button type="button" class="testimonial-button-next-1">
              <span><NextIconHomeTwo /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import PrevIconHomeTwo from "@/svg/PrevIconHomeTwo.vue";
import NextIconHomeTwo from "@/svg/NextIconHomeTwo.vue";

// Import shape images
import testimonial_shape_1 from "@/assets/img/testimonial/shape-blur.png";
import testimonial_shape_5 from "@/assets/img/testimonial/shape-blur.png";
import ismail from "@/assets/img/testimonial/ismail.png";
import adry from "@/assets/img/testimonial/adry.png";
import anat from "@/assets/img/testimonial/anat.png";
import alyn from "@/assets/img/testimonial/alyn.png";
import aisyah from "@/assets/img/testimonial/aisyah.png";
import alya from "@/assets/img/testimonial/alya.png";
import anis from "@/assets/img/testimonial/anis.png";
import ayu from "@/assets/img/testimonial/ayu.png";
import prankline from "@/assets/img/testimonial/prankline.png";
import syadiyah from "@/assets/img/testimonial/syadiyah.png";
import najihah from "@/assets/img/testimonial/najihah.png";
import dev from "@/assets/img/testimonial/dev.png";
import khalil from "@/assets/img/testimonial/khalil.png";
import abdlatif from "@/assets/img/testimonial/abdlatif.png";
import trozi from "@/assets/img/testimonial/trozi.png";
// Testimonial data
const testimonial_data = reactive([
    {
        id: 1,
        name: "Khalil Abd Jabar",
        title: "Board Member and Officer-In-Charge (OIC)",
        img: khalil,
        description: `"Leadership is not about titles it’s about taking charge when it counts. At Pernec, we don’t wait for change we lead it. True progress comes from stepping forward with clarity, conviction, and the courage to act."`
    },
    {
        id: 2,
        name: "Abdul Latif Allah Pitchy",
        title: "Acting Chief Operating Officer (COO)",
        img: abdlatif,
        description: `"Execution turns ideas into impact. At Pernec, we believe operational excellence is the engine of opportunity. In a world that rewards speed and precision, we forge ahead with systems that work, teams that deliver, and outcomes that matter."`
    },
    {
        id: 3,
        name: "YM Tengku Rozi Fikri Bin Tengku Muhammad Jasin ",
        title: "Head System Integration",
        img: trozi,
        description: `"Systems don’t just support growth they drive it. At Pernec, we design operations not only to keep up with innovation but to accelerate it. Every process, every integration, is a step toward a smarter, more agile future."`
    },
    {
        id: 4,
        name: "Ismail Mohd Hashim",
        title: "Section Head",
        img: ismail,
        description: `"Within our esteemed company, we cherish more than just our renowned reputation. Our office transcends a mere workspace; it's a dynamic environment pulsating with creativity and teamwork. Just like a magnetic pull, upon entering, you'll feel compelled to stay, enchanted by the lively atmosphere and strong sense of camaraderie that characterizes our culture."`
    },
    {
        id: 5,
        name: "Anatassia",
        title: "Frontend Software Developer",
        img: anat,
        description: `"Pernec is more than just a workplace; it's a place for personal and professional growth. The company invests in its employees, providing opportunities for learning and development. Whether it's through workshops, training programs, or mentorship, I've been able to expand my skill set and take on new challenges."`
    },
    {
        id: 6,
        name: "Muhammad Adry",
        title: "Backend Software Developer",
        img: adry,
        description: `"At PERNEC, where I began my career journey, I found a warm and supportive environment. It's incredibly beginner-friendly, allowing for exploration of various roles for those with the determination to advance their careers."`
    },
    {
        id: 7,
        name: "Alyn",
        title: "Frontend Software Developer",
        img: alyn,
        description: `"Pernec thrives on cutting-edge solutions. As part of the DevOps team, I’m encouraged to explore new tools and methodologies, from Kubernetes to infrastructure-as-code. The company doesn’t shy away from adopting the latest tech, and that forward-thinking mindset keeps our work exciting and impactful."`
    },
    {
        id: 8,
        name: "Aisyah Saadon",
        title: "System Analyst",
        img: aisyah,
        description: `"When anger rises, think of consequences. At Pernec, we understand that anger is natural, but how we handle it defines our professionalism and culture. In high-pressure tech environments, emotions can flare but the true test lies in channeling them constructively rather than letting them control us."`
    },
    {
        id: 9,
        name: "Prankkline",
        title: "Software Tester",
        img: prankline,
        description: `"Opportunities don't happen. You create them. At Pernec, success isn’t about waiting for the right moment—it’s about engineering it. In a fast-moving tech landscape, opportunities aren’t handed out; they’re built through initiative, innovation, and relentless effort."`
    },
    {
        id: 10,
        name: "Syadiyah",
        title: "Business Analyst",
        img: syadiyah,
        description: `"At Pernec, we don’t fear mistakes we learn from them, adapt, and emerge stronger. In a culture that values innovation and progress, errors aren’t failures; they’re stepping stones to mastery. Mistakes have the power to turn you into something better than you where before ✨"`
    },
    {
        id: 11,
        name: "Alya",
        title: "Business Analyst",
        img: alya,
        description: `"I’ve been fortunate to learn from leaders who prioritize knowledge-sharing. At Pernec, mentorship isn’t a formality—it’s a cornerstone. Senior colleagues take time to explain concepts, review code, and offer career advice. Their guidance has been instrumental in shaping my technical and professional growth."`
    },
    {
        id: 12,
        name: "Najihah",
        title: "Business Analyst",
        img: najihah,
        description: `"At Pernec, our DevOps team isn't just about work; it's a platform for personal and professional growth. We invest in our team members, providing robust learning opportunities through workshops, training programs, and mentorship. These initiatives have empowered me to expand my skill set and tackle new challenges in our dynamic environment."`
    },
    {
        id: 13,
        name: "Rahayu",
        title: "Senior System Analyst",
        img: ayu,
        description: `"Pernec strikes the perfect balance between productivity and fun. While we take our projects seriously, we also make time for laughter—be it through gamified challenges, festive celebrations, or spontaneous coffee breaks. The result? A stress-free environment where motivation comes naturally."`
    },
    {
        id: 14,
        name: "Anis",
        title: "Business Analyst",
        img: anis,
        description: `"Pernec has redefined what a job means to me. It’s where I’ve built skills, forged friendships, and gained confidence. The company’s emphasis on well-being, from flexible hours to wellness programs, shows they care about us as people, not just employees. It’s rare to feel both challenged and cherished at work—I’m grateful to experience that here."`
    },
    {
        id: 15,
        name: "DevSecOps",
        title: "Department",
        img: dev,
        description: `"At Pernec, our DevOps team isn't just about work it's a platform for personal and professional growth. We invest in our team members, providing robust learning opportunities through workshops, training programs, and mentorship. These initiatives have empowered me to expand my skill set and tackle new challenges in our dynamic environment."`
    }
])
</script>