<template>
  <div class="project">
    <div :class="['zigzag-row', { reverse }]">
      <div class="zigzag-img">
        <img src="@/assets/img/blogTwo/evetting-30.png" alt="E-Vetting 3.0 System" />
      </div>
      <div class="zigzag-text">
        <h2>E-Vetting 3.0 (CGSO)</h2>
        <h3>Objectives</h3>
        <ul>
          <li>E-Vetting 3.0 aims to enhance system security through a more comprehensive approach.</li>
          <li>This new system offers an improved user experience to simplify the screening process.</li>
          <li>Other objectives include ensuring every function is easily and effectively accessible.</li>
        </ul>
        <h3>Key Features & Benefits</h3>
        <ul>
          <li><b>Integration with External Agencies:</b> The system is integrated with key agencies such as the Royal Malaysia Police (PDRM), Prison Department, Federal Court, MACC, and Insolvency Department.<br />
            <i>Benefit:</i> Provides up-to-date and accurate information for screening processes, reduces risk of errors, and increases transparency.
          </li>
          <li><b>Automated Screening Process:</b> Security screening is conducted securely and automatically by the system, reducing the need for manual processing.<br />
            <i>Benefit:</i> Speeds up processing time and reduces user workload.
          </li>
          <li><b>Digital Identity Verification:</b> The system enables more secure identity verification through integration with MyIdentity, MyIMMs, HRMIS, and MyGPKI.<br />
            <i>Benefit:</i> Enhances security and reduces the potential for identity misuse or fraud.
          </li>
          <li><b>Storage and Access to Previous Records:</b> The system provides access to previous screening records and results.<br />
            <i>Benefit:</i> Facilitates record review and reference for more thorough decision-making in future cases.
          </li>
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
