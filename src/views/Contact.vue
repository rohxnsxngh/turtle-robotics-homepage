<template>
  <div
    class="bg-cool-gray dark:bg-russian-black pt-2 pb-2 relative w-screen h-screen"
  >
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 lg:py-12 sm:px-6 lg:px-8">
      <h1>
        <span
          class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
        >
          <span class="block text-yellow-600 dark:text-yellow-600"
            >Contact Us<br />
            <span class="text-white">Texas A&M University<br/>Robotics Team and<br/>Leadership Experience<br /></span>
          </span>
        </span>
      </h1>
      <p
        class="max-w-xl mt-24 mx-left text-xl text-gray-500 dark:text-gray-300"
      >
        Please send us an email at turtlerobotics@gmail.com
      </p>
      <div class="mt-12">
      </div>
    </div>
  </div>
  <FooterComponent/>

</template>

<script setup lang="ts">
import FooterComponent from '../components/FooterComponent.vue';
</script>
