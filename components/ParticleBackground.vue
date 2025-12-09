<template>
  <div
    class="fixed inset-0 w-full h-full"
    style="z-index: -10"
    :style="{ background: currentGradient }"
  >
    <canvas ref="canvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const canvas = ref(null);
let ctx = null;
let animationId = null;
let particles = [];

// Time-based gradient system
const getTimeBasedGradient = () => {
  const hour = 17;

  if (hour >= 5 && hour < 8) {
    return "linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #a8b5ff 100%)";
  } else if (hour >= 8 && hour < 17) {
    return "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)";
  } else if (hour >= 17 && hour < 20) {
    return "linear-gradient(135deg, #fa709a 0%, #fee140 50%, #30cfd0 100%)";
  } else {
    return "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)";
  }
};

const currentGradient = computed(() => getTimeBasedGradient());

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.3;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x > this.canvasWidth) this.x = 0;
    if (this.x < 0) this.x = this.canvasWidth;
    if (this.y > this.canvasHeight) this.y = 0;
    if (this.y < 0) this.y = this.canvasHeight;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const initCanvas = () => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;

  // Create particles
  const particleCount = Math.floor(
    (canvas.value.width * canvas.value.height) / 15000
  );
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas.value.width, canvas.value.height));
  }
};

const animate = () => {
  if (!ctx || !canvas.value) return;

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw(ctx);
  });

  // Draw connections between nearby particles
  particles.forEach((particle, i) => {
    particles.slice(i + 1).forEach((otherParticle) => {
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    });
  });

  animationId = requestAnimationFrame(animate);
};

const handleResize = () => {
  initCanvas();
};

onMounted(() => {
  initCanvas();
  animate();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  window.removeEventListener("resize", handleResize);
});
</script>
