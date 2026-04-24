<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Page Header -->
    <header class="text-center mb-24 animate-fade-up">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">The <span class="italic text-primary">Collection</span></h1>
      <p class="text-xl text-foreground/60 max-w-2xl mx-auto">A curated selection of premium coffee and health supplements, sourced with absolute integrity.</p>
    </header>

    <!-- Filters -->
    <div class="flex justify-center gap-4 mb-20 animate-fade-up" style="animation-delay: 200ms">
      <button 
        v-for="cat in categories" 
        :key="cat.id"
        @click="activeCategory = cat.id"
        :class="[
          'px-8 py-3 rounded-full text-xs tracking-widest uppercase transition-all duration-300',
          activeCategory === cat.id ? 'bg-foreground text-background shadow-xl shadow-foreground/10' : 'bg-secondary/20 hover:bg-secondary/40'
        ]"
      >
        {{ cat.name }}
      </button>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[600px] animate-fade-up" style="animation-delay: 400ms">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id"
        class="group flex flex-col bg-white/50 backdrop-blur-sm border border-muted rounded-[2.5rem] p-6 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
      >
        <div class="relative aspect-square overflow-hidden rounded-[2rem] mb-10 bg-secondary/10">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
          <div class="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold">{{ product.origin }}</div>
        </div>
        
        <h3 class="font-serif text-2xl mb-2">{{ product.name }}</h3>
        <p class="text-foreground/50 text-[10px] tracking-widest uppercase mb-4">{{ product.tag }}</p>
        <p class="text-sm text-foreground/70 leading-relaxed mb-8 flex-grow">{{ product.description }}</p>
        
        <div class="flex items-center justify-between border-t border-muted pt-6 mt-auto">
          <span class="font-serif text-xl">{{ product.price }}</span>
          <button class="bg-primary text-background px-6 py-3 rounded-full text-[10px] tracking-widest uppercase hover:bg-interactive transition-colors">
            Order via Telegram
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'supplements', name: 'Supplements' }
]

const products = [
  {
    id: 1,
    name: 'Mekong Highland Dark Roast',
    category: 'coffee',
    tag: 'Whole Bean | Dark Roast',
    description: 'A bold, smoky blend with deep chocolate notes and a velvet crema. Sourced from the volcanic soils of the Mekong Highlands.',
    price: '$18.00',
    origin: 'Cambodia',
    image: '/images/products/mekong-dark-roast.png'
  },
  {
    id: 2,
    name: 'Immunity & Focus Ritual',
    category: 'supplements',
    tag: 'Powder | Bioactive',
    description: 'A potent blend of organic Ashwagandha and Moringa designed to sharpen cognition and fortify your natural defenses.',
    price: '$45.00',
    origin: 'Imported',
    image: '/images/products/immunity-focus.png'
  },
  {
    id: 3,
    name: 'Cloud Forest Light roast',
    category: 'coffee',
    tag: 'Ground | Light Roast',
    description: 'Floral and bright with notes of jasmine and wild honey. Perfect for a mindful morning pour-over.',
    price: '$22.00',
    origin: 'Imported',
    image: '/images/products/cloud-forest.png' // Reusing the hero image as placeholder
  },
  {
    id: 4,
    name: 'Ancient Forest Collagen',
    category: 'supplements',
    tag: 'Powder | Marine Source',
    description: 'Sustainably sourced marine collagen with added botanical antioxidants for skin, hair, and joint longevity.',
    price: '$58.00',
    origin: 'Imported',
    image: '/images/products/collagen.png' 
  },
  {
    id: 5,
    name: 'Breakfast Blend Ritual',
    category: 'coffee',
    tag: 'Whole Bean | Medium',
    description: 'Smooth and balanced with a nutty finish. The perfect companion for a productive workday.',
    price: '$16.00',
    origin: 'Cambodia',
    image: '/images/products/breakfast-blend.png'
  }
]

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>
