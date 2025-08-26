<template>
  <div class="project">
    <div class="cs-main-row">
      <div class="cs-image-col">
        <img src="@/assets/img/blogTwo/evetting-30.png" alt="E-Vetting 3.0 System" />
      </div>
      <div class="cs-sections-col">
        <div class="big-title">E-Vetting 3.0 (CGSO)</div>
        <div class="section-row">
          <div class="section-label">Objectives</div>
          <div class="section-content">
            <ul>
              <li>E-Vetting 3.0 aims to enhance system security through a more comprehensive approach.</li>
              <li>This new system offers an improved user experience to simplify the screening process.</li>
              <li>Other objectives include ensuring every function is easily and effectively accessible.</li>
            </ul>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Key Features & Benefits</div>
          <div class="section-content">
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
}
.section-content ul ul li {
  margin-bottom: 0.3em;
  padding-left: 0.5em;
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
