<template>
  <main class="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
    <!-- About Header -->
    <header class="text-center mb-32">
      <h1
        class="header-small font-serif text-2xl tracking-[0.4em] uppercase opacity-0 mb-12"
      >
        Our Philosophy
      </h1>
      <h2
        class="font-serif text-7xl md:text-9xl leading-[0.9] tracking-tighter"
      >
        <div class="overflow-hidden py-2">
          <div class="header-line opacity-0 translate-y-full">Rooted in</div>
        </div>
        <div class="overflow-hidden py-2">
          <div class="header-line opacity-0 translate-y-full">
            <span class="italic text-primary">Wellness.</span>
          </div>
        </div>
      </h2>
    </header>

    <!-- Story Section -->
    <div
      class="grid grid-cols-1 md:grid-cols-12 gap-20 items-center mb-48 story-section"
    >
      <div
        class="md:col-span-5 order-2 md:order-1 reveal-text opacity-0 translate-y-12"
      >
        <h3 class="font-serif text-4xl mb-8 leading-tight">
          The journey began with a simple belief: that premium global health
          should be accessible at home.
        </h3>
        <p class="text-foreground/60 text-lg leading-relaxed mb-8">
          At AB-PRO, we don't just import products; we curate rituals. Our
          founders spent years traveling to the cloud forests of South America
          and the highlands of Southeast Asia to find the perfect union of
          bioactive power and exquisite taste.
        </p>
        <p class="text-foreground/60 text-lg leading-relaxed">
          Today, we bring that global excellence to Cambodia, ensuring every cup
          of coffee and every supplement is a step toward a more vibrant,
          grounded life.
        </p>
      </div>
      <div
        class="md:col-span-7 order-1 md:order-2 reveal-image opacity-0 scale-95 blur-sm translate-y-12"
      >
        <div
          class="parallax-container relative aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl shadow-primary/5 border border-muted"
        >
          <img
            src="/images/about/philosophy-hero.png"
            alt="Our Source"
            class="parallax-img w-full h-full object-cover scale-[1.2]"
          />
        </div>
      </div>
    </div>

    <!-- Values Grid -->
    <section
      class="values-section mb-48 bg-secondary/10 rounded-[4rem] p-12 md:p-24 opacity-0 scale-[0.98]"
    >
      <div class="text-center mb-20">
        <h2 class="font-serif text-5xl md:text-6xl mb-6">
          Built on <span class="italic text-primary">Integrity</span>
        </h2>
        <div class="w-24 h-[1px] bg-primary/40 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div
          v-for="(value, i) in values"
          :key="i"
          class="value-item text-left opacity-0 translate-y-8"
        >
          <span
            class="font-serif text-4xl text-primary opacity-30 mb-6 block"
            >{{ value.num }}</span
          >
          <h4 class="font-serif text-2xl mb-4">{{ value.title }}</h4>
          <p class="text-foreground/60 leading-relaxed">{{ value.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <div
      class="mission-box text-center max-w-4xl mx-auto mb-32 border border-muted p-16 md:p-24 rounded-full opacity-0 scale-[0.9] blur-md"
    >
      <h2
        class="font-serif text-3xl md:text-5xl leading-tight mb-0 italic font-medium"
      >
        "Our mission is to elevate the standard of wellness in Cambodia by
        providing world-class products that speak to the soul as much as the
        body."
      </h2>
    </div>
  </main>
</template>

<script setup>
const { gsap, ScrollTrigger, createAnimation } = useGSAP();

const values = [
  {
    num: "01",
    title: "Direct Sourcing",
    desc: "We skip the middlemen to work directly with farmers and manufacturers we know and trust.",
  },
  {
    num: "02",
    title: "Rigorous Testing",
    desc: "Every batch of supplements is third-party lab tested for purity, potency, and safety.",
  },
  {
    num: "03",
    title: "Global Transparency",
    desc: "We provide full certificate of analysis (COA) accessibility for our professional products.",
  },
];

createAnimation(() => {
  const tl = gsap.timeline({
    defaults: { ease: "expo.out", duration: 1.8 },
  });

  // Header Reveal
  tl.to(".header-small", {
    opacity: 0.4,
    y: 0,
    duration: 1.2,
  });

  tl.to(
    ".header-line",
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 2,
      ease: "power4.out",
    },
    "-=0.8",
  );

  // Story Section Reveal
  gsap.to(".reveal-text", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 80%",
    },
  });

  gsap.to(".reveal-image", {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 75%",
    },
  });

  // Parallax for About Image
  gsap.to(".parallax-img", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Values Section
  gsap.to(".values-section", {
    opacity: 1,
    scale: 1,
    duration: 2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".values-section",
      start: "top 85%",
    },
  });

  gsap.to(".value-item", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".values-section",
      start: "top 70%",
    },
  });

  // Mission Box
  gsap.to(".mission-box", {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 0.6,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: ".mission-box",
      start: "top 90%",
    },
  });
});
</script>
