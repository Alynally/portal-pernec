<template>
  <div class="project">
    <div class="cs-main-row">
      <div class="cs-image-col">
        <img src="@/assets/img/blogTwo/HRMJPA.png" alt="HRM 3.0 System" />
      </div>
      <div class="cs-sections-col">
        <div class="big-title">Jabatan Perkhidmatan Awam (JPA) - HRM Baharu</div>
        <div class="section-row">
          <div class="section-label">What is HRM Baharu?</div>
          <div class="section-content">
            <p>
              This initiative is an evolution from HRMIS 2.0, through the New Public Sector HRM System Development, Enhancement, Strengthening, and Expansion Project. It began on 14 May 2023 and will run until 14 March 2026, with a 12-month warranty after full implementation.<br />
              The project involves the development of 35 modules covering the entire lifecycle of civil servants: pre-service, in-service, and post-service.
            </p>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Vision & Project Objectives</div>
          <div class="section-content">
            <ul>
              <li>Create an adaptive, data-driven system (using IR 4.0 technologies) to drive modern human resource management.</li>
              <li>Prioritize user experience (user-centric), eliminate manual and rigid processes, and provide a unified, consistent platform.</li>
              <li>Support strategic human resource planning, such as using data analytics to inform decision-making and policy.</li>
            </ul>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Technology & Change Management</div>
          <div class="section-content">
            <ul>
              <li>Emphasis on technologies such as Enterprise Architecture, Robotic Process Automation (RPA), Predictive Analytics, and dashboard/analytics modules.</li>
              <li>Multiple rounds of BRS (Business Requirement Specification) discussions and meetings were held from 2022 to late 2023—including modules like officer profiles, discipline, and self-administration.</li>
              <li>HRMIS User Group Summit (HUGS) and Change Management sessions (June & September 2023) were planned to increase readiness and gather user feedback.</li>
            </ul>
          </div>
        </div>
        <div class="section-row">
          <div class="section-label">Implementation Timeline & Phases</div>
          <div class="section-content">
            <ol>
              <li><strong>Preparation Phase (2022):</strong> Technical preparation and consultation with MAMPU consultants; drafting of system specifications.</li>
              <li><strong>Project Kickoff Meeting:</strong> Held on 22–23 May 2023 for initial contractor recommendations and schedule planning.</li>
              <li><strong>June 2023:</strong> Change management sessions, briefings to consultants, and HRMIS Care program (Perak State Secretary's Office) to raise awareness.</li>
              <li><strong>September–October 2023:</strong> BRS meetings for specific modules, including Officer Profile, Dashboard & Analytics, Discipline, and Self-Service Module.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Section component removed, not needed
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
</style>
