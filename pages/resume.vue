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
          class="w-32 h-32 sm:w-24 sm:h-24 rounded-full border-2 border-black object-cover flex-shrink-0"
        />
        <div class="text-black flex-1 mt-1">
          <h2 class="text-2xl sm:text-4xl font-bold">Thomas Cober</h2>
          <p class="text-base sm:text-xl font-semibold">
            Senior JavaScript Engineer
          </p>
          <div class="flex flex-col sm:flex-row sm:gap-8 text-sm">
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
        <div class="md:col-span-2 print:col-span-2 space-y-4">
          <!-- Experience -->
          <section>
            <h3
              class="text-2xl print:text-lg font-bold text-black mb-2 pb-2 border-b-2 border-black"
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
              class="text-2xl print:text-lg font-bold text-black mb-2 pb-2 border-b-2 border-black"
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
          <section>
            <h3
              class="text-2xl font-bold text-white bg-black mb-4 px-2 py-1 [print-color-adjust:exact] mt-[2.3rem]"
            >
              Core Skills
            </h3>
            <div class="space-y-4 text-base print:text-base">
              <div>
                <p class="font-semibold text-black text-xl mb-2">Front-end</p>
                <ul class="text-gray-800 list-none p-0 m-0 space-y-1">
                  <li>Vue 3 / Nuxt</li>
                  <li>Angular</li>
                  <li>Javascript / TypeScript</li>
                  <li>HTML / Markdown</li>
                  <li>Tailwind / CSS</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-black text-xl mb-2">Back-end</p>
                <ul class="text-gray-800 list-none p-0 m-0 space-y-1">
                  <li>Node.js</li>
                  <li>Loopback</li>
                  <li>Express</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-black text-xl mb-2">Tooling</p>
                <ul class="text-gray-800 list-none p-0 m-0 space-y-1">
                  <li>Jest / Vitest</li>
                  <li>Storybook</li>
                  <li>Vite / Webpack</li>
                  <li>GitHub Actions</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-black text-xl mb-2">AI / LLM</p>
                <ul class="text-gray-800 list-none p-0 m-0 space-y-1">
                  <li>GitHub Copilot / Claude Code</li>
                  <li>Agents / Subagents</li>
                  <li>Workflows</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-black text-xl mb-2">Practices</p>
                <ul class="text-gray-800 list-none p-0 m-0 space-y-1">
                  <li>Accessibility</li>
                  <li>Design systems</li>
                  <li>Performance tuning</li>
                  <li>UX collaboration</li>
                </ul>
              </div>
            </div>
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
      "Helped roll out our Vue component library and design system.",
      "Helped create a mock service system that let QE test even when backend services were down.",
      "Taught developers practical GitHub Copilot workflow skills as part of the Enterprise AI Instructor group.",
      "Developed LLM agents for identifying high quality tests to improve developer experience.",
      "Created endpoints in our Node back end.",
      "Wrote extensive unit tests.",
    ],
  },
  {
    company: "Solution Design Group (SDG)",
    title: "Contract Front-End Developer",
    period: "05/2018 – 09/2019",
    points: [
      "At Cargill, helped build a commodity trading app in Angular.",
      "At NYU, built the full Vue front end for their teacher/student communication system.",
    ],
  },
  {
    company: "Pediatric Home Service",
    title: "Front-End Developer",
    period: "04/2017 – 05/2018",
    description:
      "Built an ADA compliant ecommerce platform and maintained fast, accessible WordPress marketing sites.",
  },
  {
    company: "Iron Horse Interactive",
    title: "Front-End Developer",
    period: "10/2016 – 04/2017",
    description:
      "Developed modular landing pages and analytics integrations for VR/AR marketing sites.",
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
