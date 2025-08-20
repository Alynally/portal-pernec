<template>
  <div class="section">
    <div class="section-label">{{ label }}</div>
    <div class="section-text">
      <slot />
    </div>
    <hr v-if="!noLine" />
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    label: {
      type: String,
      required: true
    },
    noLine: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.section {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  margin-bottom: 32px;
  position: relative;
  flex-direction: row;
}
.section-label {
  color: #00f8ff;
  font-size: 1.05rem;
  min-width: 150px;
  user-select: none;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.section-text {
  flex-grow: 1;
  font-size: 1.08rem;
  line-height: 1.5;
  color: #ebebeb;
  text-align: justify;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 40px;
}
.section-text ul,
.section-text ol {
  text-align: justify;
  margin-left: 1.5em;
  padding-left: 0;
}
.section-text li {
  margin-bottom: 8px;
  text-align: left;
  line-height: 1.5;
}
hr {
  border: none;
  border-top: 1.5px solid #434343;
  margin: 12px 0 0 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -12px;
}
@media (max-width: 900px) {
  .section {
    flex-direction: column;
    gap: 8px;
  }
  .section-label {
    min-width: auto;
    font-size: 1rem;
    color: #00f8ff;
  }
  .section-text {
    font-size: 1rem;
    color: #ddd;
    margin-left: 0;
  }
  hr {
    left: 0;
    right: 0;
  }
}
</style> 