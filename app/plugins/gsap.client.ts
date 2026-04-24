import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Handle route changes
    const router = useRouter()
    router.afterEach(() => {
      // Small delay to allow DOM to update
      setTimeout(() => {
        lenis.scrollTo(0, { immediate: true })
        ScrollTrigger.refresh()
      }, 100)
    })

    // Provide to the app
    return {
      provide: {
        gsap,
        ScrollTrigger,
        lenis,
      },
    }
  }
})
