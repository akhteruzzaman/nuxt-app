<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">        
        
        <h1 class="text-4xl font-bold text-blue-600"> {{ testStore.message }}</h1>

        <button class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600" @click="testStore.updateMessage('Pinia is working!')">
             Change Message
        </button>


        <div class="p-10">
            <h1 class="text-3xl font-bold text-blue-600">Hello From DevExtreme</h1>

            <!-- DevExtreme Button -->
            <DxButton text="Click Me" @click="handleClick" class="mt-4" />
        </div>
    </div>
</template>

<script setup>
import { useTestStore } from '@/store/test';

const testStore = useTestStore();
</script>