<template>
  <div class="min-h-screen bg-white pb-12 pt-24 print:pb-0 print:pt-12">
    <div class="max-w-5xl mx-auto px-6">
      <!-- Profile Section -->
      <section class="w-full flex sm:flex-row gap-4 sm:gap-6 mb-4">
        <NuxtImg
          provider="storyblok"
          src="https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg"
          alt="Thomas Cober"
          width="128"
          height="128"
          :modifiers="{ quality: 80 }"
          format="webp"
          class="w-32 h-32 sm:w-24 sm:h-24 rounded border-2 border-black object-cover flex-shrink-0"
        />
        <div class="text-black flex-1">
          <h2 class="text-2xl sm:text-4xl font-bold">Thomas Cober</h2>
          <p class="text-base sm:text-xl font-semibold leading-tight mb-1">
            Senior JavaScript Engineer
          </p>
          <div class="flex flex-col sm:flex-row sm:gap-8 text-sm leading-tight">
            <p>tcober5@gmail.com</p>
            <p>thomascober.com</p>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main
        class="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8 md:gap-12"
      >
        <!-- Left Column (2/3) -->
        <div class="md:col-span-2 print:col-span-2 space-y-8">
          <!-- Experience -->
          <section>
            <h3
              class="text-2xl print:text-lg font-bold text-black mb-6 pb-2 border-b-2 border-black"
            >
              Experience
            </h3>
            <div class="space-y-6 print:space-y-4">
              <article v-for="exp in experiences" :key="exp.company">
                <div class="flex justify-between items-start mb-2 print:mb-1">
                  <div>
                    <h4
                      class="text-lg print:text-base font-bold text-black leading-tight mb-1"
                    >
                      {{ exp.company }}
                    </h4>
                    <p class="font-semibold text-black print:text-sm">
                      {{ exp.title }}
                    </p>
                  </div>
                  <span
                    class="text-sm print:text-xs text-gray-700 italic text-nowrap"
                  >
                    {{ exp.period }}
                  </span>
                </div>
                <ul
                  v-if="exp.points"
                  class="text-sm print:text-xs text-gray-800 space-y-1 list-disc pl-5"
                >
                  <li v-for="(point, idx) in exp.points" :key="idx">
                    {{ point }}
                  </li>
                </ul>
                <p v-else class="text-sm print:text-xs text-gray-800">
                  {{ exp.description }}
                </p>
              </article>
            </div>
          </section>

          <!-- Education -->
          <section>
            <h3
              class="text-2xl print:text-xl font-bold text-black mb-6 pb-2 border-b-2 border-black"
            >
              Education
            </h3>
            <div class="space-y-4">
              <article v-for="edu in education" :key="edu.school">
                <div
                  class="flex justify-between items-start mb-1 items-baseline"
                >
                  <h4
                    class="text-lg print:text-base font-bold text-black leading-tight"
                  >
                    {{ edu.school }}
                  </h4>
                  <span
                    class="text-sm print:text-xs text-gray-700 italic text-nowrap"
                  >
                    {{ edu.period }}
                  </span>
                </div>
                <p class="text-sm print:text-xs text-gray-800">
                  {{ edu.degree }}
                </p>
              </article>
            </div>
          </section>
        </div>

        <!-- Right Column (1/3) -->
        <div class="md:col-span-1 print:col-span-1 space-y-6">
          <!-- Core Skills -->
          <section class="border-2 border-black p-4">
            <h3
              class="text-lg print:text-base font-bold text-black mb-4 pb-2 border-b border-black"
            >
              Core Skills
            </h3>
            <div class="space-y-3 text-sm print:text-xs">
              <div>
                <p class="font-semibold text-black">Front-end:</p>
                <p class="text-gray-800">
                  Vue 3, Nuxt, Angular, React, TypeScript, JavaScript (ES6+),
                  HTML5, Tailwind
                </p>
              </div>
              <div>
                <p class="font-semibold text-black">Back-end:</p>
                <p class="text-gray-800">
                  Node.js, Loopback, Express, REST APIs, serverless functions
                </p>
              </div>
              <div>
                <p class="font-semibold text-black">Tooling:</p>
                <p class="text-gray-800">
                  Jest, Vitest, Storybook, Webpack/Vite, GitHub Actions
                </p>
              </div>
              <div>
                <p class="font-semibold text-black">AI Tools:</p>
                <p class="text-gray-800">
                  GitHub Copilot, AI-assisted development workflows, Custom
                  instruction writing/generation
                </p>
              </div>
              <div>
                <p class="font-semibold text-black">Practices:</p>
                <p class="text-gray-800">
                  Accessibility (WCAG 2.1), design systems, performance tuning,
                  automated testing, UX collaboration
                </p>
              </div>
            </div>
          </section>

          <!-- Key Achievements -->
          <section class="border-2 border-black p-4">
            <h3
              class="text-lg print:text-base font-bold text-black mb-4 pb-2 border-b border-black"
            >
              Key Achievements
            </h3>
            <ul
              class="space-y-2 text-sm print:text-xs text-gray-800 list-disc pl-5"
            >
              <li>
                Helped build a mock service system that let QE test even when
                backend services were down.
              </li>
              <li>
                Performed regular accessibility checks to help ship
                WCAG‑friendly interfaces.
              </li>
              <li>
                Taught 100+ developers how to use GitHub Copilot and AI tools
                effectively.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Thomas Cober's Resume",
  description:
    "Senior JavaScript Engineer with expertise in Vue, Node.js, and full-stack development.",
  ogTitle: "Resume - Thomas Cober",
  ogDescription:
    "Senior JavaScript Engineer with expertise in Vue, Node.js, and full-stack development.",
  ogType: "website",
  twitterImage:
    "https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg",
  twitterCard: "summary_large_image",
});

