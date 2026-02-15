<template>
  <div>
    <h2>模擬預約 Widget</h2>
    <div id="fake-booking-widget">
      <p>選擇日期：</p>
      <input type="date" v-model="selectedDate" />
      <p>選擇時間：</p>
      <select v-model="selectedTime">
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
      </select>
      <br /><br />
      <button @click="book">確認預約</button>
      <p v-if="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedDate = ref('')
const selectedTime = ref('09:00')
const message = ref('')

function book() {
  if (!selectedDate.value) {
    message.value = '請先選擇日期'
    return
  }
  message.value = `已預約：${selectedDate.value} ${selectedTime.value}`
}
</script>

<style scoped>
#fake-booking-widget {
  border: 2px dashed #4CAF50;
  padding: 20px;
  width: 300px;
  margin-top: 10px;
  border-radius: 8px;
}
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
