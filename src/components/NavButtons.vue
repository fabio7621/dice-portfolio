<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDiceStore } from '../stores/dice'
import { FACE_ROUTES } from '../router'

const diceStore = useDiceStore()
const router = useRouter()
const route = useRoute()

// store → router
watch(
  () => diceStore.currentFace,
  (face) => {
    const path = FACE_ROUTES[face]
    if (path && route.path !== path) router.push(path)
  }
)

// route → store (initial sync / direct URL access)
watch(
  () => route.meta.face,
  (face) => {
    if (face && face !== diceStore.currentFace) {
      diceStore.goToFace(face)
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="nav-buttons">
    <button :disabled="diceStore.isAnimating" @click="diceStore.prevFace()">◀ B</button>
    <span class="face-indicator">★ {{ diceStore.currentFace }}-0{{ diceStore.currentFace }}</span>
    <button :disabled="diceStore.isAnimating" @click="diceStore.nextFace()">A ▶</button>
  </div>
</template>
