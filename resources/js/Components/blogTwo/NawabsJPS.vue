<template>
  <div class="project">
    <div class="cs-main-row">
      <div class="cs-image-col">
        <img src="@/assets/img/blogTwo/nawabs.png" alt="DMSS Nawabs System" />
      </div>
      <div class="cs-sections-col">
        <div class="big-title">Nawabs, Jabatan Pengairan & Saliran (JPS)</div>
        <div class="section-row">
          <div class="section-label">What is NAWABS?</div>
          <div class="section-content">
            <p>
              NAWABS stands for the National Water Balance Management System. It is a Malaysian government initiative, specifically under the Water Resources Management and Hydrology Division, Department of Irrigation and Drainage Malaysia (JPS).
            </p>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Key Capabilities of DMSS</div>
          <div class="section-content">
            <ul>
              <li><b>Drought Forecasting (Flow Rate):</b> The system can project river flow rates up to 2 months in advance, aiding in water distribution planning.</li>
              <li><b>Drought Warning (Flow Rate):</b> The system generates early drought warnings with a 14-day lead time, helping JPS prepare and implement mitigation measures.</li>
              <li><b>Online Access:</b> All information is provided in real-time for use by JPS at both central and state levels.</li>
              <li><b>Coverage:</b> DMSS operates these functions for all river basins included in the NAWABS project scope.</li>
            </ul>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Main Objectives of NAWABS DMSS</div>
          <div class="section-content">
            <ul>
              <li><b>Monitor Water Resources:</b> Ensure up-to-date and accurate information on water storage status, river flow rates, and water usage.</li>
              <li><b>Reduce Disaster Risks:</b> Help detect and provide early warnings for risks such as drought or floods, enabling earlier mitigation actions.</li>
              <li><b>Efficient Dam Management:</b> Support dam and water control structure operations with real-time data to ensure optimal water distribution.</li>
              <li><b>Support Agriculture and Aquaculture:</b> Assist the agriculture and aquaculture sectors with forecast information to improve water use efficiency.</li>
              <li><b>Develop a User-Friendly System:</b> Offer a digital platform that is easy to use for JPS, related agencies, dam managers, and other stakeholders.</li>
            </ul>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Main Purpose of the Water Balance Model</div>
          <div class="section-content">
            <p>Provide a comprehensive water management solution, including:</p>
            <ul>
              <li>Real-time data on water availability (sources) and water demand (users).</li>
              <li>Evaluation of operational options to make the best decisions according to current situations.</li>
              <li>Forecasting functions to help management plan ahead.</li>
            </ul>
          </div>
        </div>
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
  background: #121212;
  border-radius: 8px;
  padding: 48px 32px;
  width: calc(100% - 40px);
  margin: 20px 20px 40px 20px;
  color: #ffffff;
  box-shadow: none;
  border: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.big-title {
  color: #0bc8d5aa;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 32px;
  letter-spacing: 0.5px;
  text-align: left;
}
.cs-main-row {
  display: flex;
  gap: 56px;
  align-items: stretch;
  width: 100%;
}
.cs-image-col {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
}
.cs-image-col img {
  max-width: 320px;
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
}
.cs-sections-col {
  flex: 2;
  display: flex;
  flex-direction: column;
}
.section-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: start;
  margin-bottom: 2rem;
  border-bottom: 1px solid #222;
  padding-bottom: 1.5rem;
}
.section-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}
.section-label {
  color: #0bc8d5aa;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: left;
  min-width: 180px;
}
.section-content {
  color: #ffffff;
  text-align: left;
}
.section-content p {
  color: #ffffff;
}
.section-content ul,
.section-content ol {
  margin: 0;
  padding-left: 1.2em;
}
.section-content li {
  margin-bottom: 0.5em;
  color: #ffffff;
  line-height: 1.6;
}
.section-content ul ul {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  padding-left: 1.5em;
}
.section-content ul ul li {
  margin-bottom: 0.3em;
}
.section-content b {
  color: #ffffff;
  font-weight: 600;
}
@media (max-width: 900px) {
  .cs-main-row {
    flex-direction: column;
    gap: 20px;
  }
  .cs-image-col img {
    max-width: 100%;
  }
  .big-title {
    text-align: center;
  }
  .section-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .section-label {
    text-align: center;
  }
}
</style>
