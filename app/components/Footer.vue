<template>
  <footer
    class="bg-foreground text-background/80 py-24 px-8 mt-32 relative overflow-hidden"
  >
    <!-- Decorative Grain Texture (Darker for footer) -->
    <div
      class="footer-grain pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay"
    ></div>

    <div
      class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8"
    >
      <div class="col-span-1 md:col-span-2">
        <h2 class="text-3xl font-serif text-background mb-6">
          Angel Boss Group Co., Ltd
        </h2>
        <p class="max-w-xs leading-relaxed opacity-90 mb-8">
          Angel Boss Group Co., Ltd.a 100% Cambodian-owned MLM. Our mission is to empower our community by providing financial opportunities that stay within Cambodia.

After 14 years under a foreign brand, we have taken control of our destiny since 2024. With a focus on local ownership, we ensure that decisions are made by leaders who understand our culture and challenges.
        </p>
        <div class="flex gap-6">
          <a
            href="#"
            class="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            class="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0-10 10c0 5.03 3.68 9.2 8.5 9.88V14.5H8.5V12h2V9.5C10.5 7.5 11.5 6.5 13.5 6.5c.8 0 1.5.1 2.1.2V9h-1.3c-1.1 0-1.3.5-1.3 1.3V12h2.5l-.5 2.5h-2v7.38A10 10 0 0 0 22 12z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3 class="text-background text-xs tracking-widest uppercase mb-8">
          Navigation
        </h3>
        <ul class="space-y-4 text-sm">
          <li>
            <NuxtLink
              to="/products"
              class="hover:text-primary transition-colors"
              >All Products</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-primary transition-colors"
              >Our Story</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/testimonials"
              class="hover:text-primary transition-colors"
              >Customer Reviews</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:text-primary transition-colors"
              >Wellness Blog</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-background text-xs tracking-widest uppercase mb-8">
          Contact
        </h3>
        <ul class="space-y-4 text-sm">
          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-primary"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            +855 78 510 975
          </li>
          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-primary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hello@abpro.com
          </li>
          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-primary"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            St 154, Sangkat Phsar Thmey,<br />
            Phnom Penh, Cambodia
          </li>
        </ul>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto border-t border-background/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase opacity-40"
    >
      <p>&copy; 2026 AB-PRO Cambodia. All rights reserved.</p>
      <div class="flex gap-8">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
</style>
