<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-32 animate-fade-up">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">Trusted by the <span class="italic text-primary">Community</span></h1>
      <p class="text-xl text-foreground/60 max-w-2xl mx-auto">Join thousands of conscious individuals in Cambodia who have elevated their ritual with AB-PRO.</p>
    </header>

    <!-- Trust Stats -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 animate-fade-up" style="animation-delay: 200ms">
      <div v-for="stat in stats" :key="stat.label" class="bg-secondary/10 p-8 rounded-[2.5rem] text-center border border-muted/50">
        <div class="text-4xl font-serif text-primary mb-2">{{ stat.value }}</div>
        <div class="text-[10px] tracking-[0.2em] uppercase opacity-40">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Reviews Grid -->
    <div class="columns-1 md:columns-2 lg:columns-3 gap-8 animate-fade-up" style="animation-delay: 400ms">
      <div 
        v-for="review in reviews" 
        :key="review.id"
        class="inline-block w-full mb-8 bg-white/40 backdrop-blur-md border border-muted p-10 rounded-[2.5rem] hover:shadow-xl transition-shadow"
      >
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-serif text-primary text-xl">
            {{ review.name[0] }}
          </div>
          <div>
            <h4 class="font-serif text-lg leading-none mb-1">{{ review.name }}</h4>
            <div class="flex gap-1 text-primary">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" :class="i > review.rating ? 'opacity-20' : ''"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
          </div>
        </div>
        
        <p class="text-foreground/70 leading-relaxed italic mb-8">"{{ review.comment }}"</p>
        
        <div class="flex items-center gap-2 text-[10px] tracking-widest uppercase opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Verified Purchase: {{ review.product }}
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <section class="mt-32 mb-48 text-center animate-fade-up">
      <h2 class="font-serif text-4xl mb-10">Start your ritual today.</h2>
      <NuxtLink to="/products" class="bg-foreground text-secondary px-14 py-6 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-interactive transition-all duration-500 inline-block">
        Browse the Collection
      </NuxtLink>
    </section>
  </main>
</template>

<script setup>
const stats = [
  { value: '5,000+', label: 'Happy Customers' },
  { value: '50+', label: 'Premium Products' },
  { value: '100%', label: 'Purity Tested' },
  { value: '24h', label: 'Fast Delivery' }
]

const reviews = [
  {
    id: 1,
    name: 'Sok Mean',
    rating: 5,
    comment: 'The Mekong Dark Roast is easily the best coffee I have found in Phnom Penh. The beans are fresh and the flavor profile is incredibly sophisticated.',
    product: 'Mekong Dark Roast'
  },
  {
    id: 2,
    name: 'Chanda Rhy',
    rating: 5,
    comment: 'Was skeptical about supplements at first, but the Immunity & Focus blend has genuinely helped with my midday energy crashes. Highly recommend!',
    product: 'Immunity & Focus Ritual'
  },
  {
    id: 3,
    name: 'Dara Vicheka',
    rating: 4,
    comment: 'Delivery was very fast and the packaging feels so premium. It really feels like a treat every morning.',
    product: 'Cloud Forest Blend'
  },
  {
    id: 4,
    name: 'Leakena S.',
    rating: 5,
    comment: 'Pure products that I can trust. In a market full of fakes, AB-PRO is a breath of fresh air for health-conscious people in Cambodia.',
    product: 'Ancient Forest Collagen'
  },
  {
    id: 5,
    name: 'Vannak T.',
    rating: 5,
    comment: 'As a cafe owner, I source their beans for my personal stash. The quality is unmatched.',
    product: 'Whole Bean Collection'
  },
  {
    id: 6,
    name: 'Bopha K.',
    rating: 5,
    comment: 'Soft, grounded aesthetic and even better results. My skin feels much better after 3 weeks on the collagen.',
    product: 'Ancient Forest Collagen'
  }
]
</script>
