<script setup lang="ts">
import '../src/index.css';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="bg-black">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style></style>
