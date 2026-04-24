<template>
  <div
    class="min-h-screen bg-background text-foreground font-sans relative overflow-hidden"
  >
    <!-- Paper Grain Texture Overlay -->

    <div
      class="relative z-10 flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div class="max-w-4xl text-center">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span
            class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
          ></span>
          Now Available in Cambodia
        </div>
        <h1
          class="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8 text-foreground"
        >
          Premium Imported <br />
          <span class="italic font-medium">Coffee & Wellness</span>
        </h1>
        <p
          class="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          Boost your energy, focus, and immunity with trusted global products.
          Sourced with care, delivered with purpose.
        </p>
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            class="w-full sm:w-auto bg-foreground text-background px-12 py-5 rounded-full font-sans tracking-widest text-sm uppercase hover:bg-interactive transition-all duration-500 shadow-lg shadow-foreground/5"
          >
            Explore Products
          </button>
          <button
            class="w-full sm:w-auto bg-transparent border border-muted text-foreground px-12 py-5 rounded-full font-sans tracking-widest text-sm uppercase hover:border-primary hover:text-primary transition-all duration-500"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
