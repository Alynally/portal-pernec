<script setup>
import { reactive } from 'vue';

const category_data = reactive([
  { id: 1, category: "Whistleblowing", route: "/whistleblowing" },
  { id: 2, category: "Anti-bribery & Corruption", route: "/anti-bribery-corruption" },
  { id: 3, category: "No Gift", route: "/no-gift"},
])

</script>

<template>
  <div class="sidebar__widget mb-30">
    <h3 class="sidebar__widget-title">Category</h3>
    <div class="sidebar__widget-content">
      <ul>
        <li v-for="(item, i) in category_data" :key="i">
          <router-link :to="item.route">{{ item.category }}</router-link></li>
      </ul>
    </div>
  </div>
</template>

