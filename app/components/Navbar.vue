<template>
  <nav
    class="sticky top-0 z-50 py-6 px-8 transition-all duration-500 bg-background/80 backdrop-blur-md border-b border-muted/30"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-2xl font-serif font-bold tracking-tighter hover:text-primary transition-colors flex items-center gap-3 group"
      >
        <div
          class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <img
            src="/images/shared/logo.jpg"
            alt="company logo"
            class="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <span class="mt-1">ANGEL BOSS Co., Ltd</span>
      </NuxtLink>

      <!-- Navigation Links (Centered) -->
      <div
        class="hidden lg:flex items-center gap-12 text-[11px] font-sans tracking-[0.3em] uppercase ml-12"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          custom
          v-slot="{ isActive, navigate }"
        >
          <a
            @click="navigate"
            class="relative px-6 py-2 rounded-full transition-all duration-500 overflow-hidden group cursor-pointer"
            :class="[
              isActive
                ? 'bg-interactive text-background shadow-lg shadow-primary/20'
                : 'hover:bg-primary/5 text-foreground/70 hover:text-primary',
            ]"
          >
            <span
              class="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              {{ link.label }}
            </span>
            <!-- Subtle Glow effect on active -->
            <div
              v-if="isActive"
              class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
            ></div>
          </a>
        </NuxtLink>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-8">
        <!-- Language -->
        <button
          class="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] font-sans uppercase opacity-100 hover:opacity-30 transition-opacity"
        >
          <span class="font-bold">EN</span>
          <span class="w-[1px] h-3 bg-foreground/20"></span>
          <span>KH</span>
        </button>

        <!-- CTA -->
        <NuxtLink
          to="/contact"
          class="group bg-foreground text-primary-foreground px-10 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-foreground transition-all duration-500 shadow-xl shadow-foreground/5 flex items-center gap-2"
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/blog", label: "Stories" },
];
</script>
