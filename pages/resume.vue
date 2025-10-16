<template>
  <div
    class="resume-wrapper min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-8 relative overflow-hidden"
  >
    <!-- Floating background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <!-- Meta Connect-inspired header -->
      <header class="text-center mb-12 print:hidden">
        <div class="mb-8">
          <h1
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent mb-4 leading-tight"
          >
            Resume
          </h1>
          <div
            class="w-20 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 mx-auto rounded-full shadow-lg shadow-blue-500/30"
          ></div>
        </div>

        <div class="flex justify-center gap-6">
          <button
            class="group px-8 py-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-400/20 rounded-2xl backdrop-blur-sm hover:from-blue-500/20 hover:to-blue-600/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-105"
          >
            <div class="flex items-center text-blue-200 font-medium">
              <svg
                class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              Download PDF
            </div>
          </button>
          <button
            @click="handlePrint"
            class="group px-8 py-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-400/20 rounded-2xl backdrop-blur-sm hover:from-green-500/20 hover:to-green-600/20 hover:border-green-400/40 transition-all duration-300 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 hover:scale-105"
          >
            <div class="flex items-center text-green-200 font-medium">
              <svg
                class="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Resume
            </div>
          </button>
        </div>
      </header>

      <!-- Meta Connect-inspired main card -->
      <main
        class="resume-card bg-gradient-to-br from-slate-800/40 via-slate-700/40 to-slate-600/40 backdrop-blur-xl rounded-3xl border border-slate-600/30 shadow-2xl shadow-blue-500/5 p-6 lg:p-10"
      >
        <!-- Hero profile section -->
        <header
          class="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 mb-8 lg:mb-12 pb-6 lg:pb-10 border-b border-slate-500/20"
        >
          <div class="flex-shrink-0">
            <div class="relative">
              <img
                src="https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg"
                alt="Thomas Cober Profile Picture"
                class="w-32 h-32 rounded-2xl border-2 border-blue-400/30 shadow-xl shadow-blue-500/20 object-cover"
              />
              <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-green-500/10"
              ></div>
            </div>
          </div>

          <div class="flex-1 text-center lg:text-left space-y-4">
            <div>
              <h1
                class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-green-300 to-yellow-300 bg-clip-text text-transparent mb-3"
              >
                Thomas Cober
              </h1>
              <div
                class="flex items-center justify-center lg:justify-start gap-3 mb-4"
              >
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <h2
                  class="text-xl lg:text-2xl text-slate-200 font-medium tracking-wide"
                >
                  Senior JavaScript Engineer
                </h2>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div
                class="flex items-center justify-center lg:justify-start gap-2 p-3 bg-slate-700/30 rounded-xl border border-slate-600/20"
              >
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-slate-200">tcober5@gmail.com</span>
              </div>
              <div
                class="flex items-center justify-center lg:justify-start gap-2 p-3 bg-slate-700/30 rounded-xl border border-slate-600/20"
              >
                <svg
                  class="w-4 h-4 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span class="text-slate-200">thomascober.com</span>
              </div>
              <div
                class="flex items-center justify-center lg:justify-start gap-2 p-3 bg-slate-700/30 rounded-xl border border-slate-600/20"
              >
                <svg
                  class="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="text-slate-200">Minneapolis, MN</span>
              </div>
            </div>
          </div>
        </header>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <!-- Experience Column (2/3 width) -->
          <div class="xl:col-span-2 space-y-8">
            <!-- Experience Section -->
            <section class="resume-section">
              <div class="flex items-center gap-4 mb-8">
                <div
                  class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl border border-blue-400/20 shadow-lg shadow-blue-500/10"
                >
                  <svg
                    class="w-6 h-6 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-white">Experience</h3>
                  <div
                    class="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 shadow-lg shadow-blue-500/30"
                  ></div>
                </div>
              </div>

              <!-- RBC -->
              <article
                class="resume-entry group p-6 bg-gradient-to-br from-slate-700/20 to-slate-600/20 rounded-2xl border border-slate-600/30 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div
                  class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4"
                >
                  <div class="flex-1">
                    <h4
                      class="text-xl font-bold bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-1"
                    >
                      RBC — Royal Bank of Canada
                    </h4>
                    <p class="text-green-400 font-semibold text-base mb-2">
                      Senior Developer, Wealth Management Digital
                    </p>
                  </div>
                  <div
                    class="flex items-center gap-2 px-3 py-1 bg-slate-600/40 rounded-full border border-slate-500/30"
                  >
                    <div
                      class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    ></div>
                    <span class="text-sm text-slate-300 font-medium"
                      >02/2020 – Present</span
                    >
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div
                      class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-sm text-slate-200 leading-relaxed">
                      Led Vue component library and design system adoption
                      across 8+ product squads, improving delivery consistency
                    </p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-sm text-slate-200 leading-relaxed">
                      Joined Enterprise AI Instructor team to guide developers
                      on GitHub Copilot and OpenAI Codex workflows, improving
                      code velocity across teams
                    </p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-sm text-slate-200 leading-relaxed">
                      Partnered with Node.js backend teams to optimize API
                      integrations and reduce payload sizes
                    </p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div
                      class="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-sm text-slate-200 leading-relaxed">
                      Embedded accessibility checks and automated tests into
                      CI/CD, preventing regressions at scale
                    </p>
                  </div>
                </div>
              </article>

              <!-- SDG -->
              <article class="resume-entry mb-4 last:mb-0">
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                >
                  <h4 class="font-bold text-base text-blue-300">
                    Solution Design Group (SDG)
                  </h4>
                  <span class="text-sm text-slate-400 italic"
                    >05/2018 – 09/2019</span
                  >
                </div>
                <p class="text-green-300 font-semibold text-sm mb-2">
                  Contract Front-End Developer
                </p>
                <ul class="text-sm text-slate-200 list-disc pl-5 space-y-1">
                  <li>
                    Built responsive Angular/Vue apps supporting millions in
                    annual transactions
                  </li>
                  <li>
                    Optimized CSS/JS bundles improving Lighthouse scores and
                    performance
                  </li>
                </ul>
              </article>

              <!-- Earlier Experience -->
              <article class="resume-entry mb-3">
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                >
                  <h4 class="font-bold text-base text-blue-300">
                    Pediatric Home Service
                  </h4>
                  <span class="text-sm text-slate-400 italic"
                    >04/2017 – 05/2018</span
                  >
                </div>
                <p class="text-green-300 font-semibold text-sm mb-1">
                  Front-End Developer
                </p>
                <p class="text-sm text-slate-200">
                  Built ADA-compliant ecommerce platform for medical supply
                  ordering and WordPress marketing sites.
                </p>
              </article>

              <article class="resume-entry mb-3">
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                >
                  <h4 class="font-bold text-base text-blue-300">
                    Iron Horse Interactive
                  </h4>
                  <span class="text-sm text-slate-400 italic"
                    >10/2016 – 04/2017</span
                  >
                </div>
                <p class="text-green-300 font-semibold text-sm mb-1">
                  Front-End Developer
                </p>
                <p class="text-sm text-slate-200">
                  Created modular landing pages and analytics integrations for
                  VR/AR marketing campaigns.
                </p>
              </article>

              <article class="resume-entry">
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                >
                  <h4 class="font-bold text-base text-blue-300">Lytics</h4>
                  <span class="text-sm text-slate-400 italic"
                    >10/2015 – 09/2016</span
                  >
                </div>
                <p class="text-green-300 font-semibold text-sm mb-1">
                  Junior Developer
                </p>
                <p class="text-sm text-slate-200">
                  Built marketing microsites and automated content workflows for
                  customer data platform startup.
                </p>
              </article>
            </section>

            <!-- Education Section -->
            <section class="resume-section">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-white mb-2">Education</h3>
                <div
                  class="w-16 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"
                ></div>
              </div>

              <div class="space-y-4">
                <article>
                  <div
                    class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                  >
                    <h4 class="font-bold text-lg text-blue-300">
                      Portland State University
                    </h4>
                    <span class="text-sm text-slate-400 italic"
                      >09/2010 – 06/2013</span
                    >
                  </div>
                  <p class="text-sm text-slate-200">
                    B.S. Graphic &amp; Interactive Design
                  </p>
                </article>

                <article>
                  <div
                    class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                  >
                    <h4 class="font-bold text-lg text-blue-300">
                      Kishwaukee Community College
                    </h4>
                    <span class="text-sm text-slate-400 italic"
                      >09/2008 – 06/2009</span
                    >
                  </div>
                  <p class="text-sm text-slate-200">A.A. General Studies</p>
                </article>
              </div>
            </section>
          </div>

          <!-- Right Column - Skills (1/3 width) -->
          <div class="xl:col-span-1 space-y-8">
            <section class="resume-section">
              <div
                class="bg-gradient-to-br from-slate-800/30 via-slate-700/30 to-slate-600/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-6"
              >
                <div class="flex items-center gap-3 mb-6">
                  <div
                    class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-xl border border-yellow-400/20"
                  >
                    <svg
                      class="w-5 h-5 text-yellow-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">Core Skills</h3>
                    <div
                      class="w-16 h-0.5 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full mt-1"
                    ></div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div
                    class="p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <span class="text-blue-300 font-semibold text-sm"
                      >Front-end:</span
                    >
                    <p class="text-slate-200 text-sm mt-1">
                      Vue 3, Nuxt, React, Angular, TypeScript, JavaScript
                      (ES6+), HTML5, CSS3/Sass
                    </p>
                  </div>
                  <div
                    class="p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <span class="text-green-300 font-semibold text-sm"
                      >Back-end:</span
                    >
                    <p class="text-slate-200 text-sm mt-1">
                      Node.js, Express, GraphQL, REST APIs, serverless functions
                    </p>
                  </div>
                  <div
                    class="p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <span class="text-yellow-300 font-semibold text-sm"
                      >Tooling:</span
                    >
                    <p class="text-slate-200 text-sm mt-1">
                      Jest, Cypress, Vitest, Storybook, Webpack/Vite, GitHub
                      Actions, GitLab CI/CD
                    </p>
                  </div>
                  <div
                    class="p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <span class="text-blue-300 font-semibold text-sm"
                      >AI Tools:</span
                    >
                    <p class="text-slate-200 text-sm mt-1">
                      GitHub Copilot, OpenAI Codex, AI-assisted development
                      workflows
                    </p>
                  </div>
                  <div
                    class="p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <span class="text-green-300 font-semibold text-sm"
                      >Practices:</span
                    >
                    <p class="text-slate-200 text-sm mt-1">
                      Accessibility (WCAG 2.1), design systems, performance
                      tuning, automated testing, UX collaboration
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section class="resume-section">
              <div
                class="bg-gradient-to-br from-slate-800/30 via-slate-700/30 to-slate-600/30 backdrop-blur-sm border border-slate-600/20 rounded-2xl p-6"
              >
                <div class="flex items-center gap-3 mb-6">
                  <div
                    class="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/20"
                  >
                    <svg
                      class="w-5 h-5 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white">
                      Key Achievements
                    </h3>
                    <div
                      class="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1"
                    ></div>
                  </div>
                </div>

                <div class="space-y-3">
                  <div
                    class="flex items-start gap-3 p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <div
                      class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-slate-200 text-sm">
                      Cut front-end QA cycles in half with Storybook-driven
                      development
                    </p>
                  </div>
                  <div
                    class="flex items-start gap-3 p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <div
                      class="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-slate-200 text-sm">
                      Lead accessibility audits and inclusive design practices
                    </p>
                  </div>
                  <div
                    class="flex items-start gap-3 p-3 bg-slate-700/20 rounded-xl border border-slate-600/20"
                  >
                    <div
                      class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"
                    ></div>
                    <p class="text-slate-200 text-sm">
                      Translate user insights into roadmap-ready product
                      features
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: "Resume - Thomas Cober",
  description:
    "Senior Javascript Engineer with expertise in Vue, Node.js, and full-stack development.",
  ogTitle: "Resume - Thomas Cober",
  ogDescription:
    "Senior Javascript Engineer with expertise in Vue, Node.js, and full-stack development.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

