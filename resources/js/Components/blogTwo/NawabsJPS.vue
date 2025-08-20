<template>
  <div class="project">
    <div :class="['zigzag-row', { reverse }]">
      <div class="zigzag-img">
        <img src="@/assets/img/blogTwo/nawabs.png" alt="DMSS Nawabs System" />
      </div>
      <div class="zigzag-text">
        <h2>Nawabs, Jabatan Pengairan & Saliran (JPS)</h2>
        <h3>What is NAWABS?</h3>
        <p>
          NAWABS stands for the National Water Balance Management System. It is a Malaysian government initiative, specifically under the Water Resources Management and Hydrology Division, Department of Irrigation and Drainage Malaysia (JPS).
        </p>
        <h3>Key Capabilities of DMSS</h3>
        <ul>
          <li><b>Drought Forecasting (Flow Rate):</b> The system can project river flow rates up to 2 months in advance, aiding in water distribution planning.</li>
          <li><b>Drought Warning (Flow Rate):</b> The system generates early drought warnings with a 14-day lead time, helping JPS prepare and implement mitigation measures.</li>
          <li><b>Online Access:</b> All information is provided in real-time for use by JPS at both central and state levels.</li>
          <li><b>Coverage:</b> DMSS operates these functions for all river basins included in the NAWABS project scope.</li>
        </ul>
        <h3>Main Objectives of NAWABS DMSS</h3>
        <ul>
          <li><b>Monitor Water Resources:</b> Ensure up-to-date and accurate information on water storage status, river flow rates, and water usage.</li>
          <li><b>Reduce Disaster Risks:</b> Help detect and provide early warnings for risks such as drought or floods, enabling earlier mitigation actions.</li>
          <li><b>Efficient Dam Management:</b> Support dam and water control structure operations with real-time data to ensure optimal water distribution.</li>
          <li><b>Support Agriculture and Aquaculture:</b> Assist the agriculture and aquaculture sectors with forecast information to improve water use efficiency.</li>
          <li><b>Develop a User-Friendly System:</b> Offer a digital platform that is easy to use for JPS, related agencies, dam managers, and other stakeholders.</li>
        </ul>
        <h3>Main Purpose of the Water Balance Model</h3>
        <ul>
          <li>Provide a comprehensive water management solution, including:</li>
          <ul>
            <li>Real-time data on water availability (sources) and water demand (users).</li>
            <li>Evaluation of operational options to make the best decisions according to current situations.</li>
            <li>Forecasting functions to help management plan ahead.</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.project {
  background-color: #333;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
}
.zigzag-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}
.zigzag-row.reverse {
  flex-direction: row-reverse;
}
.zigzag-img {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zigzag-img img {
  max-width: 300px;
  width: 100%;
  border-radius: 8px;
  background: #111;
  box-shadow: 0 4px 24px #0008;
  display: block;
  margin: 0 auto;
}
.zigzag-text {
  flex: 2 1 0;
}
h2 {
  color: #FFD700;
  text-align: left;
}
h3 {
  color: #FFA500;
  margin-top: 24px;
}
ul, ol {
  margin-left: 1.5em;
  margin-bottom: 1em;
}
li {
  margin-bottom: 0.5em;
}
@media (max-width: 900px) {
  .zigzag-row, .zigzag-row.reverse {
    flex-direction: column !important;
    gap: 20px;
  }
  .zigzag-img img {
    max-width: 100%;
  }
  h2 {
    text-align: center;
  }
}
</style>
