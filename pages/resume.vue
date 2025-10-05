<template>
  <div
    class="resume-wrapper min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16"
  >
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header with Gradient Theme -->
      <header class="text-center mb-8 print:hidden">
        <h1
          class="text-3xl md:text-4xl font-display bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          Resume
        </h1>
        <div class="flex justify-center space-x-4 mb-6">
          <button
            class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-400 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/30"
          >
            <svg
              class="w-4 h-4 mr-2"
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
          </button>
          <button
            @click="handlePrint"
            class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-medium hover:from-green-400 hover:to-green-600 transition-all duration-200 shadow-lg shadow-green-500/30"
          >
            <svg
              class="w-4 h-4 mr-2"
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
            Print
          </button>
        </div>
      </header>

      <!-- Resume Content -->
      <main
        class="resume-card bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-700 p-8"
      >
        <!-- Header Section -->
        <header
          class="flex flex-col sm:flex-row justify-between sm:items-center mb-8 pb-8 border-b border-slate-600 gap-6"
        >
          <div class="profile-pic mb-5 sm:mb-0 sm:mr-6">
            <img
              src="https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg"
              alt="Thomas Cober Profile Picture"
              class="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30"
            />
          </div>
          <div
            class="flex-1 flex flex-col sm:flex-row sm:items-end justify-between w-full"
          >
            <div class="profile-header sm:mr-6 mb-3 sm:mb-0">
              <h1 class="text-3xl font-bold text-white mb-1">Thomas Cober</h1>
              <h2 class="text-xl text-blue-300">Senior JavaScript Engineer</h2>
            </div>
            <div class="text-slate-300 text-sm space-y-1 sm:text-right">
              <p>
                <span class="font-semibold text-slate-100">Email:</span>
                tcober5@gmail.com
              </p>
              <p>
                <span class="font-semibold text-slate-100">Portfolio:</span>
                thomascober.com
              </p>
              <p>
                <span class="font-semibold text-slate-100">Location:</span>
                Minneapolis, MN (Hybrid / Remote)
              </p>
            </div>
          </div>
        </header>

        <!-- Main Content -->
        <div class="flex flex-col-reverse gap-8 lg:flex-row">
          <!-- Left Column - Experience & Education -->
          <div
            class="lg:w-2/3 lg:border-r lg:border-slate-600 lg:pr-10 space-y-8"
          >
            <!-- Experience Section -->
            <section class="resume-section">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-white mb-2">Experience</h3>
                <div
                  class="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                ></div>
              </div>

              <!-- RBC -->
              <article class="resume-entry mb-4 last:mb-0">
                <div
                  class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
                >
                  <h4 class="font-bold text-base text-blue-300">
                    RBC — Royal Bank of Canada
                  </h4>
                  <span class="text-sm text-slate-400 italic"
                    >02/2020 – Present</span
                  >
                </div>
                <p class="text-green-300 font-semibold text-sm mb-2">
                  Senior Developer, Wealth Management Digital
                </p>
                <ul class="text-sm text-slate-200 list-disc pl-5 space-y-1">
                  <li>
                    Led Vue component library and design system adoption across
                    8+ product squads, improving delivery consistency
                  </li>
                  <li>
                    Joined Enterprise AI Instructor team to guide developers on GitHub Copilot
                    and OpenAI Codex workflows, improving code velocity across teams
                  </li>
                  <li>
                    Partnered with Node.js backend teams to optimize API
                    integrations and reduce payload sizes
                  </li>
                  <li>
                    Embedded accessibility checks and automated tests into
                    CI/CD, preventing regressions at scale
                  </li>
                </ul>
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

          <!-- Right Column - Skills -->
          <div class="lg:w-1/3 space-y-8">
            <section class="resume-section">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-white mb-2">Core Skills</h3>
                <div
                  class="w-16 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full"
                ></div>
              </div>
              <ul class="text-sm text-slate-200 space-y-3">
                <li>
                  <span class="text-slate-100 font-semibold">Front-end:</span>
                  Vue 3, Nuxt, React, Angular, TypeScript, JavaScript (ES6+),
                  HTML5, CSS3/Sass
                </li>
                <li>
                  <span class="text-slate-100 font-semibold">Back-end:</span>
                  Node.js, Express, GraphQL, REST APIs, serverless functions
                </li>
                <li>
                  <span class="text-slate-100 font-semibold">Tooling:</span>
                  Jest, Cypress, Vitest, Storybook, Webpack/Vite, GitHub
                  Actions, GitLab CI/CD
                </li>
                <li>
                  <span class="text-slate-100 font-semibold">AI Tools:</span>
                  GitHub Copilot, OpenAI Codex, AI-assisted development workflows
                </li>
                <li>
                  <span class="text-slate-100 font-semibold">Practices:</span>
                  Accessibility (WCAG 2.1 AA), design systems, performance
                  tuning, automated testing, UX collaboration
                </li>
              </ul>
            </section>

            <section class="resume-section">
              <div class="mb-4">
                <h3 class="text-xl font-bold text-white mb-2">
                  Key Achievements
                </h3>
                <div
                  class="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                ></div>
              </div>
              <ul class="text-sm text-slate-200 list-disc pl-5 space-y-1">
                <li>
                  Cut front-end QA cycles in half with Storybook-driven
                  development
                </li>
                <li>
                  Lead accessibility audits and inclusive design practices
                </li>
                <li>
                  Translate user insights into roadmap-ready product features
                </li>
              </ul>
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
  .print\:hidden {
    display: none !important;
  }

  body {
    background: white;
  }

  .resume-wrapper {
    background: white !important;
    padding: 0 !important;
  }

  .resume-card {
    background: white !important;
    border: none !important;
    box-shadow: none !important;
    color: #1f2937 !important;
    padding: 16px 20px !important;
    page-break-inside: avoid;
  }

  .resume-card > header {
    margin-bottom: 12px !important;
    padding-bottom: 8px !important;
  }

  .resume-card h1,
  .resume-card h2,
  .resume-card h3,
  .resume-card h4,
  .resume-card p,
  .resume-card li {
    color: #111827 !important;
  }

  .resume-card h1 {
    font-size: 16pt !important;
  }

  .resume-card h2 {
    font-size: 10pt !important;
  }

  .resume-card h3 {
    font-size: 9pt !important;
  }

  .resume-card h4 {
    font-size: 9.5pt !important;
  }

  .resume-card p,
  .resume-card li {
    font-size: 9.25pt !important;
    line-height: 1.35 !important;
  }

  .resume-card ul {
    margin-top: 0.3rem !important;
    padding-left: 1rem !important;
  }

  .resume-card .text-slate-200,
  .resume-card .text-slate-300,
  .resume-card .text-slate-400 {
    color: #4b5563 !important;
  }

  .resume-card .text-blue-300,
  .resume-card .text-green-300 {
    color: #1d4ed8 !important;
  }

  .resume-card .w-16 {
    display: none;
  }

  .resume-card .flex-col-reverse {
    display: grid !important;
    grid-template-columns: 2fr 1fr;
    gap: 16px !important;
  }

  .resume-card .lg\:border-r,
  .resume-card .lg\:pr-10 {
    border-right: none !important;
    padding-right: 20px !important;
  }

  .resume-card .lg\:w-2\/3,
  .resume-card .lg\:w-1\/3 {
    width: auto !important;
  }

  .resume-card .space-y-8 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 16px !important;
  }

  .resume-card .resume-section {
    margin-bottom: 16px !important;
  }

  .resume-card .resume-entry {
    margin-bottom: 8px !important;
    page-break-inside: avoid;
  }

  .resume-card .resume-entry ul {
    margin-top: 0.15rem !important;
  }

  .resume-card .resume-section {
    margin-bottom: 12px !important;
  }

  .resume-card .space-y-8 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 12px !important;
  }

  .resume-card .space-y-4 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 8px !important;
  }

  .resume-card .mb-6 {
    margin-bottom: 8px !important;
  }

  .resume-card .mb-4 {
    margin-bottom: 6px !important;
  }

  .resume-card .mb-3 {
    margin-bottom: 4px !important;
  }

  .resume-card .mb-2 {
    margin-bottom: 3px !important;
  }

  .resume-card p,
  .resume-card li {
    font-size: 8pt !important;
    line-height: 1.3 !important;
  }

  .resume-card h4 {
    font-size: 9pt !important;
  }

  .profile-pic img {
    border-width: 2px !important;
    height: 60px !important;
    width: 60px !important;
  }

  .resume-card .w-16 {
    width: 12px !important;
  }

  .resume-card .w-12 {
    width: 10px !important;
  }

  @page {
    size: letter;
    margin: 0.3in 0.4in;
  }
}
</style>
