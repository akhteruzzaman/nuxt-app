<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <div class="flex flex-1">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <main class="flex-1 p-4 bg-gray-50">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
