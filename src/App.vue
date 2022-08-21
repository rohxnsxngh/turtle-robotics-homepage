<script setup lang="ts">
import '../src/index.css';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="bg-black overflow-x-hidden">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style></style>
