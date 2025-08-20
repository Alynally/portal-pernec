<script setup>

import bg from "@/assets/img/blog/bg1.svg"
import bgval from "@/assets/img/blog/bgvalue.gif"

</script>

<template>
  <div class="tp-feature-3-text-style text-center fadeUp" id="chart">
    <h3 class="feature-title" :style="{ backgroundImage: `url(${bg})` }">Pernec Corporation Berhad</h3>
  </div>
  <div class="PernecOrganization pt-15">
    <div class="flip">
      <div class="front">
        <div class="image-container">
          <img :src="bgval" alt="Pernec Integrated Network Systems Sdn Bhd" />
          <h1 class="text-shadow">Pernec Integrated Network Systems Sdn Bhd</h1>
        </div>
      </div>
      <div class="back">
        <ul>
          <li>Telecommunication & Enterprise System Integrator</li>
          <li>System Integration & Managed Services</li>
          <li>DevSecOps</li>
        </ul>
      </div>
    </div>
    <div class="flip">
      <div class="front">
        <div class="image-container">
          <img :src="bgval" alt="Pernec Advanced Technologies Sdn Bhd" />
          <h1 class="text-shadow">Pernec Advanced Technologies Sdn Bhd</h1>
        </div>
      </div>
      <div class="back">
        <ul>
          <li>Military and Defense System Integrator</li>
        </ul>
      </div>
    </div>
    <div class="flip">
      <div class="front">
        <div class="image-container">
          <img :src="bgval" alt="Cyseca Solution Sdn Bhd">
          <h1 class="text-shadow">Cyseca Solution Sdn Bhd</h1>
        </div>
      </div>
      <div class="back">
        <ul>
          <li>Cybersecurity Software Development</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>

.PernecOrganization {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 70px;
  padding-bottom: 115px;
}

.flip {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 400px;
  perspective: 1000px;
  display: inline-block;
  margin: 20px;
}

.flip .front,
.flip .back {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s cubic-bezier(.175, .885, .32, 1.275), opacity 0.5s;
  transform-style: preserve-3d;
  padding: 1em 2em;
  border-radius: 10px;
  position: absolute;
  backface-visibility: hidden;
}

.flip .front {
  transform: rotateY(0deg);
}

.flip .back {
  transform: rotateY(-180deg);
  opacity: 0;
  background-color: #0E2A47;
}

.flip:hover .front {
  transform: rotateY(180deg);
}

.flip:hover .back {
  transform: rotateY(0deg);
  opacity: 1;
}

.image-container {
  position: relative;
  width: 120%;
  /*sizing width */
  height: 120%;
  /*sizing height */
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.image-container h1 {
  position: absolute;
  bottom: 35%;
  /*position of the word */
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-size: 1.5em;
  text-align: justify;
  margin: 0;
}

.flip .back ul {
  font-size: 1.7em;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
  line-height: 150%;
}


.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

@media (max-width: 600px) {
  .flip {
    width: 100%;
    /* max-width: 300px;
    height: 500px; */
  }
  .image-container h1 {
    font-size: 1.75em;
  }
  .PernecOrganization{
    gap: 10px;
  }

  p {
    font-size: 1.25em;
  }
}

@media (min-width: 1024px) {
  .flip {
    width: 30%;
    max-width: 300px;
    height: 500px;
  }

  .image-container h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.5em;
  }
}
</style>
