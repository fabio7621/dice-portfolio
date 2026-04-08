import { defineStore } from 'pinia'

export const TOTAL_FACES = 6

export const useDiceStore = defineStore('dice', {
  state: () => ({
    currentFace: 1,
    isAnimating: false,
  }),
  actions: {
    nextFace() {
      if (this.isAnimating) return
      this.isAnimating = true
      this.currentFace = this.currentFace === TOTAL_FACES ? 1 : this.currentFace + 1
    },
    prevFace() {
      if (this.isAnimating) return
      this.isAnimating = true
      this.currentFace = this.currentFace === 1 ? TOTAL_FACES : this.currentFace - 1
    },
    goToFace(n) {
      if (this.isAnimating) return
      if (n < 1 || n > TOTAL_FACES) return
      if (n === this.currentFace) return
      this.isAnimating = true
      this.currentFace = n
    },
    finishAnimation() {
      this.isAnimating = false
    },
  },
})
