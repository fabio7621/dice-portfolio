import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDiceStore, TOTAL_FACES } from '../src/stores/dice'

describe('dice store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('starts at face 1', () => {
    const s = useDiceStore()
    expect(s.currentFace).toBe(1)
    expect(s.isAnimating).toBe(false)
  })

  it('nextFace advances and wraps 6 → 1', () => {
    const s = useDiceStore()
    for (let i = 2; i <= TOTAL_FACES; i++) {
      s.finishAnimation()
      s.nextFace()
      expect(s.currentFace).toBe(i)
    }
    s.finishAnimation()
    s.nextFace()
    expect(s.currentFace).toBe(1)
  })

  it('prevFace wraps 1 → 6', () => {
    const s = useDiceStore()
    s.prevFace()
    expect(s.currentFace).toBe(TOTAL_FACES)
  })

  it('isAnimating blocks re-entry', () => {
    const s = useDiceStore()
    s.nextFace()
    expect(s.currentFace).toBe(2)
    s.nextFace() // blocked
    expect(s.currentFace).toBe(2)
    s.finishAnimation()
    s.nextFace()
    expect(s.currentFace).toBe(3)
  })

  it('goToFace jumps to valid face and rejects invalid', () => {
    const s = useDiceStore()
    s.goToFace(5)
    expect(s.currentFace).toBe(5)
    s.finishAnimation()
    s.goToFace(99)
    expect(s.currentFace).toBe(5)
    s.goToFace(0)
    expect(s.currentFace).toBe(5)
  })
})
