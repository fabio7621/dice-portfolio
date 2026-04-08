<script setup>
import DiceCanvas from './components/DiceCanvas.vue'
import NavButtons from './components/NavButtons.vue'
</script>

<template>
  <DiceCanvas />
  <main class="content">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <NavButtons />
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.35s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
