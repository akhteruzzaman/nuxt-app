<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-blue-600">{{ testStore.message }}</h1>

    <button
      class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      @click="testStore.updateMessage('Pinia is working!')"
    >
      Change Message
    </button>

    <TestDiv />
  </div>
</template>

<script setup>
import { useTestStore } from '@/store/test';
import TestDiv from '@/components/TestDiv.vue';

const testStore = useTestStore();
</script>
