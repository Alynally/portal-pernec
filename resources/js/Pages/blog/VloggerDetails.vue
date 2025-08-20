<template>
  <div class="vlogger-detail-container">
    <div v-if="loading" class="loading-spinner">
      <span>Loading...</span>
    </div>
    
    <div v-else>
      <div class="vlogger-header">
        <h1>{{ vlogger.name }}</h1>
        <p class="vlogger-id">ID: {{ id }}</p>
      </div>
      
      <div class="vlogger-content">
        <img :src="vlogger.avatar" :alt="vlogger.name" class="vlogger-avatar">
        <div class="vlogger-info">
          <p><strong>Subscribers:</strong> {{ vlogger.subscribers }}</p>
          <p><strong>Category:</strong> {{ vlogger.category }}</p>
          <p>{{ vlogger.description }}</p>
        </div>
      </div>
      
      <button @click="goToVlogger(relatedVlogger)" class="related-btn">
        View Related Vlogger
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const vlogger = ref({})
const loading = ref(true)
const relatedVlogger = ref(null)

const fetchVloggerData = async () => {
  try {
    const response = await axios.get(`/api/vloggers/${id}`)
    vlogger.value = response.data
    relatedVlogger.value = response.data.related_id
  } catch (error) {
    console.error('Error fetching vlogger:', error)
  } finally {
    loading.value = false
  }
}

const goToVlogger = (id) => {
  router.push(`/vlogger/${id}`)
}

onMounted(() => {
  fetchVloggerData()
})
</script>

<style scoped>
.vlogger-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.vlogger-header {
  margin-bottom: 2rem;
  text-align: center;
}

.vlogger-id {
  color: #666;
  font-size: 0.9rem;
}

.vlogger-content {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.vlogger-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.vlogger-info {
  flex: 1;
}

.related-btn {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.loading-spinner {
  text-align: center;
  padding: 2rem;
}
</style>