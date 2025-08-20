  
<script setup>
import { reactive, ref } from "vue";
import BlogCommon from "@/Components/blog-common/index.vue";
import thumb_1 from "@/assets/img/blog/nogift.png";



const single_post_details = {
  title_1: "No gift policy",
  des_1: "At Pernec Corporation Berhad and its subsidiaries, we place great value on the relationships we cultivate with our customers, vendors, and supplier. Together, we strive to create meaningful partnerships that enhance experiences and drive mutual success. Central to our ethos is the core value of 'Integrity', which permeates every facet of our operations",
  des_2: "In line with our commitment to upholding integrity, we have established the Pernec Corporation Berhad No Gift Policy. This policy serves as a guiding framework for the acceptance and giving of gifts among our employees, ensuring that business dealings are conducted with utmost integrity. By adhering to this policy, we aim to uphold the esteemed reputation of our company while fostering a culture of transperancy and trust in all our interactions.",
  des_3: "Through the implementation of the No Gift Policy, we affirm our dedication to conducting business ethically and responsibly, thereby preserving the integrity of our relationship and safeguarding the interests of all stakeholders",
  pdfUrl: "/image/anti-bribery-and-corruption-policy.pdf"

}

const { pdfUrl, title_1, des_1, des_2, des_3, quate_icon, blockquote } = single_post_details

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
                <h3 class="postbox__title">{{ title_1 }}</h3>
                <div class="postbox__text">
                  <li>{{ des_1 }}</li>
                  <li>{{ des_2 }}</li>
                  <li>{{ des_3 }}</li>

                  <button @click="openPDF" class="pdf-button">Click for more info</button>

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
h3 {
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