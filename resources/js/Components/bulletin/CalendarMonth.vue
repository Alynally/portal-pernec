<template>
  <div
    class="calendar-container"
    role="region"
    :aria-label="monthName + ' ' + year"
  >
    <div class="month-title text-center" aria-live="polite">
      <h1>{{ monthName }}</h1>
      <span class="year">{{ year }}</span>
    </div>

    <table class="calendar" role="grid">
      <thead>
        <tr>
          <th v-for="day in weekDays" :key="day" class="week-day">
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, wIndex) in weeks" :key="wIndex">
          <td
            v-for="(day, dIndex) in week"
            :key="day.date ? day.date.toISOString() : 'empty-' + wIndex + '-' + dIndex"
            :class="[
              'day-cell',
              {
                empty: !day.date,
                today: day.date && isToday(day.date),
              }
            ]"
            role="gridcell"
            :aria-selected="day.date && isToday(day.date) ? 'true' : 'false'"
            tabindex="0"
            @click="day.date && hasBirthday(day.date) ? $emit('show-popup', getBirthdayNames(day.date)) : null"
          >
            <div class="date-number" v-if="day.date">
              {{ day.date.getDate() }}
            </div>
            <div class="lines" v-if="day.date">
              <hr v-for="line in 4" :key="line" />
            </div>
            <div
              v-if="day.date && hasBirthday(day.date)"
              class="birthday-tag"
            >
              🎂
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  monthName: String,
  monthIndex: Number,
  year: Number,
  weekDays: Array,
  hasBirthday: Function,
  getBirthdayNames: Function,
  isToday: Function,
})

const weeks = computed(() => {
  const weeksArray = []
  const firstDay = new Date(props.year, props.monthIndex, 1)
  const firstDayWeekday = firstDay.getDay()
  const numDays = new Date(props.year, props.monthIndex + 1, 0).getDate()

  let dayCounter = 1
  let week = []

  // First week - fill empty cells before the first day of the month
  for (let i = 0; i < 7; i++) {
    if (i < firstDayWeekday) {
      week.push({ date: null })
    } else {
      week.push({ date: new Date(props.year, props.monthIndex, dayCounter++) })
    }
  }
  weeksArray.push(week)

  // Remaining weeks - fill with actual days
  while (dayCounter <= numDays) {
    week = []
    for (let i = 0; i < 7; i++) {
      if (dayCounter <= numDays) {
        week.push({ date: new Date(props.year, props.monthIndex, dayCounter++) })
      } else {
        week.push({ date: null })
      }
    }
    weeksArray.push(week)
  }

  return weeksArray
})
</script>

<style scoped>
.calendar-container {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  background: #0a1046;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.month-title h1 {
  font-family: 'Brush Script MT', cursive;
  font-size: 4rem;
  padding: 0.5rem 0;
  background: linear-gradient(to right, #908bf1, #f56470);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.year {
  display: block;
  font-size: 2rem; /* Increased from previous (assumed 1.5rem) by two steps */
  font-weight: bold;
  color: #fff;
  margin-top: 0.25rem;
}

.calendar {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

thead {
  border-bottom: 2px solid #e2e8f0;
}

.week-day {
  text-align: center;
  font-weight: 600;
  padding: 0.5rem 0;
  color: #fcfdff;
  font-size: 0.875rem;
}

tbody tr {
  height: 5rem;
  border-bottom: 1px solid #e2e8f0;
}

.day-cell {
  border-right: 1px solid #e2e8f0;
  vertical-align: top;
  position: relative;
  padding: 4px 6px;
  height: 5rem;
  width: 100px;
  box-sizing: border-box;
  transition: all 0.2s;
}

.day-cell:hover:not(.empty) {
  background-color: #f5f3ff;
  cursor: pointer;
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.1);
  z-index: 1;
}

.day-cell:last-child {
  border-right: none;
}

.day-cell.empty {
  background: #dbdcdd;
}

.day-cell.today {
  background: #fef3c7;
}

.day-cell.today::after {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  background-color: #e7bd73;
  border-radius: 50%;
}

.date-number {
  position: absolute;
  top: 4px;
  right: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
}

.birthday-tag {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  /* background: #ec4899; */
  color: white;
  font-weight: bold;
  width: 50px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>