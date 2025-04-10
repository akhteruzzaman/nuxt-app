<template>
  <div>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <div class="w-64 bg-white">
        <!-- User Info -->
        <div class="p-4 border-b border-gray-200 text-center">
          <h2 class="font-bold text-sm text-gray-500">AHMAD BIN ABU BAKAR</h2>
          <p class="font-bold text-sm text-gray-500">PENOLONG TEKNOLOGI</p>
          <p class="font-bold text-sm text-gray-500">MAKLUMAT</p>
          <p class="font-bold text-sm text-gray-500">(GRED F29)</p>
          <p class="font-bold text-sm text-blue-500 mt-2">10 April 2025, 06:50:32 PTG</p>
        </div>

        <!-- Menu -->

        <div class="py-2">
          <div class="px-4 py-2 text-sm text-gray-500">MENU</div>
          <PerfectScrollbar class="ps">
            <!-- Menu Items -->
            <div class="relative mx-2 rounded-md">
              <a
                href="#"
                class="flex items-center px-4 py-3 bg-indigo-100 text-indigo-700 rounded-md mr-3"
              >
                <span class="mr-2 text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    />
                  </svg>
                </span>
                Utama
              </a>
              <div
                class="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 bg-indigo-500 rounded-l-md h-[50px]"
              />
            </div>

            <a href="#" class="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-100">
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              Dashboard
            </a>

            <a
              href="#"
              class="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-indigo-100"
              @click.prevent="isProfilOpen = !isProfilOpen"
            >
              <div class="flex items-center">
                <span class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
                    />
                    <path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </span>
                Profil Pembelajaran Dan Peperiksaan
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <div v-if="isProfilOpen" class="ml-6">
              <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-indigo-100">Test 1</a>
              <a href="#" class="block px-6 py-3 text-gray-700 hover:bg-indigo-100">Test 2</a>
            </div>

            <div class="bg-gray-100">
              <a
                href="#"
                class="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-indigo-100"
              >
                <div class="flex items-center">
                  <span class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </span>
                  Rekod dan Peperiksaan
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>

            <a href="#" class="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-100 ml-6">
              Rekod Peperiksaan
            </a>

            <div class="bg-gray-100">
              <a
                href="#"
                class="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-indigo-100"
              >
                <div class="flex items-center">
                  <span class="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </span>
                  Rekod dan Peperiksaan
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </PerfectScrollbar>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <!-- Top Navigation -->
        <header class="bg-white border-b border-gray-200 p-4 flex justify-end">
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span
                class="absolute w-2 h-2 bg-green-500 rounded-full bottom-0 right-0 border border-white"
              ></span>
            </div>
            <div
              class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div
              class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                />
              </svg>
            </div>
            <div
              class="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 font-bold relative"
              @click="isPopoverOpen = !isPopoverOpen"
            >
              HRMIS
              <div
                v-if="isPopoverOpen"
                class="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-[400px] h-[500px] overflow-y-auto z-40"
              >
                <div class="grid grid-cols-4 gap-4">
                  <div
                    v-for="(item, index) in popoverItems"
                    :key="index"
                    class="flex flex-col items-center cursor-pointer"
                    :class="{ 'bg-blue-100': focusedItem === index }"
                    @click="focusedItem = index"
                  >
                    <div
                      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
                    >
                      <img :src="item.icon" alt="icon" class="w-full h-full object-cover" />
                    </div>
                    <p class="text-sm text-center mt-2">{{ item.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Content Area -->
        <main class="flex-1 overflow-y-auto p-4 bg-blue-50">
          <!-- Page Header -->
          <div class="flex items-center mb-6">
            <div class="bg-gray-800 p-2 rounded mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h1 class="text-2xl font-medium text-gray-800">
              Pengurusan Rekod Pembelajaran Dan Peperiksaan
            </h1>
          </div>

          <!-- Search Panel -->
          <div class="bg-off-white rounded-lg shadow p-6 mb-6">
            <div class="grid grid-cols-1 gap-4">
              <!-- Search Fields -->
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="No. Rujukan"
                  class="pl-10 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">/</div>
              </div>

              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Tajuk Permohonan"
                  class="pl-10 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">/</div>
              </div>

              <div>
                <label class="block text-sm text-gray-500 mb-1">Status Permohonan</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <select
                    class="pl-10 pr-10 py-2 border border-gray-300 rounded-md w-full appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>SEMAKAN BPO</option>
                  </select>
                  <div
                    class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-2 mt-2">
                <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md">
                  CARI
                </button>
                <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md">
                  SET SEMULA
                </button>
                <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md">
                  PERMOHONAN BAHARU
                </button>
              </div>
            </div>
          </div>

          <!-- Results Table -->
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th class="px-6 py-3 bg-gray-50">BIL</th>
                  <th class="px-6 py-3 bg-gray-50">NO. RUJUKAN</th>
                  <th class="px-6 py-3 bg-gray-50">TAJUK PERMOHONAN</th>
                  <th class="px-6 py-3 bg-gray-50">TARIKH PERMOHONAN</th>
                  <th class="px-6 py-3 bg-gray-50">STATUS</th>
                  <th class="px-6 py-3 bg-gray-50">TINDAKAN</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <!-- Table body is empty in the screenshot -->
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { ref } from "vue";

const isProfilOpen = ref(false);
const isPopoverOpen = ref(false);
const focusedItem = ref<number | null>(null);
const popoverItems = ref([
  { icon: "https://via.placeholder.com/32", text: "Item 1" },
  { icon: "https://via.placeholder.com/32", text: "Item 2" },
  { icon: "https://via.placeholder.com/32", text: "Item 3" },
  { icon: "https://via.placeholder.com/32", text: "Item 4" },
  { icon: "https://via.placeholder.com/32", text: "Item 5" },
  { icon: "https://via.placeholder.com/32", text: "Item 6" },
  { icon: "https://via.placeholder.com/32", text: "Item 7" },
  { icon: "https://via.placeholder.com/32", text: "Item 8" },
  { icon: "https://via.placeholder.com/32", text: "Item 9" },
  { icon: "https://via.placeholder.com/32", text: "Item 10" },
  { icon: "https://via.placeholder.com/32", text: "Item 11" },
  { icon: "https://via.placeholder.com/32", text: "Item 12" },
  { icon: "https://via.placeholder.com/32", text: "Item 13" },
  { icon: "https://via.placeholder.com/32", text: "Item 14" },
  { icon: "https://via.placeholder.com/32", text: "Item 15" },
  { icon: "https://via.placeholder.com/32", text: "Item 16" },
  { icon: "https://via.placeholder.com/32", text: "Item 17" },
  { icon: "https://via.placeholder.com/32", text: "Item 18" },
  { icon: "https://via.placeholder.com/32", text: "Item 19" },
  { icon: "https://via.placeholder.com/32", text: "Item 20" },
]);
</script>

<style scoped>
@import "vue3-perfect-scrollbar/style.css";

.ps {
  max-height: 80vh; /* or height: 100px; */
}
</style>
