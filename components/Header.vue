<template>
  <header class="shadow-md p-4 bg-white flex justify-between items-center">
    <DxToolbar>
      <DxItem location="before" widget="dxButton" :options="menuButtonOptions" />
      <DxItem location="center" text="DevExtreme Dashboard" />
      <DxItem location="after" widget="dxButton" :options="profileButtonOptions" />
    </DxToolbar>
  </header>
</template>

<script setup>
import { DxToolbar, DxItem } from 'devextreme-vue/toolbar';

const menuButtonOptions = {
  icon: 'menu',
  onClick: () => {
    console.log('Menu clicked');
  },
};

const profileButtonOptions = {
  icon: 'user',
  onClick: () => {
    console.log('Profile clicked');
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
}
</style>
