<template>
  <aside class="h-full w-64 bg-gray-100 shadow-md p-2">
    <DxList :items="menuItems" :selectionMode="'single'" />
  </aside>
</template>

<script setup lang="ts">
import { DxList } from 'devextreme-vue/list';

const menuItems = [
  { text: 'Home' },
  { text: 'About' }, 
];
</script>

<style scoped>
aside {
  min-height: 100vh;
}
</style>
