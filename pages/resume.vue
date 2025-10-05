<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-16">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header with Gradient Theme -->
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-display bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent mb-8">
          Resume
        </h1>
        <div class="flex justify-center space-x-4 mb-8">
          <button class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-400 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/30">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download PDF
          </button>
          <button @click="handlePrint" class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-medium hover:from-green-400 hover:to-green-600 transition-all duration-200 shadow-lg shadow-green-500/30">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
      </header>

      <!-- Resume Content -->
      <main class="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-700 p-8">
        <!-- Header Section -->
        <header class="flex flex-col sm:flex-row justify-start sm:items-center mb-8 pb-8 border-b border-slate-600">
          <div class="profile-pic mb-5 sm:mb-0 sm:mr-6">
            <img
              src="https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg"
              alt="Thomas Cober Profile Picture"
              class="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30"
            />
          </div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-start">
            <div class="profile-header mr-6 mb-1 sm:mb-0">
              <h1 class="text-3xl font-bold text-white mb-1">Thomas Cober</h1>
              <h2 class="text-xl text-blue-300">Senior Javascript Engineer</h2>
            </div>
            <div class="mb-0.5 text-slate-300">
              <p class="text-sm">tcober5@gmail.com</p>
              <p class="text-sm">thomascober.com</p>
            </div>
          </div>
        </header>

        <!-- Main Content -->
        <div class="flex sm:flex-row flex-col-reverse">
          <!-- Left Column - Experience & Education -->
          <div class="sm:w-1/2 sm:border-r sm:border-slate-600 sm:pr-8">
            <!-- Experience Section -->
            <div class="mb-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-white mb-2">Experience</h3>
                <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
              </div>

              <!-- RBC -->
              <section class="mb-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">RBC</h3>
                  <span class="text-sm text-slate-400 italic">02/2020 - Present</span>
                </div>
                <h4 class="text-green-300 font-semibold mb-2">Senior Developer</h4>
                <p class="text-sm text-slate-300 mb-3">
                  Royal Bank of Canada Wealth Management helps people manage their financial future.
                </p>
                <ul class="text-sm text-slate-300 list-disc list-inside space-y-1">
                  <li>Contributed to an A+ Vue frontend</li>
                  <li>Refactored and contributed to a Node middle tier</li>
                </ul>
              </section>

              <!-- SDG -->
              <section class="mb-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">SDG</h3>
                  <span class="text-sm text-slate-400 italic">05/2018 - 09/2019</span>
                </div>
                <h4 class="text-green-300 font-semibold mb-2">Contract Front End Developer</h4>
                <p class="text-sm text-slate-300 mb-3">
                  Solution Design Group provides staffing augmentation to help companies all around the world meet their digital needs.
                </p>
                <ul class="text-sm text-slate-300 list-disc list-inside space-y-1">
                  <li>Built 2 enterprise sized web apps</li>
                  <li>Learned how to be a great contractor</li>
                </ul>
              </section>

              <!-- Pediatric Home Service -->
              <section class="mb-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">Pediatric Home Service</h3>
                  <span class="text-sm text-slate-400 italic">04/2017 - 05/2018</span>
                </div>
                <h4 class="text-green-300 font-semibold mb-2">Front End Developer</h4>
                <p class="text-sm text-slate-300 mb-3">
                  Pediatric Home Service helps severely disabled children get the medical help they need so they are able to live at home safely.
                </p>
                <ul class="text-sm text-slate-300 list-disc list-inside space-y-1">
                  <li>Built an ecommerce web app for delivering medical supplies</li>
                  <li>Maintained and built several promotional Wordpress sites</li>
                </ul>
              </section>

              <!-- Iron Horse Interactive -->
              <section class="mb-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">Iron Horse Interactive</h3>
                  <span class="text-sm text-slate-400 italic">10/2016 - 04/2017</span>
                </div>
                <h4 class="text-green-300 font-semibold mb-2">Front End Developer</h4>
                <p class="text-sm text-slate-300 mb-3">
                  Iron Horse Interactive is a B2B marketing company focusing on the VR/AR industry.
                </p>
                <ul class="text-sm text-slate-300 list-disc list-inside space-y-1">
                  <li>Helped with marketing site development</li>
                  <li>Installed analytics</li>
                  <li>Made SEO optimizations</li>
                </ul>
              </section>

              <!-- Lytics -->
              <section class="mb-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">Lytics</h3>
                  <span class="text-sm text-slate-400 italic">10/2015 - 09/2016</span>
                </div>
                <h4 class="text-green-300 font-semibold mb-2">Junior Developer</h4>
                <p class="text-sm text-slate-300 mb-3">
                  Lytics is a marketing analytics customer data platform that consolidates data and uses AI to analyze that data.
                </p>
                <ul class="text-sm text-slate-300 list-disc list-inside space-y-1">
                  <li>Learned foundational developer skills</li>
                  <li>Designed and programmed a new marketing site</li>
                  <li>Designed and programmed promotional sites</li>
                </ul>
              </section>
            </div>

            <!-- Education Section -->
            <div class="mt-8 sm:mt-0">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-white mb-2">Education</h3>
                <div class="w-12 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
              </div>

              <section class="mb-4">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">Portland State University</h3>
                  <span class="text-sm text-slate-400 italic">09/2010 - 06/2013</span>
                </div>
                <h4 class="text-green-300 text-sm">Bachelors in Graphic and Interactive Design</h4>
              </section>

              <section class="mb-4">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="font-bold text-lg text-blue-300">Kishwaukee Community College</h3>
                  <span class="text-sm text-slate-400 italic">09/2008 - 06/2009</span>
                </div>
                <h4 class="text-green-300 text-sm">Associates in General Studies</h4>
              </section>
            </div>
          </div>

          <!-- Right Column - Skills -->
          <div class="sm:w-1/2 sm:pl-8 mb-8 sm:mb-0">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-white mb-2">Skills</h3>
              <div class="w-12 h-1 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full"></div>
            </div>

            <div class="space-y-4">
              <!-- Vue -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Vue</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 5" :key="index" icon="fa-solid fa-circle" class="text-blue-400" />
                </div>
              </div>

              <!-- HTML -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">HTML</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 5" :key="index" icon="fa-solid fa-circle" class="text-green-400" />
                </div>
              </div>

              <!-- CSS/SASS -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">CSS/SASS</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 5" :key="index" icon="fa-solid fa-circle" class="text-yellow-400" />
                </div>
              </div>

              <!-- JavaScript -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">JavaScript</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 5" :key="index" icon="fa-solid fa-circle" class="text-blue-400" />
                </div>
              </div>

              <!-- Angular -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Angular 2+</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 3" :key="index" icon="fa-solid fa-circle" class="text-green-400" />
                </div>
              </div>

              <!-- Node -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Node</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 3" :key="index" icon="fa-solid fa-circle" class="text-yellow-400" />
                </div>
              </div>

              <!-- Git -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Git</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 4" :key="index" icon="fa-solid fa-circle" class="text-blue-400" />
                </div>
              </div>

              <!-- Jest -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Jest</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 4" :key="index" icon="fa-solid fa-circle" class="text-green-400" />
                </div>
              </div>

              <!-- Storyblok -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Storyblok</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 3" :key="index" icon="fa-solid fa-circle" class="text-yellow-400" />
                </div>
              </div>

              <!-- CL Tools -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">CL Tools</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 4" :key="index" icon="fa-solid fa-circle" class="text-blue-400" />
                </div>
              </div>

              <!-- Fun Skills -->
              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Losing Keys</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 5" :key="index" icon="fa-solid fa-circle" class="text-red-400" />
                </div>
              </div>

              <div class="flex items-center">
                <h4 class="w-32 font-light text-slate-300">Team Support</h4>
                <div class="flex space-x-1">
                  <FontAwesomeIcon v-for="index in 5" :key="index" icon="fa-solid fa-circle" class="text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useSeoMeta({
  title: 'Resume - Thomas Cober',
  description: 'Senior Javascript Engineer with expertise in Vue, Node.js, and full-stack development.',
  ogTitle: 'Resume - Thomas Cober',
  ogDescription: 'Senior Javascript Engineer with expertise in Vue, Node.js, and full-stack development.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

// Print functionality
const handlePrint = () => {
  window.print();
}
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
  
  .bg-gradient-to-br {
    background: white !important;
  }
  
  .text-slate-300,
  .text-slate-400 {
    color: #374151 !important;
  }
  
  .text-white {
    color: #000 !important;
  }
  
  .border-slate-600,
  .border-slate-700 {
    border-color: #d1d5db !important;
  }
  
  .bg-slate-800 {
    background: white !important;
  }
}
</style>