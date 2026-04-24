<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-32 animate-fade-up">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">Let's <span class="italic text-primary">Connect</span></h1>
      <p class="text-xl text-foreground/60 max-w-2xl mx-auto">Have questions about our products or bulk orders? We're here to help you on your wellness journey.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-20 items-start mb-48">
      <!-- Contact Details -->
      <div class="md:col-span-5 animate-fade-up" style="animation-delay: 200ms">
        <h2 class="font-serif text-4xl mb-12">Reach out directly</h2>
        
        <div class="space-y-12">
          <div>
            <h4 class="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4 text-primary font-bold">Inquiries</h4>
            <p class="font-serif text-2xl">hello@abpro.com</p>
          </div>
          
          <div>
            <h4 class="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4 text-primary font-bold">Call Us</h4>
            <p class="font-serif text-2xl">+855 12 345 678</p>
          </div>
          
          <div>
            <h4 class="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4 text-primary font-bold">Find Us</h4>
            <p class="font-serif text-2xl leading-relaxed">
              Street 123, Sangkat Boeung Keng Kang I,<br />
              Phnom Penh, Cambodia
            </p>
          </div>
          
          <div>
            <h4 class="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4 text-primary font-bold">Social</h4>
            <div class="flex gap-6 mt-6">
              <a href="#" class="text-foreground hover:text-primary transition-colors">Telegram</a>
              <a href="#" class="text-foreground hover:text-primary transition-colors">Facebook</a>
              <a href="#" class="text-foreground hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="md:col-span-7 bg-white/40 backdrop-blur-md border border-muted p-10 md:p-20 rounded-[3rem] animate-fade-up" style="animation-delay: 400ms">
        <form class="space-y-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div class="space-y-4">
              <label class="text-[10px] tracking-widest uppercase opacity-40 font-bold ml-2">Full Name</label>
              <input type="text" placeholder="Your Name" class="w-full bg-secondary/10 border-b border-muted py-4 px-6 rounded-t-2xl focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div class="space-y-4">
              <label class="text-[10px] tracking-widest uppercase opacity-40 font-bold ml-2">Email Address</label>
              <input type="email" placeholder="email@example.com" class="w-full bg-secondary/10 border-b border-muted py-4 px-6 rounded-t-2xl focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>
          
          <div class="space-y-4">
            <label class="text-[10px] tracking-widest uppercase opacity-40 font-bold ml-2">Subject</label>
            <select class="w-full bg-secondary/10 border-b border-muted py-4 px-6 rounded-t-2xl focus:outline-none focus:border-primary transition-colors appearance-none">
              <option>Product Inquiry</option>
              <option>Bulk Purchase</option>
              <option>Press & Media</option>
              <option>Other</option>
            </select>
          </div>
          
          <div class="space-y-4">
            <label class="text-[10px] tracking-widest uppercase opacity-40 font-bold ml-2">Message</label>
            <textarea rows="5" placeholder="How can we help?" class="w-full bg-secondary/10 border-b border-muted py-4 px-6 rounded-t-2xl focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
          </div>
          
          <button type="submit" class="w-full bg-foreground text-secondary py-6 rounded-full font-serif text-lg tracking-widest uppercase hover:bg-interactive hover:text-foreground transition-all duration-500 shadow-xl shadow-foreground/10">
            Send Message
          </button>
        </form>
      </div>
    </div>
    
    <!-- Map Placeholder -->
    <div class="w-full h-[400px] bg-secondary/20 rounded-[3rem] mb-32 flex items-center justify-center animate-fade-up">
      <div class="text-center opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <p class="text-xs uppercase tracking-widest">Interactive Map coming soon</p>
      </div>
    </div>
  </main>
</template>
