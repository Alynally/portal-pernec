<template>
  <section class="monthly-highlight">
    <div class="section-header">
      <h2>Our Yearly Highlights</h2>
    </div>

    <div class="highlight-wrapper">
      <div class="highlight-gallery-only">
        <!-- Gradient overlays -->
        <div class="fade-left"></div>
        <div class="fade-right"></div>

        <div class="scrolling-wrapper">
          <div class="image-scroll">
            <div
              v-for="(img, idx) in repeatedImages"
              :key="`image-${idx}`"
              class="gallery-card"
            >
              <img :src="img.src" :alt="img.alt" class="gallery-image" />
              <h4 class="image-title">{{ img.title }}</h4>
              <p class="image-description">{{ img.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import rayadihq from '@/assets/img/testimonial/rayadihq.png'
import preraya from '@/assets/img/testimonial/preraya.png'
import makanmakan from '@/assets/img/testimonial/makanmakan.png'
import bowling from '@/assets/img/testimonial/bowling.png'
import gambaraya from '@/assets/img/testimonial/gambaraya.png'
import kenangancoffee from '@/assets/img/testimonial/kenangancoffee.png'
import kfry from '@/assets/img/testimonial/kfry.png'
import bdanat from '@/assets/img/testimonial/bdanat.png'
import bdanis from '@/assets/img/testimonial/bdanis.png'
import bdadry from '@/assets/img/testimonial/bdadry.png'
import bdayunajihah from '@/assets/img/testimonial/bdayunajihah.png'
import dinner10pots from '@/assets/img/testimonial/dinner10pots.png'
import firstdesecvops from '@/assets/img/testimonial/firstdesecvops.png'
import teatimebreak from '@/assets/img/testimonial/teatimebreak.png'
import aisyahnfaiz from '@/assets/img/testimonial/aisyahnfaiz.png'
import lunchtime from '@/assets/img/testimonial/lunchtime.png'
import bdismail from '@/assets/img/testimonial/bdismail.png'
import farewellfaiz from '@/assets/img/testimonial/farewellfaiz.png'
import makannuno from '@/assets/img/testimonial/makannuno.png'
import grouprayahq from '@/assets/img/testimonial/grouprayahq.png'

const galleryImages = [
{
  src: lunchtime,
  alt: 'Lunch Time',
  title: 'Lunch at Makdas Fried Chicken',
  description: 'Our final feast with Faiz — laughter, spicy chicken, and memories to take away.',
},
{
  src: farewellfaiz,
  alt: 'Faiz Farewell',
  title: 'Faiz Farewell',
  description: 'A heartfelt send-off to Faiz — celebrating his dedication on his final day.',
},
{
  src: bdismail,
  alt: 'Birthday Ismail',
  title: 'Celebrate Mr. Ismail’s Birthday',
  description: 'Wishing a happy birthday to Mr. Ismail, our inspiring Head of Section.',
},
{
  src: aisyahnfaiz,
  alt: 'Aisyah & Faiz',
  title: 'Aisyah & Faiz Birthday Bash',
  description: 'A belated celebration packed with joy for both Aisyah and Faiz.',
},
{
  src: makannuno,
  alt: 'Dinner with Uno',
  title: 'Dinner & Game Night with Uno',
  description: 'Good food, great company, and the timeless fun of Uno battles over dinner.',
},
{
    src: bdanat,
    alt: 'Anat Birthday',
    title: 'Celebrate Anat Birthday',
    description: 'Birthday celebration for Anat with the team.',
  },
  {
    src: rayadihq,
    alt: 'Raya at HQ',
    title: 'Makan-Makan Raya',
    description: 'Festive event held at our headquarters at Setiawangsa, Kuala Lumpur.',
  },  
{
    src: gambaraya,
    alt: 'Gambar Raya',
    title: 'Raya Aidilfitri 2025',
    description: 'Raya celebration photo session with the team.',
  },
  {
    src: grouprayahq,
    alt: 'Raya at HQ',
    title: 'Celebrate Raya at HQ',
    description: 'Festive event held at our headquarters at Setiawangsa, Kuala Lumpur.',
  },
  {
    src: preraya,
    alt: 'Pre-Raya Event',
    title: 'Pre-Raya Event',
    description: 'A joyful get-together before the festive season.',
  },
  {
    src: bowling,
    alt: 'Bowling Day',
    title: 'Bowling Day',
    description: 'Team bonding activity at the bowling alley.',
  },
  {
    src: makanmakan,
    alt: 'Makan-Makan',
    title: 'Makan-Makan',
    description: 'Dinner and bonding session with colleagues at Yakiniku Samurai Dengkil.',
  },
  {
    src: rayadihq,
    alt: 'Raya at HQ',
    title: 'Raya at HQ',
    description: 'Festive event held at our headquarters.',
  },
  {
    src: kenangancoffee,
    alt: 'Kenangan Coffee',
    title: 'Kenangan Coffee',
    description: 'Coffee and conversation to wrap up the week.',
  },
  {
    src: kfry,
    alt: 'K Fry Dinner',
    title: 'Monthly Dinner at K Fry',
    description: 'Monthly dinner bonding at IOI Putrajaya.',
  },
  
  {
    src: bdanis,
    alt: 'Anis Birthday',
    title: 'Celebrate Anis Birthday',
    description: 'Sweet moments celebrating Anis’ birthday.',
  },
  {
    src: bdayunajihah,
    alt: 'Rahayu & Najihah Birthday',
    title: 'Birthday at Aldar Lounge',
    description: 'Double birthday celebration at Aldar Lounge, Paragon Cyberjaya.',
  },
  {
    src: dinner10pots,
    alt: '10 Pots Dinner',
    title: 'Dinner at 10 Pots',
    description: 'Monthly dinner at 10 Pots, Tamarind Square.',
  },
  {
    src: firstdesecvops,
    alt: 'DevSecOps Team Shoot',
    title: '1st DevSecOps Team Photoshoot',
    description: 'First DevSecOps team photo session at Tamarind Square.',
  },
  {
    src: bdadry,
    alt: 'Adry Birthday',
    title: 'Celebrate Adry Birthday',
    description: 'Fun and food while celebrating Adry’s birthday.',
  },
  {
    src: teatimebreak,
    alt: 'Tea Time Break',
    title: 'Tea Time Break with Teams',
    description: 'Just a short tea break with teams for work progression update.',
  },
]

// Tripling the array for seamless infinite loop animation
const repeatedImages = [...galleryImages, ...galleryImages, ...galleryImages]
</script>

<style scoped>
.monthly-highlight {
  background-color: #0a1046;
  color: white;
  padding: 5rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
}

.highlight-wrapper {
  max-width: 100%;
  padding: 0;
  margin: 0;
}

.highlight-gallery-only {
  position: relative;
  overflow: hidden;
}

.scrolling-wrapper {
  width: 100%;
  overflow: hidden;
}

.image-scroll {
  display: flex;
  gap: 1rem;
  animation: scrollX 60s linear infinite;
  width: max-content;
}

@keyframes scrollX {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.gallery-card {
  flex-shrink: 0;
  width: 22rem; /* wider */
  text-align: center;
}

.gallery-image {
  width: 100%;
  height: 16rem;
  border-radius: 1rem;
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.image-title {
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: #ffcc00;
}

.image-description {
  font-size: 0.875rem;
  color: #ddd;
  padding: 0 0.5rem;
}

/* Gradient overlays */
.fade-right,
.fade-left {
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, rgb(10, 16, 70), transparent);
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, rgb(10, 16, 70), transparent);
}
</style>
