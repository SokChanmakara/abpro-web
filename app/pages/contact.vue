<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-32 animate-fade-up">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">Let's <span class="italic text-primary">Connect</span></h1>
      <p class="text-xl text-foreground/60 max-w-2xl mx-auto">Have questions about our products or bulk orders? We're here to help you on your wellness journey.</p>
    </header>

    <ContactSection />

    
    <!-- Map Section -->
    <div class="w-full h-[500px] bg-secondary/20 rounded-[3rem] overflow-hidden mb-32 animate-fade-up">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706596131494!2d104.92058547582524!3d11.567276088633783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b557366f75%3A0xcd734b121526cfc5!2sAB%20Pro!5e0!3m2!1skm!2skh!4v1713974035655!5m2!1skm!2skh" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        class="grayscale hover:grayscale-0 transition-all duration-700 contrast-[1.1]"
      ></iframe>
    </div>
  </main>
</template>
