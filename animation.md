You are a senior frontend developer.

Build a modern, high-performance website using Nuxt 3 with GSAP for animations and Lenis for smooth scrolling.

Project context:

* Business website for a company selling coffee and imported health supplements
* Goal: showcase products, build brand credibility, and generate leads
* Style: clean, premium, modern, slightly minimal with smooth interactions

Technical requirements:

* Framework: Nuxt 4 (Vue 3, Composition API)
* Animation: GSAP (with ScrollTrigger)
* Smooth scrolling: Lenis integrated globally
* Use best practices for performance and maintainability

Global setup:

* Initialize Lenis for smooth scrolling across the entire app
* Sync Lenis with GSAP ScrollTrigger
* Ensure animations are optimized and do not block rendering
* Use requestAnimationFrame loop for Lenis

Animation guidelines:

* Use GSAP timelines for complex sequences
* Use ScrollTrigger for scroll-based animations
* Add subtle fade, slide, and scale effects (not over-animated)
* Ensure animations are smooth and professional (no excessive bounce)

Sections to implement:

1. Hero Section

   * Fade in headline and subtext
   * Stagger animation for buttons
   * Subtle parallax effect on background

2. Product Section (coffee & supplements)

   * Cards animate in on scroll (fade + translateY)
   * Stagger animations for product grid
   * Hover effect: scale slightly + shadow

3. About / Brand Section

   * Text reveals with clip-path or fade-up
   * Image parallax effect

4. Testimonials / Trust Section

   * Smooth carousel or fade transitions
   * Logos animate in with stagger

5. Call-To-Action (CTA)

   * Strong entrance animation
   * Button hover animation (scale + color transition)

6. Navbar

   * Shrinks or changes background on scroll
   * Smooth hide/show behavior

Performance considerations:

* Use GSAP context or composables for cleanup
* Avoid memory leaks
* Lazy-load heavy sections if needed
* Ensure mobile responsiveness

Code requirements:

* Use `<script setup>` syntax
* Organize animation logic into composables if possible
* Provide reusable animation functions
* Keep code clean and production-ready

Output:

* Provide full working code examples for:

  1. Lenis + GSAP setup in Nuxt plugin
  2. One fully animated page (homepage)
  3. Example reusable animation composable

Focus on clarity, maintainability, and real-world production quality.
