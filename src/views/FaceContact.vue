<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)
const submit = () => { sent.value = true }
</script>

<template>
  <section>
    <h1>聯絡方式</h1>
    <p>📧 <a href="mailto:fabio.dev@gmail.com">fabio.dev@gmail.com</a></p>
    <p>🐙 <a href="https://github.com/fabio-dev" target="_blank">github.com/fabio-dev</a></p>
    <p>💼 <a href="https://linkedin.com/in/fabio-tw" target="_blank">linkedin.com/in/fabio-tw</a></p>
    <p>📍 台灣 台南</p>

    <h2>留言給我</h2>
    <form v-if="!sent" @submit.prevent="submit">
      <label>姓名<input v-model="form.name" required /></label>
      <label>電子郵件<input v-model="form.email" type="email" required /></label>
      <label>留言內容<textarea v-model="form.message" rows="4" required></textarea></label>
      <button type="submit">送出</button>
    </form>
    <p v-else>感謝你的留言，我會盡快回覆 🎲</p>
  </section>
</template>
