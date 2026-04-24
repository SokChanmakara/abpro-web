<template>
  <main class="relative z-10 flex flex-col items-center pt-20 md:pt-32 px-6">
    <!-- Hero Section -->
    <!-- Badge -->
    <div
      class="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-widest uppercase mb-10 animate-fade-up"
    >
      <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
      Sustainably Sourced in Cambodia
    </div>

    <!-- Hero Heading -->
    <div class="max-w-5xl text-center mb-16 px-4">
      <h1
        class="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] mb-8 text-foreground animate-fade-up fill-mode-forwards"
        style="animation-delay: 100ms"
      >
        Pure. <span class="italic font-medium text-primary">Botanical.</span><br />
        Grounded Excellence.
      </h1>
      
      <p
        class="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto mb-12 leading-[1.6] font-sans animate-fade-up fill-mode-forwards"
        style="animation-delay: 300ms"
      >
        Elevating your daily ritual through premium coffee and natural wellness
        essentials, crafted for the conscious mind and the vibrant soul.
      </p>

      <!-- CTAs -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up fill-mode-forwards"
        style="animation-delay: 500ms"
      >
        <NuxtLink
          to="/products"
          class="group w-full sm:w-auto bg-foreground text-secondary px-14 py-6 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-interactive hover:text-foreground transition-all duration-500 shadow-2xl shadow-foreground/10 flex items-center justify-center gap-3"
        >
          Explore the Collection
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="w-full sm:w-auto bg-transparent border border-muted text-foreground px-14 py-6 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:border-primary hover:text-primary transition-all duration-500"
        >
          Our Story
        </NuxtLink>
      </div>
    </div>

    <!-- Large Product Visual -->
    <div class="relative w-full max-w-6xl mx-auto mt-20 animate-fade-up fill-mode-forwards" style="animation-delay: 700ms">
      <div class="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-primary/5 group">
        <img 
          src="/images/home/hero-hero.png" 
          alt="ABPro Botanical Products" 
          class="w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
        
        <div class="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-background/80 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-xl max-w-[280px] animate-subtle-float hidden sm:block">
          <div class="text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="font-serif text-lg mb-2">Purity Guaranteed</h3>
          <p class="text-sm text-foreground/70 leading-normal">Every batch is lab-tested and certified for organic purity and nutrient density.</p>
        </div>
      </div>
    </div>

    <!-- Featured Products Section -->
    <section class="w-full max-w-7xl mx-auto py-32 md:py-48 px-4">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="font-serif text-5xl md:text-7xl mb-6">Our <span class="italic text-primary">Essentials</span></h2>
          <p class="text-foreground/60 text-lg">Meticulously curated products designed to harmonize your body and mind.</p>
        </div>
        <NuxtLink to="/products" class="text-xs tracking-widest uppercase border-b border-foreground/20 pb-2 hover:border-primary hover:text-primary transition-all">View All Products</NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Coffee Featured -->
        <div class="group cursor-pointer">
          <div class="relative aspect-square overflow-hidden rounded-[2rem] mb-8 bg-secondary/30">
            <img src="/images/home/featured-coffee.png" alt="Premium Coffee" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-semibold">Roasted in Cambodia</div>
          </div>
          <h3 class="font-serif text-2xl mb-2">Mekong Highland Dark Roast</h3>
          <p class="text-foreground/60 mb-6 uppercase text-[10px] tracking-widest">Single Origin | Intense | Chocolatey</p>
          <NuxtLink to="/products" class="text-xs font-semibold tracking-widest uppercase text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>

        <!-- Supplement Featured -->
        <div class="group cursor-pointer translate-y-12 md:translate-y-24">
          <div class="relative aspect-square overflow-hidden rounded-[2rem] mb-8 bg-secondary/30">
            <img src="/images/home/featured-supplement.png" alt="Immunity Supplement" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-semibold">Pure Botanical</div>
          </div>
          <h3 class="font-serif text-2xl mb-2">Immunity & Focus Ritual</h3>
          <p class="text-foreground/60 mb-6 uppercase text-[10px] tracking-widest">Ashwagandha | Moringa | Ginger</p>
          <NuxtLink to="/products" class="text-xs font-semibold tracking-widest uppercase text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="w-full bg-secondary/20 py-32 rounded-[4rem] px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <h3 class="font-serif text-2xl mb-4">Unyielding Quality</h3>
          <p class="text-foreground/60 text-sm leading-relaxed">We source directly from trusted farmers and global certifiers to ensure every product exceeds standards.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
          </div>
          <h3 class="font-serif text-2xl mb-4">Wellness-First</h3>
          <p class="text-foreground/60 text-sm leading-relaxed">Our products are chosen for their bioactive performance and ability to integrate into your daily life.</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 class="font-serif text-2xl mb-4">Grounded Growth</h3>
          <p class="text-foreground/60 text-sm leading-relaxed">We believe in sustainable business practices that support local Cambodian communities and global health.</p>
        </div>
      </div>
    </section>
  </main>
</template>