const experiences = [
  {
    company: "RBC — Royal Bank of Canada",
    title: "Senior Software Engineer, Wealth Management Digital",
    period: "02/2020 – Present",
    points: [
      "Helped roll out our Vue component library and design system across multiple squads for more consistent UI.",
      "Taught developers practical GitHub Copilot and AI‑workflow skills as part of the Enterprise AI Instructor group.",
      "Contributed to the Node.js mid‑tier, improving API logic, data handling, and payload efficiency.",
      "Wrote extensive unit tests that run in CI/CD, improving stability and catching regressions early.",
    ],
  },
  {
    company: "Solution Design Group (SDG)",
    title: "Contract Front-End Developer",
    period: "05/2018 – 09/2019",
    points: [
      "At Cargill, helped build a commodity trading app, contributing key Angular front‑end features.",
      "At NYU, built the full Vue front end for their teacher/student communication system.",
    ],
  },
  {
    company: "Pediatric Home Service",
    title: "Front-End Developer",
    period: "04/2017 – 05/2018",
    description:
      "Built an ADA‑compliant ecommerce platform and maintained fast, accessible WordPress marketing sites.",
  },
  {
    company: "Iron Horse Interactive",
    title: "Front-End Developer",
    period: "10/2016 – 04/2017",
    description:
      "Developed modular landing pages and analytics integrations for VR/AR marketing.",
  },
  {
    company: "Lytics",
    title: "Junior Developer",
    period: "10/2015 – 09/2016",
    description:
      "Built marketing microsites, automated content workflows, and simple reusable UI components.",
  },
];

const education = [
  {
    school: "Portland State University",
    degree: "B.S. Graphic & Interactive Design",
    period: "09/2010 – 06/2013",
  },
  {
    school: "Kishwaukee Community College",
    degree: "A.A. General Studies",
    period: "09/2008 – 06/2009",
  },
];
</script>

<style scoped>
@page {
  margin: 0;
  padding: 0;
}

@media print {
  @page {
    margin: -0.2in 0.2in -0.1in 0.2in;
  }
}
</style>
