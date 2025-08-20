<template>
  <div class="app-container">
    <div class="cards-grid">
      <section
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        @click="navigateToCaseStudy(card.route)"
        style="cursor: pointer;"
      >
        <div class="card-content">
          <h2>
            <span class="highlight">{{ card.highlight }}</span>
            {{ card.title }}
          </h2>
          <p>{{ card.description }}</p>

          <!-- Image or bar chart -->
          <div class="card-image" v-if="card.type === 'image'">
            <img
              :src="card.image"
              :alt="card.alt"
              @error="onImgError"
            />
          </div>
          <div class="card-image bar-chart" v-else-if="card.type === 'bar'">
            <div
              v-for="(bar, i) in bars"
              :key="i"
              class="bar-wrapper"
            >
              <div class="bar-filled" :style="{ height: bar.filled + '%' }"></div>
              <div class="bar-empty" :style="{ height: bar.empty + '%' }"></div>
            </div>
          </div>
          <div class="click-indicator">
            <span>Click to view case study →</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// Import images
import HRMJPAImage from "@/assets/img/blogTwo/HRMJPA.png";
import MyGovUCImage from "@/assets/img/blogTwo/mygovuc.png";
import CGSOImage from "@/assets/img/blogTwo/evetting-30.png";
import NawabsImage from "@/assets/img/blogTwo/nawabs.png";

// To use new images, replace the imports above with:
// import HRMJPAImage from "@/assets/img/blogTwo/hrm-new.png";
// import MyGovUCImage from "@/assets/img/blogTwo/mygovuc-new.png";
// import CGSOImage from "@/assets/img/blogTwo/cgso-new.png";
// import NawabsImage from "@/assets/img/blogTwo/nawabs-new.png";

export default {
  name: "PostboxAreaDynamic",
  data() {
    return {
      cards: [
        {
          highlight: "HRM Baharu",
          title: " Jabatan Perkhidmatan Awam (JPA)",
          description:
            "HRM Baharu by JPA is a major transformation of Malaysia's public sector HRM system: from a legacy system to a cloud-based, data-analytic, modular, and modern user experience system. Implementation began in May 2023, is planned to be fully completed by March 2026, and will positively impact the efficiency of government human resource management.",
          image: HRMJPAImage,
          type: "image",
          route: "/case-study/hrm-jpa",
        },
        {
          highlight: "MyGovUC 2.0",
          title: ", Jabatan Digital Negara (JDN)",
          description:
            "MyGovUC 2.0 is a modern platform that unifies email, chat, conferencing, and support systems in a single centralized portal, designed to empower communication and productivity of civil servants in the digital era. It is now continued as MyGovUC 3.0 with expanded features and international recognition.",
          image: MyGovUCImage,
          alt: "",
          type: "image",
          route: "/case-study/mygovuc",
        },
        {
          highlight: "E-Vetting, 3.0",
          title: " Chief Government Security Officer (CGSO) ",
          description:
            "The e-Vetting 3.0 Security Screening System is an online system redesigned to comprehensively meet the needs of Malaysia's government security screening process. Under the supervision of the Office of the Chief Government Security Officer (CGSO), Prime Minister's Department, this system serves as a key platform for background screening of individuals, especially in identifying security threats such as subversive activities, espionage, sabotage, and terrorism.",
          image: CGSOImage,
          alt: "White megaphone on dark background",
          type: "image",
          route: "/case-study/cgso",
        },
        {
          highlight: "DMSS",
          title: " Nawabs, Jabatan Pengairan & Saliran (JPS)",
          description:
            "DMSS stands for Decision Management Support System. In the context of NAWABS, DMSS is a module or system component that analyzes hydrological data (rainfall, river flow, reservoirs, water usage) to automatically generate decision support information.",
          image: NawabsImage,
          alt: "Burger ordering UI with trust logos",
          type: "image",
          route: "/case-study/nawabs-jps",
        },
      ],

      bars: [
        { filled: 70, empty: 30 },
        { filled: 100, empty: 0 },
        { filled: 10, empty: 90 },
        { filled: 80, empty: 20 },
        { filled: 20, empty: 80 },
        { filled: 90, empty: 10 },
        { filled: 40, empty: 60 },
        { filled: 100, empty: 0 },
        { filled: 85, empty: 15 },
        { filled: 70, empty: 30 },
      ],
    };
  },
  methods: {
    onImgError(event) {
      event.target.style.display = "none";
    },
    navigateToCaseStudy(route) {
      this.$router.push(route);
    },
  },
};
</script>


<style scoped>
.app-container {
  min-height: 100vh;
  background: #ffffff;
  color: #eee;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
}

.card {
  background: #1e1e1e;
  border: 1px solid #3ad6e6;
  border-radius: 18px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 0 15px #0bc8d5aa;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

h2 {
  font-weight: 600;
  font-size: 1.375rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  color: #eee;
}

.highlight {
  color: #0bc8d5;
}

p {
  color: #ccc;
  line-height: 1.4;
  font-size: 1rem;
  margin-bottom: 1.25rem;
}

.card-image {
  margin-top: auto;
  max-height: 180px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
}

/* Bar chart styles */
.bar-chart {
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: flex-end;
  height: 120px;
  max-width: 100%;
  margin-top: 1rem;
  padding-bottom: 20px;
  user-select: none;
}

.bar-wrapper {
  width: 10px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.bar-empty {
  background: #444;
  width: 100%;
}

.bar-filled {
  background: #0bc8d5;
  width: 100%;
  transition: height 0.3s ease;
}

.click-indicator {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #0bc8d5;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.card:hover .click-indicator {
  opacity: 1;
}
</style>
