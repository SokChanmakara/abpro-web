import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGSAP = () => {
  const animations: gsap.Context[] = []

  const createAnimation = (fn: (ctx: gsap.Context) => void) => {
    if (!process.client) return
    
    onMounted(() => {
      const ctx = gsap.context(fn)
      animations.push(ctx)
    })
  }

  onUnmounted(() => {
    if (!process.client) return
    
    animations.forEach(ctx => ctx.revert())
  })

  return {
    gsap,
    ScrollTrigger,
    createAnimation,
  }
}
