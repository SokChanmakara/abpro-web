<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-32 animate-fade-up">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">Wellness <span class="italic text-primary">Stories</span></h1>
      <p class="text-xl text-foreground/60 max-w-2xl mx-auto">Educational insights on ritual, health, and the botanical science behind our collection.</p>
    </header>

    <!-- Featured Post -->
    <section class="mb-32 animate-fade-up" style="animation-delay: 200ms">
      <div class="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-secondary/10 rounded-[3rem] p-8 md:p-12 overflow-hidden border border-muted">
        <div class="md:col-span-7">
          <div class="aspect-[16/9] rounded-[2rem] overflow-hidden">
            <img src="/images/blog/science-coffee.png" alt="Coffee benefits" class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="md:col-span-5">
          <span class="text-[10px] tracking-widest uppercase text-primary font-bold mb-4 block">Education</span>
          <h2 class="font-serif text-4xl mb-6">The Science of Morning Coffee: Why Ritual Matters.</h2>
          <p class="text-foreground/60 mb-10 leading-relaxed">Discover how the timing and quality of your morning cup can influence your circadian rhythm and metabolic health for the entire day.</p>
          <button class="text-xs font-bold tracking-[0.2em] uppercase border-b border-foreground/20 pb-2 hover:border-primary hover:text-primary transition-all">Read Full Story</button>
        </div>
      </div>
    </section>

    <!-- Post Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48 animate-fade-up" style="animation-delay: 400ms">
      <article v-for="post in posts" :key="post.id" class="group cursor-pointer">
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
</script>
