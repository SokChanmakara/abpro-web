<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- Header -->
    <header class="text-center mb-32">
      <h1 class="font-serif text-6xl md:text-8xl mb-8">
        <div class="overflow-hidden py-2">
          <div class="header-line opacity-0 translate-y-full">
            Let's <span class="italic text-primary">Connect</span>
          </div>
        </div>
      </h1>
      <p class="header-element opacity-0 text-xl text-foreground/60 max-w-2xl mx-auto">
        Have questions about our products or bulk orders? We're here to help you on your wellness journey.
      </p>
    </header>

    <ContactSection />

    
    <!-- Map Section -->
    <div class="map-section-reveal opacity-0 scale-[0.95] blur-sm w-full h-[500px] bg-secondary/20 rounded-[3rem] overflow-hidden mb-32">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706596131494!2d104.92058547582524!3d11.567276088633783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b557366f75%3A0xcd734b121526cfc5!2sAB%20Pro!5e0!3m2!1skm!2skh!4v1713974035655!5m2!1skm!2skh" 
        width="100%" 
        height="100%" 
        style="border:0;" 
        allowfullscreen 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </main>
</template>

<script setup>
const { gsap, ScrollTrigger, createAnimation } = useGSAP();

createAnimation(() => {
  const tl = gsap.timeline({
    defaults: { ease: "expo.out", duration: 1.8 },
    delay: 0.2
  });

  // Header Reveal
  tl.to(".header-line", {
    opacity: 1,
    y: 0,
    duration: 1.8,
    ease: "power4.out",
  });

  tl.to(
    ".header-element",
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
    },
    "-=1.4"
  );

  // Map Section Reveal
  gsap.to(".map-section-reveal", {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".map-section-reveal",
      start: "top 85%",
    },
  });
});
</script>
