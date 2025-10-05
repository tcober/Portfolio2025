<template>
  <div
    class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-16"
  >
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <header class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-display text-neutral-900 mb-4">
          Resume
        </h1>
        <p class="text-xl text-neutral-600 mb-8">
          My professional journey and experience
        </p>
        <div class="flex justify-center space-x-4">
          <button class="btn btn-primary">
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
          <button @click="handlePrint" class="btn btn-secondary">
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
      <div
        class="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8 animate-slide-up"
      >
        <!-- Personal Info -->
        <section class="mb-12">
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"
          >
            <div>
              <h2 class="text-3xl font-bold text-neutral-900 mb-2">
                Your Name
              </h2>
              <p class="text-xl text-neutral-600">Full Stack Developer</p>
            </div>
            <div class="mt-4 md:mt-0 text-sm space-y-1 md:text-right">
              <div class="flex items-center md:justify-end">
                <svg
                  class="w-4 h-4 mr-2 text-neutral-500"
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
                your.email@example.com
              </div>
              <div class="flex items-center md:justify-end">
                <svg
                  class="w-4 h-4 mr-2 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (555) 123-4567
              </div>
              <div class="flex items-center md:justify-end">
                <svg
                  class="w-4 h-4 mr-2 text-neutral-500"
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
                Your City, State
              </div>
            </div>
          </div>

          <div class="prose-custom">
            <p>
              Passionate full-stack developer with expertise in modern web
              technologies. Focused on creating efficient, scalable, and
              user-friendly applications with attention to detail and best
              practices.
            </p>
          </div>
        </section>

        <!-- Experience -->
        <section class="mb-12">
          <h3
            class="text-2xl font-semibold text-neutral-900 mb-6 border-b border-neutral-200 pb-2"
          >
            Professional Experience
          </h3>

          <div class="timeline-container">
            <div class="timeline-item">
              <div class="timeline-content">
                <div
                  class="flex flex-col md:flex-row md:items-start md:justify-between mb-3"
                >
                  <div>
                    <h4 class="text-lg font-semibold text-neutral-900">
                      Senior Full Stack Developer
                    </h4>
                    <p class="text-primary-600 font-medium">
                      Tech Company Inc.
                    </p>
                  </div>
                  <div class="text-sm text-neutral-600 mt-1 md:mt-0">
                    Jan 2022 - Present
                  </div>
                </div>
                <ul class="list-disc list-inside space-y-1 text-neutral-700">
                  <li>
                    Led development of microservices architecture using Node.js
                    and Docker
                  </li>
                  <li>
                    Improved application performance by 40% through optimization
                    techniques
                  </li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>
                    Collaborated with product team to deliver user-centric
                    features
                  </li>
                </ul>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-content">
                <div
                  class="flex flex-col md:flex-row md:items-start md:justify-between mb-3"
                >
                  <div>
                    <h4 class="text-lg font-semibold text-neutral-900">
                      Full Stack Developer
                    </h4>
                    <p class="text-primary-600 font-medium">
                      Startup Solutions LLC
                    </p>
                  </div>
                  <div class="text-sm text-neutral-600 mt-1 md:mt-0">
                    Mar 2020 - Dec 2021
                  </div>
                </div>
                <ul class="list-disc list-inside space-y-1 text-neutral-700">
                  <li>
                    Built responsive web applications using React and Vue.js
                  </li>
                  <li>Designed and implemented RESTful APIs with Express.js</li>
                  <li>
                    Integrated third-party services and payment processing
                  </li>
                  <li>Participated in agile development processes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills -->
        <section class="mb-12">
          <h3
            class="text-2xl font-semibold text-neutral-900 mb-6 border-b border-neutral-200 pb-2"
          >
            Technical Skills
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card">
              <h4 class="card-title">Frontend</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >Vue.js</span
                >
                <span
                  class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >React</span
                >
                <span
                  class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >TypeScript</span
                >
                <span
                  class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >Tailwind CSS</span
                >
              </div>
            </div>

            <div class="card">
              <h4 class="card-title">Backend</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium"
                  >Node.js</span
                >
                <span
                  class="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium"
                  >Express</span
                >
                <span
                  class="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium"
                  >PostgreSQL</span
                >
                <span
                  class="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium"
                  >MongoDB</span
                >
              </div>
            </div>

            <div class="card">
              <h4 class="card-title">Tools & Platforms</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                  >Docker</span
                >
                <span
                  class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                  >AWS</span
                >
                <span
                  class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                  >Git</span
                >
                <span
                  class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                  >Figma</span
                >
              </div>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="mb-12">
          <h3
            class="text-2xl font-semibold text-neutral-900 mb-6 border-b border-neutral-200 pb-2"
          >
            Education
          </h3>

          <div class="card">
            <div
              class="flex flex-col md:flex-row md:items-start md:justify-between"
            >
              <div>
                <h4 class="text-lg font-semibold text-neutral-900">
                  Bachelor of Science in Computer Science
                </h4>
                <p class="text-primary-600 font-medium">University Name</p>
                <p class="text-neutral-600 text-sm mt-1">
                  Relevant coursework: Data Structures, Algorithms, Software
                  Engineering
                </p>
              </div>
              <div class="text-sm text-neutral-600 mt-2 md:mt-0">
                2016 - 2020
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO meta tags with useSeoMeta for better optimization
useSeoMeta({
  title: "Resume - Thomas Cober | Professional Experience",
  description:
    "Professional resume showcasing my experience, skills, and education in software development. View my career progression, technical expertise, and achievements.",
  ogTitle: "Resume - Thomas Cober | Professional Experience",
  ogDescription:
    "Professional resume showcasing my experience, skills, and education in software development. View my career progression, technical expertise, and achievements.",
  ogType: "profile",
  twitterCard: "summary",
  robots: "index, follow",
});

// Print handler with client-side check
function handlePrint() {
  if (process.client) {
    window.print();
  }
}
</script>

<style scoped>
/* Print styles */
@media print {
  .no-print,
  nav,
  footer {
    display: none !important;
  }

  .bg-gradient-to-br {
    background: white !important;
  }

  .shadow-sm,
  .shadow-md {
    box-shadow: none !important;
  }

  .timeline-item::before {
    background: #000 !important;
  }
}
</style>
