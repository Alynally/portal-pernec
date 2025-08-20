  
<script setup>
import { reactive, ref } from "vue";
import BlogCommon from "@/Components/blog-common/index.vue";
import thumb_1 from "@/assets/img/blog/whistle.jpg";



const single_post_details = {
  title_1: "Whistleblowing",
  des_1: "Criminal Offenses: Including but not limited to fraud, corruption, and theft.",
  des_2: "Financial Irregularities: Such as misappropriation of funds, securities, or assets, as well as breaches of financial protocols.",
  des_3: "Insider trading: Any instances of profiteering through priviledged information.",
  des_4: "Violations of Code of Conduct: Breaches of our company's Code of Business Conduct.",
  des_5: "Abuse of Authority: Misuse of power or position for personal gain.",
  des_6: "Safety and Environment Concerns: Acts that endanger the well-being of employees, the public, or the environment.",
  des_7: "Concealment of Wrongdoings: Deliberate attemtps to hide any of the aforementioned misconduct.",
  blockquote: "Pernec Corporation Berhad and its subsidaries ('PCB Group') are committed to the highest standard of integrity, openness and accountibilty in the condust of its businesses and operations. It aspires to conduct its affairs in an ethical, responsible and transparent manner.",
  pdfUrl: "/image/whistleblowing-policy.pdf"

}

const { pdfUrl, title_1, des_1, des_2, des_3, des_4, des_5, des_6, des_7, blockquote } = single_post_details

const openPDF = () => {
  window.open(pdfUrl, '_blank');
}



</script>

<template>
  <section class="postbox__area pt-120 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="postbox__wrapper">
            <article class="postbox__item format-image mb-50 transition-3">
              <div class="postbox__thumb m-img">
                <img :src="thumb_1" alt="image-title-here">
              </div>
              <div class="postbox__content">
                <div class="postbox__meta">
                  <!-- <span><i class="fa-light fa-calendar-days"></i> {{ date }}</span>
                  <span><a href="#"><i class="fal fa-comments"></i>{{ comments }}</a></span>
                  <span><a href="#"><i class="fa-regular fa-clock"></i>{{ upload_time }}</a></span> -->
                </div>
                <h1 class="postbox__title">{{ title_1 }}</h1>
                <!-- <h2>In our commitment to upholding integrity and accountibility within the company, we have established a framework for reporting any observed or experienced miscondust. We encourage all parties to come forward with concerns regarding the following matters:</h2> -->
                <div class="postbox__text">
                  <li>{{ des_1 }}</li>
                  <li>{{ des_2 }}</li>
                  <li>{{ des_3 }}</li>
                  <li>{{ des_4 }}</li>
                  <li>{{ des_5 }}</li>
                  <li>{{ des_6 }}</li>
                  <li>{{ des_7 }}</li>

                  <button @click="openPDF" class="pdf-button">Click for more info</button>

                  <div class="postbox__blockquote p-relative">
                    <!-- <div class="postbox__blockquote-shape">
                      <img :src="quate" alt="image-title-here">
                    </div> -->
                    <blockquote>
                      <p>{{ blockquote }}</p>
                      <!-- <cite>{{ writer }}</cite> -->
                    </blockquote>
                  </div>                 
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4">
          <div class="sidebar__wrapper">
            <BlogCommon />
          </div>
        </div>


      </div>
    </div>
     
  </section>
  <video-modal ref="video_modal" :video-url="videoUrl" />

</template>

<style scoped>
.pdf-button {
  background-color: #6cb2eb; /* Light blue color */
  color: #ffffff; /* White text color */
  padding: 10px 20px; /* Padding to adjust button size */
  border: none; /* Remove default button border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Change cursor to pointer on hover */
  display: block; /* Make the button a block element */
  margin: 0 auto; /* Center the button horizontally */
}
.pdf-button:hover {
  background-color: #4d98d1; /* Darker shade of blue on hover */
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
  font-size: 2em;
}

h2 {
  /* text-align: center; */
  font-size: 1.5em;
  margin-top: 20px;
  font-weight: normal;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
/* p {
  text-align: justify;
  line-height: 1.5;
} */
li {
  margin-bottom: 10px;
}
li:before {
  /* content: "✔"; */
  margin-right: 10px;
  font-size: 1.2em;
  color: #008000;
}

</style>