<script setup>
import { ref, onMounted} from 'vue';
import Chart from 'primevue/chart';
import shimage from '@/assets/img/cta/Shareholder.svg';

const chartData = ref(null);
const chartOptions = ref(null);


const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);
    return {
        labels: ['PNB', 'NEC'],
        datasets: [
            {
                data: [70.01, 29.99],
                backgroundColor: [
                    documentStyle.getPropertyValue('--p-cyan-500')?.trim() || '#00bcd4',
                    documentStyle.getPropertyValue('--p-orange-500')?.trim() || '#ff9800'
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--p-cyan-400')?.trim() || '#26c6da',
                    documentStyle.getPropertyValue('--p-orange-400')?.trim() || '#ffa726'
                ],

            },
        ],
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color')?.trim() || '#ffffff';

   return {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
};


onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

});

</script>

<template>
  <div
    style="display: flex; justify-content: center; background-color: #07111F; padding: 5rem 1rem 15rem;">
    <div style="width: 100%; max-width: 600px;">
      <img :src="shimage" alt="image" style="width: 100%; height: auto; margin-bottom: 2rem;" />


      <div style="width: 100%; aspect-ratio: 1 / 1; position: relative;">
        <Chart
          type="pie"
          :data="chartData"
          :options="chartOptions"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        />
      </div>
    </div>
  </div>
</template>