// Print functionality
const handlePrint = () => {
  window.print();
};
</script>

<style scoped>
/* Print styles */
@media print {
  /* Hide ALL web-only elements aggressively */
  .print\:hidden,
  button,
  nav,
  .fixed,
  .absolute,
  [class*="fixed"],
  [class*="absolute"],
  [aria-label="Toggle Menu"],
  header.text-center,
  .resume-wrapper > .max-w-5xl > header,
  .resume-wrapper > .absolute,
  .resume-wrapper .absolute,
  body > div > button,
  html button,
  * button,
  footer,
  .footer,
  [class*="footer"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }

  /* Ensure only the main resume card shows */
  .resume-wrapper {
    position: static !important;
    overflow: visible !important;
  }

  .resume-wrapper * {
    position: static !important;
  }

  .resume-wrapper .resume-card {
    position: static !important;
    z-index: auto !important;
  }

  /* Page setup */
  @page {
    size: letter;
    margin: 0.3in 0.4in;
  }

  /* Reset backgrounds and effects */
  body,
  .resume-wrapper {
    background: white !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .resume-wrapper .max-w-5xl {
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .resume-card {
    background: white !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
    page-break-inside: avoid;
  }

  /* Clean up glassmorphism effects */
  .resume-card .backdrop-blur-xl,
  .resume-card .backdrop-blur-sm,
  .resume-card [class*="backdrop-blur"] {
    backdrop-filter: none !important;
    background: white !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    padding: 0 !important;
  }

  /* Typography hierarchy */
  .resume-card h1 {
    font-size: 18pt !important;
    color: #1f2937 !important;
    margin-bottom: 4pt !important;
    font-weight: bold !important;
  }

  .resume-card h2 {
    font-size: 12pt !important;
    color: #374151 !important;
    margin-bottom: 6pt !important;
    font-weight: 600 !important;
  }

  .resume-card h3 {
    font-size: 11pt !important;
    color: #1f2937 !important;
    margin-bottom: 4pt !important;
    font-weight: bold !important;
  }

  .resume-card h4 {
    font-size: 10pt !important;
    color: #1f2937 !important;
    margin-bottom: 2pt !important;
    font-weight: bold !important;
  }

  .resume-card p,
  .resume-card li,
  .resume-card span {
    font-size: 9pt !important;
    line-height: 1.3 !important;
    color: #374151 !important;
  }

  /* Layout grid - main content grid */
  .resume-card > .grid.grid-cols-1.xl\:grid-cols-3 {
    display: grid !important;
    grid-template-columns: 2fr 1fr !important;
    gap: 16pt !important;
    margin-top: 0 !important;
  }

  .resume-card .xl\:col-span-2 {
    grid-column: 1 !important;
  }

  .resume-card .xl\:col-span-1 {
    grid-column: 2 !important;
  }

  /* Other grids (keep as flex for contact info, etc.) */
  .resume-card .grid:not(.grid-cols-1):not(.xl\:grid-cols-3) {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8pt !important;
  }

  /* Proper side-by-side header layout for print */
  .resume-card > header {
    margin: 0 !important;
    padding: 6pt 0 8pt 0 !important;
    border-bottom: 1pt solid #d1d5db !important;
    background: white !important;
    display: table !important;
    width: 100% !important;
  }

  /* Image section - left side */
  .resume-card header .flex-shrink-0 {
    display: table-cell !important;
    vertical-align: top !important;
    width: 70pt !important;
    padding-right: 12pt !important;
    padding-top: 2pt !important;
  }

  .resume-card header img {
    width: 56pt !important;
    height: 56pt !important;
    border: 1pt solid #374151 !important;
    border-radius: 6pt !important;
    display: block !important;
  }

  /* Hide image overlay */
  .resume-card header .absolute {
    display: none !important;
  }

  /* Text section - right side */
  .resume-card header .flex-1 {
    display: table-cell !important;
    vertical-align: middle !important;
    width: auto !important;
    text-align: left !important;
  }

  /* Force left alignment for all header text */
  .resume-card header .flex-1 * {
    text-align: left !important;
  }

  /* Clean header text */
  .resume-card header h1 {
    color: #1f2937 !important;
    background: none !important;
    -webkit-background-clip: initial !important;
    background-clip: initial !important;
    -webkit-text-fill-color: #1f2937 !important;
    margin: 0 0 2pt 0 !important;
    font-size: 18pt !important;
    font-weight: bold !important;
    text-align: left !important;
    line-height: 1.1 !important;
  }

  .resume-card header h2 {
    color: #374151 !important;
    margin: 0 0 6pt 0 !important;
    font-size: 12pt !important;
    text-align: left !important;
    line-height: 1.2 !important;
  }

  /* Hide animated dot and center alignment */
  .resume-card header .animate-pulse,
  .resume-card header .justify-center {
    display: none !important;
  }

  .resume-card header .flex.items-center {
    display: block !important;
    text-align: left !important;
  }

  /* Contact info as cards like web version */
  .resume-card header .grid {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 4pt !important;
    margin-top: 0 !important;
    text-align: left !important;
  }

  .resume-card header .grid > div {
    display: inline-flex !important;
    align-items: center !important;
    background: #f8fafc !important;
    border: 1pt solid #e2e8f0 !important;
    border-radius: 4pt !important;
    padding: 4pt 8pt !important;
    margin: 0 !important;
    font-size: 8pt !important;
    color: #374151 !important;
    text-align: left !important;
  }

  /* Hide icons in contact cards for print */
  .resume-card header .grid > div svg {
    display: none !important;
  }

  /* Section spacing */
  .resume-card .space-y-8 > :not([hidden]) ~ :not([hidden]),
  .resume-card .space-y-10 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 12pt !important;
  }

  .resume-card .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 6pt !important;
  }

  .resume-card .space-y-3 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 4pt !important;
  }

  /* Section headers with icons */
  .resume-card .resume-section > .flex.items-center {
    margin-bottom: 8pt !important;
    padding-bottom: 4pt !important;
    border-bottom: 1pt solid #e5e7eb !important;
  }

  .resume-card .resume-section > .flex.items-center h2 {
    color: #1f2937 !important;
    font-size: 11pt !important;
    font-weight: bold !important;
  }

  /* Resume entries */
  .resume-card .resume-entry {
    margin-bottom: 8pt !important;
    padding: 6pt !important;
    background: #fafafa !important;
    border: 1pt solid #e5e7eb !important;
    border-radius: 4pt !important;
    page-break-inside: avoid;
  }

  .resume-card .resume-entry:hover {
    transform: none !important;
    box-shadow: none !important;
    background: #fafafa !important;
  }

  /* Entry headers */
  .resume-card .resume-entry .flex.items-start h3 {
    color: #1f2937 !important;
    font-size: 10pt !important;
    font-weight: bold !important;
    margin-bottom: 2pt !important;
  }

  .resume-card .resume-entry .text-slate-400 {
    color: #6b7280 !important;
    font-size: 8pt !important;
  }

  /* Right column cards */
  .resume-card .xl\:col-span-1 .resume-section > div[class*="bg-gradient"] {
    background: #f8fafc !important;
    border: 1pt solid #e2e8f0 !important;
    border-radius: 6pt !important;
    padding: 8pt !important;
    margin-bottom: 6pt !important;
  }

  .resume-card .xl\:col-span-1 .resume-section h2 {
    color: #1e293b !important;
    font-size: 10pt !important;
    font-weight: bold !important;
    margin-bottom: 6pt !important;
  }

  .resume-card .xl\:col-span-1 .resume-section > div > div[class*="bg-slate"] {
    background: #f1f5f9 !important;
    border: 1pt solid #e2e8f0 !important;
    border-radius: 3pt !important;
    padding: 4pt 6pt !important;
    margin-bottom: 3pt !important;
    display: inline-block !important;
    margin-right: 4pt !important;
  }

  .resume-card .xl\:col-span-1 .resume-section li {
    font-size: 8pt !important;
    margin-bottom: 2pt !important;
    list-style-type: disc !important;
    margin-left: 12pt !important;
  }

  /* Hide decorative elements */
  .resume-card .w-16,
  .resume-card .w-12,
  .resume-card .w-20,
  .resume-card [class*="w-"] [class*="h-1"],
  .resume-card [class*="animate-"],
  .resume-card svg {
    display: none !important;
  }

  /* Clean up margins and padding */
  .resume-card .mb-8,
  .resume-card .mb-6 {
    margin-bottom: 8pt !important;
  }

  .resume-card .mb-4,
  .resume-card .mb-3 {
    margin-bottom: 4pt !important;
  }

  .resume-card .mb-2,
  .resume-card .mb-1 {
    margin-bottom: 2pt !important;
  }

  .resume-card .p-8,
  .resume-card .p-6,
  .resume-card .p-4,
  .resume-card .p-3 {
    padding: 4pt !important;
  }

  /* Color overrides */
  .resume-card .text-slate-200,
  .resume-card .text-slate-300,
  .resume-card .text-slate-400,
  .resume-card .text-blue-300,
  .resume-card .text-green-300,
  .resume-card .text-yellow-300,
  .resume-card .text-blue-200,
  .resume-card .text-green-200 {
    color: #374151 !important;
  }

  .resume-card .text-white {
    color: #1f2937 !important;
  }

  /* Remove all gradients and effects */
  .resume-card [class*="bg-gradient"],
  .resume-card [class*="from-"],
  .resume-card [class*="to-"],
  .resume-card [class*="via-"] {
    background: white !important;
  }

  /* Ensure readable contrast */
  .resume-card * {
    text-shadow: none !important;
    box-shadow: none !important;
  }
}
</style>
