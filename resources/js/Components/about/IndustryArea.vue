<script setup>
import { reactive } from "vue"
import Chart from 'primevue/chart';
import img1 from "@/assets/img/industry/pnb.svg"
import img2 from "@/assets/img/industry/nec.svg"
import AboutLineIcon from "@/svg/AboutLineIcon.vue";
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, ChartDataLabels)

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      formatter: (value) => `${value}%`,
      color: '#000',
      font: {
        size: 24,
        weight: 'bold',
        family: 'Poppins, sans-serif'
      },
      padding: {
        top: 10
      }
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      display: false,
      max: 100,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

// Combine and order: PNB first, NEC second
const shareholders = reactive([
  {
    id: 1,
    description: "PNB",
    tab_title: "Permodalan Nasional Berhad (PNB)",
    progressbar: "70.01",
    img: img1,
    subtitle: `<span class="title-pre-color fw-bold">Permodalan Nasional Berhad (PNB)</span> is Malaysia's biggest fund management company. PNB is the parent company for Amanah Saham Nasional Berhad (ASNB) which operates a number of unit trust schemes, and is a wholly owned subsidiary of Yayasan Pelaburan Bumiputra.`,
    chartData: {
      labels: ["PNB"],
      datasets: [{
        data: [70.01],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#0059A8');
          gradient.addColorStop(1, '#004080');
          return gradient;
        },
        borderRadius: 5,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      }]
    }
  },
  {
    id: 2,
    description: "NEC",
    tab_title: "NEC Corporation",
    progressbar: "29.99",
    img: img2,
    subtitle: `<span class="title-pre-color fw-bold">NEC Corporation</span> is a Japanese multinational ICT company based in Tokyo, offering IT and network solutions to businesses, telecom providers, and governments. Part of the Sumitomo Group, it was formerly known as Nippon Electric Company. NEC is also a top 20 global semiconductor manufacturer.`,
    chartData: {
      labels: ["NEC"],
      datasets: [{
        data: [29.99],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, '#00ADEF');
          gradient.addColorStop(1, '#0088cc');
          return gradient;
        },
        borderRadius: 5,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      }]
    }
  }
]);
</script>

<template>
  <section class="tp-industry-area p-relative pb-90 pt-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-industry-title-wrapper text-justify">
            <h3 class="tp-section-title text-center">
              Our <span class='title-color'>Shareholders</span>
              <span class="title-center-shape">
                <AboutLineIcon />
              </span>
            </h3>
          </div>
        </div>

        <div
          class="col-xl-6 col-lg-12"
          v-for="holder in shareholders"
          :key="holder.id"
        >
          <div class="tp-industry-wrapper mb-30 wow fadeInUp">
            <div class="tp-industry-content text-center">
              <img :src="holder.img" :alt="holder.description" class="mb-4" style="height: 80px;" />
              <Chart type="bar" :data="holder.chartData" :options="chartOptions" />
              <p class="text-justify text-black font-poppins mt-4" v-html="holder.subtitle"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
