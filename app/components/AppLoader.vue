<template>
  <Teleport to="body">
    <div
      v-if="mounted"
      ref="loaderRef"
      class="fixed inset-0 z-[100] bg-background flex items-center justify-center origin-center"
    >
      <div class="relative flex flex-col items-center">
        <svg
          class="overflow-visible"
          width="120"
          height="120"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <g ref="steamRef" class="opacity-0">
            <path
              d="M40,30 Q35,20 40,10 T40,-5"
              fill="none"
              stroke="#baa00f"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M50,33 Q45,23 50,13 T50,-2"
              fill="none"
              stroke="#baa00f"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M60,30 Q55,20 60,10 T60,-5"
              fill="none"
              stroke="#baa00f"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>

          <clipPath id="cup-clip">
            <path
              d="M26,45 L26,74 C26,86 35,93 50,93 C65,93 74,86 74,74 L74,45 Z"
            />
          </clipPath>
          <g clip-path="url(#cup-clip)">
            <rect
              ref="coffeeRef"
              x="20"
              y="45"
              width="60"
              height="55"
              fill="#4A3125"
            />
          </g>

          <path
            ref="cupRef"
            d="M25,45 L25,75 C25,88 35,95 50,95 C65,95 75,88 75,75 L75,45"
            fill="none"
            stroke="#2D3A31"
            stroke-width="3"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <ellipse
            ref="rimRef"
            cx="50"
            cy="45"
            rx="25"
            ry="6"
            fill="#F9F8F4"
            stroke="#2D3A31"
            stroke-width="3"
          />
          <path
            ref="handleRef"
            d="M75,55 C88,55 92,60 92,70 C92,80 88,85 75,85"
            fill="none"
            stroke="#2D3A31"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

        <div
          ref="textRef"
          class="mt-8 font-serif text-foreground text-sm tracking-widest uppercase opacity-0"
        >
          Brewing
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const loaderRef = ref<HTMLElement | null>(null);
const cupRef = ref<SVGPathElement | null>(null);
const rimRef = ref<SVGEllipseElement | null>(null);
const handleRef = ref<SVGPathElement | null>(null);
const coffeeRef = ref<SVGRectElement | null>(null);
const steamRef = ref<SVGGElement | null>(null);
const textRef = ref<HTMLElement | null>(null);

const mounted = ref(true);
let masterTl: gsap.core.Timeline | null = null;
let steamTl: gsap.core.Timeline | null = null;

onMounted(() => {
  const { $lenis } = useNuxtApp();
  $lenis?.stop();

  if (
    [
      cupRef.value,
      rimRef.value,
      handleRef.value,
      coffeeRef.value,
      steamRef.value,
      textRef.value,
    ].some((t) => !t)
  )
    return;

  // ── Initial states ──────────────────────────────────────────────────────────
  gsap.set([cupRef.value, rimRef.value], { opacity: 0, y: 20 });
  gsap.set(handleRef.value, { opacity: 0, x: -10 });
  gsap.set(coffeeRef.value, { y: 60 });
  gsap.set(steamRef.value, { opacity: 0 });
  gsap.set(textRef.value, { opacity: 0, y: 6 });

  // ── Steam loop (independent, killed before exit) ────────────────────────────
  steamTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  steamRef.value!.querySelectorAll("path").forEach((path, i) => {
    steamTl!.fromTo(
      path,
      { y: 4, opacity: 0.15 },
      {
        y: -12,
        opacity: 0.75,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      },
      i * 0.18,
    );
  });

  // ── Master timeline ─────────────────────────────────────────────────────────
  // Target total visible duration: ~2s before exit fires
  masterTl = gsap.timeline({
    onComplete: () => {
      steamTl?.kill();
      gsap.to(loaderRef.value, {
        opacity: 0,
        y: -16,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          $lenis?.start();
          mounted.value = false;
        },
      });
    },
  });

  masterTl
    // 1. Cup, rim, handle all appear together
    .to([cupRef.value, rimRef.value, handleRef.value], {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.45,
      ease: "back.out(1.4)",
      stagger: 0.05,
    })
    .to(
      textRef.value,
      {
        opacity: 0.7,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      "<0.1",
    )

    // 2. Coffee fill — cut from 1.5s to 0.9s
    .to(
      coffeeRef.value,
      {
        y: 0,
        duration: 0.9,
        ease: "power2.inOut",
      },
      "-=0.2",
    )

    // 3. Steam
    .to(
      steamRef.value,
      {
        opacity: 1,
        duration: 0.35,
      },
      "-=0.4",
    )

    // 4. Brief hold
    .to({}, { duration: 0.35 });
});

onBeforeUnmount(() => {
  masterTl?.kill();
  steamTl?.kill();
  gsap.killTweensOf([
    cupRef.value,
    rimRef.value,
    handleRef.value,
    coffeeRef.value,
    steamRef.value,
    textRef.value,
    loaderRef.value,
  ]);
});
</script>
