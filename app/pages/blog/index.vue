<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-32">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">
        <div class="overflow-hidden py-2">
          <div class="header-line opacity-0 translate-y-full">
            Wellness <span class="italic text-primary">Stories</span>
          </div>
        </div>
      </h1>
      <p class="header-element opacity-0 text-xl text-foreground/60 max-w-2xl mx-auto">
        Educational insights on ritual, health, and the botanical science behind our collection.
      </p>
    </header>

    <!-- Featured Post -->
    <section class="mb-32 featured-post opacity-0 translate-y-12">
      <div class="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-secondary/10 rounded-[3rem] p-8 md:p-12 overflow-hidden border border-muted">
        <div class="md:col-span-7 featured-image opacity-0 scale-95 blur-md translate-x-4">
          <div class="aspect-[16/9] rounded-[2rem] overflow-hidden">
            <img src="/images/blog/science-coffee.png" alt="Coffee benefits" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="md:col-span-5 featured-content opacity-0 translate-x-8">
          <span class="text-[10px] tracking-widest uppercase text-primary font-bold mb-4 block">Education</span>
          <h2 class="font-serif text-4xl mb-6">The Science of Morning Coffee: Why Ritual Matters.</h2>
          <p class="text-foreground/60 mb-10 leading-relaxed">Discover how the timing and quality of your morning cup can influence your circadian rhythm and metabolic health for the entire day.</p>
          <button class="text-xs font-bold tracking-[0.2em] uppercase border-b border-foreground/20 pb-2 hover:border-primary hover:text-primary transition-all">Read Full Story</button>
        </div>
      </div>
    </section>

    <!-- Post Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48 posts-grid">
      <article v-for="post in posts" :key="post.id" class="post-card opacity-0 translate-y-12 group cursor-pointer">
        <div class="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 bg-secondary/10 border border-muted">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <span class="text-[10px] tracking-widest uppercase opacity-40 mb-4 block">{{ post.category }}</span>
        <h3 class="font-serif text-2xl mb-4 group-hover:text-primary transition-colors">{{ post.title }}</h3>
        <p class="text-sm text-foreground/60 leading-relaxed mb-6">{{ post.excerpt }}</p>
        <span class="text-xs font-bold tracking-widest uppercase opacity-20 group-hover:opacity-100 transition-opacity flex items-center gap-2">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </article>
    </div>
  </main>
</template>

<script setup>
const { gsap, ScrollTrigger, createAnimation } = useGSAP()

const posts = [
  {
    id: 1,
    title: 'Ashwagandha: Nature\'s Stress Shield',
    category: 'Supplements',
    excerpt: 'Exploring the ancient roots of this powerful adaptogen and its modern clinical benefits for anxiety.',
    image: '/images/blog/ashwagandha.png'
  },
  {
    id: 2,
    title: 'Dark vs Light Roast: Which has more Caffeine?',
    category: 'Coffee',
    excerpt: 'Common myths debunked about roast profiles and their impact on your energy levels.',
    image: '/images/blog/dark-vs-light.png'
  },
  {
    id: 3,
    title: 'Mindful Sourcing in the Mekong Highlands',
    category: 'Sustainability',
    excerpt: 'A deep dive into our partnership with local farmers and our commitment to the Cambodian land.',
    image: '/images/blog/sourcing.png'
  }
]

createAnimation(() => {
  const tl = gsap.timeline({
    defaults: { ease: 'expo.out', duration: 1.8 }
  })

  tl.to('.header-line', {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'power4.out'
  })

  tl.to('.header-element', {
    opacity: 1,
    y: 0,
    duration: 1.5
  }, '-=1.4')

  // Featured Post reveal
  gsap.to('.featured-post', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '.featured-post',
      start: 'top 85%'
    }
  })

  gsap.to('.featured-image', {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    x: 0,
    duration: 2,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: '.featured-post',
      start: 'top 75%'
    }
  })

  gsap.to('.featured-content', {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.featured-post',
      start: 'top 70%'
    }
  })

  // Posts grid reveal
  gsap.to('.post-card', {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.posts-grid',
      start: 'top 80%'
    }
  })
})
</script>
