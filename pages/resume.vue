<template>
  <div
    class="resume-page min-h-screen bg-[#f4f1e8] pb-16 print:bg-white print:pb-0"
  >
    <!-- Profile Section -->
    <section
      class="resume-header px-6 pb-14 pt-32 text-white print:bg-white print:px-0 print:pb-4 print:pt-12 print:text-black"
    >
      <div class="mx-auto flex w-full max-w-5xl gap-5 sm:items-end sm:gap-8">
        <NuxtImg
          provider="storyblok"
          src="https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg"
          alt="Thomas Cober"
          width="128"
          height="128"
          :modifiers="{ quality: 80 }"
          format="webp"
          class="resume-photo h-24 w-24 flex-shrink-0 object-cover sm:h-32 sm:w-32 print:h-24 print:w-24 print:rounded-full print:border-black"
        />
        <div class="min-w-0 flex-1">
          <h1 class="resume-name font-bold">Thomas Cober</h1>
          <p class="mt-2 text-base font-bold sm:text-xl print:mt-0">
            Senior JavaScript Engineer
          </p>
          <div
            class="mt-2 flex flex-col text-sm text-white/75 sm:flex-row sm:gap-8 print:mt-0 print:text-black"
          >
            <p>tcober5@gmail.com</p>
            <p>thomascober.com</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main
      class="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-3 md:py-20 print:grid-cols-3 print:gap-12 print:py-0"
    >
      <!-- Left Column (2/3) -->
      <div class="space-y-8 md:col-span-2 print:col-span-2 print:space-y-4">
        <!-- Experience -->
        <section>
          <h2
            class="section-heading mb-6 border-b-2 border-blue-950 pb-3 text-3xl font-bold text-blue-950 print:mb-2 print:border-black print:pb-2 print:text-lg print:text-black"
          >
            Experience
          </h2>
          <div class="space-y-6 print:space-y-4">
            <article
              v-for="exp in experiences"
              :key="exp.company"
              class="experience-item border-l-2 border-blue-900/20 pl-4 print:border-0 print:pl-0"
            >
              <div class="flex justify-between items-start mb-2 print:mb-1">
                <div>
                  <h3
                    class="text-lg print:text-base font-bold text-black leading-tight mb-1"
                  >
                    {{ exp.company }}
                  </h3>
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
          <h2
            class="section-heading mb-6 border-b-2 border-blue-950 pb-3 text-3xl font-bold text-blue-950 print:mb-2 print:border-black print:pb-2 print:text-lg print:text-black"
          >
            Education
          </h2>
          <div class="space-y-4">
            <article v-for="edu in education" :key="edu.school">
              <div class="mb-1 flex items-baseline justify-between">
                <h3
                  class="text-lg print:text-base font-bold text-black leading-tight"
                >
                  {{ edu.school }}
                </h3>
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
      <div class="space-y-6 md:col-span-1 print:col-span-1">
        <!-- Core Skills -->
        <section>
          <h2
            class="skills-heading mb-6 bg-blue-950 px-4 py-3 text-2xl font-bold text-white [print-color-adjust:exact] md:mt-[3.35rem] print:mb-4 print:mt-[2.3rem] print:bg-black print:px-2 print:py-1"
          >
            Core Skills
          </h2>
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
.resume-header {
  background-color: var(--color-bg-dark);
}

.resume-photo {
  border: 2px solid white;
  border-radius: 50%;
  filter: grayscale(1) contrast(1.08);
}

.resume-name,
.section-heading,
.skills-heading {
  font-family: Georgia, "Times New Roman", serif;
  letter-spacing: 0;
}

.resume-name {
  font-size: clamp(2.6rem, 7vw, 5.75rem);
  line-height: 0.85;
}

.skills-heading {
  box-shadow: none;
}

@page {
  margin: 0;
  padding: 0;
}

@media print {
  .resume-header {
    background: white;
  }

  .resume-photo {
    filter: none;
  }

  .resume-name {
    font-family: inherit;
    font-size: 2.25rem;
    line-height: 1;
  }

  .section-heading,
  .skills-heading {
    font-family: inherit;
    box-shadow: none;
  }

  @page {
    margin: -0.2in 0.2in -0.1in 0.2in;
  }
}
</style>
