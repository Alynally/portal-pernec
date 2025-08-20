  
<script setup>
import { reactive, ref } from "vue";
import BlogCommon from "@/Components/blog-common/index.vue";
import thumb_1 from "@/assets/img/blog/antibribery.png";


const single_post_details = {
  des_1: "We hold ourselves to the highest standards of integrity in all our business dealings. Our commitment to ethical conduct means steadfastly avoiding any form of bribery or corruption in our daily operations.",
  des_2: "We uphold a zero-tolerance policy towards bribery and corruption in any manifestation. Such acts are unequivocally condemned by our organization, and we are resolute in our stance against them. We recognize the gravity of corrupt practices and are dedicated to ensuring compliance with all relevant anti-corruption laws and regulations.",
  des_3: "We are also committed to prevent any involvement in corrupt activites that could compromise our principles or reputation. We will take decisive measures to safeguard our business operations from any association with bribery or corruption, ensuring that our actions consistently align with our values and legal obligations.",
  des_4: "By adhering to these principles, we uphold the trust of our stakeholders and maintain the integrity of our business practices, fostering a culture of transparency, accountibility, and ethical conduct throughout the company.",
  title_1: "Anti-Bribery & Corruption",
  pdfUrl: "/image/anti-bribery-and-corruption-policy.pdf"


}

const { pdfUrl, des_1, des_2, des_3, des_4, title_1 } = single_post_details

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
                <h1 class="postbox__title">{{ title_1 }}</h1>
                <h2></h2>
                <div class="postbox__text">
                  <li>{{ des_1 }}</li>
                  <li>{{ des_2 }}</li>
                  <li>{{ des_3 }}</li>
                  <li>{{ des_4 }}</li>

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