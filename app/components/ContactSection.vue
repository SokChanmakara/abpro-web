<template>
  <section class="max-w-7xl mx-auto px-6 mb-48">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
      <!-- Contact Details Side -->
      <div class="md:col-span-5 animate-fade-up" style="animation-delay: 200ms">
        <h2 class="font-serif text-5xl md:text-6xl mb-16 leading-tight">
          Get in <span class="italic text-primary">Touch</span>
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-12 gap-x-8"
        >
          <!-- email -->
          <div class="group">
            <h4
              class="text-xs tracking-[0.3em] uppercase opacity-90 mb-4 text-primary font-bold group-hover:opacity-100 transition-opacity"
            >
              Inquiries
            </h4>
            <a
              href="mailto:hello@abpro.com"
              class="font-sans text-xl font-medium hover:text-primary transition-colors block"
            >
              hello@abpro.com
            </a>
          </div>

          <!-- phone -->
          <div class="group">
            <h4
              class="text-xs tracking-[0.3em] uppercase opacity-90 mb-4 text-primary font-bold group-hover:opacity-100 transition-opacity"
            >
              Call Us
            </h4>
            <a
              href="tel:+85578510975"
              class="font-sans text-xl font-medium hover:text-primary transition-colors block"
            >
              +855 78 510 975
            </a>
          </div>

          <!-- address -->
          <div class="group">
            <h4
              class="text-xs tracking-[0.3em] uppercase opacity-90 mb-4 text-primary font-bold group-hover:opacity-100 transition-opacity"
            >
              Find Us
            </h4>
            <p class="font-sans text-xl font-medium leading-relaxed">
              St 154, Sangkat Phsar Thmey,<br />
              Phnom Penh, Cambodia
            </p>
          </div>

          <!-- hours -->
          <div class="group">
            <h4
              class="text-[10px] tracking-[0.3em] uppercase opacity-90 mb-4 text-primary font-bold group-hover:opacity-100 transition-opacity"
            >
              Opening Hours
            </h4>
            <div class="space-y-2">
              <div class="flex justify-between max-w-[250px]">
                <span class="text-sm uppercase tracking-widest">Mon — Fri</span>
                <span class="text-sm font-bold">8am — 5pm</span>
              </div>
              <div class="flex justify-between max-w-[250px]">
                <span class="text-sm uppercase tracking-widest">Saturday</span>
                <span class="text-sm font-bold">8am — 12pm</span>
              </div>
              <div class="flex justify-between max-w-[250px]">
                <span class="text-sm uppercase tracking-widest">Sunday</span>
                <span class="text-sm font-bold text-primary italic"
                  >Closed</span
                >
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="pt-6">
            <h4
              class="text-xs tracking-[0.3em] uppercase opacity-90 mb-6 text-primary font-bold"
            >
              Follow Our Journey
            </h4>
            <div class="flex gap-8">
              <a href="#" class="group relative pb-2">
                <span
                  class="text-sm tracking-widest uppercase hover:text-primary transition-colors"
                  >Telegram</span
                >
                <span
                  class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500"
                ></span>
              </a>
              <a href="#" class="group relative pb-2">
                <span
                  class="text-sm tracking-widest uppercase hover:text-primary transition-colors"
                  >Facebook</span
                >
                <span
                  class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500"
                ></span>
              </a>
              <a href="#" class="group relative pb-2">
                <span
                  class="text-sm tracking-widest uppercase hover:text-primary transition-colors"
                  >Instagram</span
                >
                <span
                  class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form Side -->
      <div
        class="md:col-span-7 bg-white p-10 md:p-16 rounded-[4rem] shadow-soft-xl border border-muted/30 animate-fade-up relative overflow-hidden"
        style="animation-delay: 400ms"
      >
        <!-- Floating organic shape for texture -->
        <div
          class="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
        ></div>

        <form class="space-y-12 relative z-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div class="group space-y-4">
              <label
                class="text-xs tracking-[0.3em] uppercase opacity-90 font-bold ml-2"
                >Full Name</label
              >
              <input
                type="text"
                placeholder="Your Name"
                class="w-full bg-transparent border-b border-muted py-4 px-2 focus:outline-none focus:border-primary transition-colors placeholder:opacity-50 font-sans text-lg"
              />
            </div>
            <div class="group space-y-4">
              <label
                class="text-xs tracking-[0.3em] uppercase opacity-90 font-bold ml-2"
                >Email Address</label
              >
              <input
                type="email"
                placeholder="email@example.com"
                class="w-full bg-transparent border-b border-muted py-4 px-2 focus:outline-none focus:border-primary transition-colors placeholder:opacity-50 font-sans text-lg"
              />
            </div>
          </div>

          <div class="group space-y-4">
            <label
              class="text-xs tracking-[0.3em] uppercase opacity-90 font-bold ml-2"
              >How can we help?</label
            >
            <select
              class="w-full bg-transparent border-b border-muted py-4 px-2 focus:outline-none focus:border-primary transition-colors appearance-none font-sans text-lg"
            >
              <option>Product Inquiry</option>
              <option>Bulk Purchase</option>
              <option>Press & Media</option>
              <option>Other</option>
            </select>
          </div>

          <div class="group space-y-4">
            <label
              class="text-xs tracking-[0.3em] uppercase opacity-90 font-bold ml-2"
              >Your Message</label
            >
            <textarea
              rows="4"
              placeholder="Tell us more about your request..."
              class="w-full bg-transparent border-b border-muted py-4 px-2 focus:outline-none focus:border-primary transition-colors resize-none placeholder:opacity-50 font-sans text-lg"
            ></textarea>
          </div>

          <div class="pt-6">
            <button
              type="submit"
              class="group relative overflow-hidden bg-foreground text-background py-6 px-12 rounded-full font-serif text-lg tracking-[0.2em] uppercase hover:shadow-xl hover:shadow-foreground/10 transition-all duration-500 w-full"
            >
              <span class="relative z-10">Send Message</span>
              <div
                class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
              ></div>
            </button>
            <p
              class="text-xs uppercase tracking-widest opacity-90 text-center mt-6"
            >
              We usually respond within 24 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom style for the select arrow */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238C9A84' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m7 15 5 5 5-5'/%3E%3Cpath d='m7 9 5-5 5 5'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.25rem;
}
</style>
