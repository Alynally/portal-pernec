<template>
  <div id="app" class="bg-gray-50 min-h-screen p-4 md:p-8">
    <div class="calendar-wrapper mx-auto" style="max-width: 1600px;">
      <div class="mb-6 text-center">
        <h1 class="text-3xl font-bold text-gray-800">Birthday Calendar</h1>
      </div>

      <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        navigation
        pagination
        :loop="false"
        :allow-touch-move="true"
        :simulate-touch="true"
      >
        <SwiperSlide
          v-for="(monthName, index) in monthNames"
          :key="monthName + '-' + index"
        >
          <CalendarMonth
            :monthName="monthName"
            :monthIndex="index"
            :year="year"
            :weekDays="weekDays"
            :getWeeks="getWeeks"
            :hasBirthday="hasBirthday"
            :getBirthdayNames="getBirthdayNames"
            :isToday="isToday"
            @show-popup="showBirthdayPopup"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <BirthdayPopUp
      v-if="showPopup"
      :names="popupNames"
      @close="showPopup = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CalendarMonth from './CalendarMonth.vue'
import BirthdayPopUp from './BirthdayPopUp.vue'

const year = 2025
const showPopup = ref(false)
const popupNames = ref([])

let popupTimeout = null

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
]

const birthdays = [
  { date: '2025-05-31', name: 'Anatassia' },
  { date: '2025-09-19', name: 'Anis' },
  { date: '2025-09-27', name: 'Najihah' },
  { date: '2025-08-20', name: 'Syadiyah' },
  { date: '2025-09-26', name: 'Rahayu' },
  { date: '2025-10-26', name: 'Alyn' },
  { date: '2025-05-26', name: 'Alya' },
  { date: '2025-01-02', name: 'Aisyah' },
  { date: '2025-12-10', name: 'Prankkline' },
  { date: '2025-08-12', name: 'Adry' },
  { date: '2025-10-09', name: 'En Ismail' },
]

const isToday = (date) => {
  const now = new Date()
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  )
}

const hasBirthday = (date) => {
  return birthdays.some(b => {
    const d = new Date(b.date)
    return (
      d.getDate() === date.getDate() &&
      d.getMonth() === date.getMonth() &&
      d.getFullYear() === date.getFullYear()
    )
  })
}

const getBirthdayNames = (date) => {
  return birthdays
    .filter(b => {
      const d = new Date(b.date)
      return (
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
      )
    })
    .map(b => b.name)
}

const showBirthdayPopup = (names) => {
  popupNames.value = names
  showPopup.value = true
  if (popupTimeout) clearTimeout(popupTimeout)
  popupTimeout = setTimeout(() => {
    showPopup.value = false
    popupTimeout = null
  }, 6000)
}
</script>