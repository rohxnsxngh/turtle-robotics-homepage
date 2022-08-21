<script setup lang="ts">
import FooterComponent from '../components/FooterComponent.vue';
</script>

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
            >News & Info<br />
            <span class="text-white">Spring 2022 - Applications<br /></span>
          </span>
        </span>
      </h1>
      <p
        class="max-w-xl mt-24 mx-left text-xl text-gray-500 dark:text-gray-300"
      >
        We are receiving applications and accepting new members. The application
        deadline will be Feburary 2nd, 2022 and the membership fee is $25.
        Please wait to pay for your fees until after the application deadline.
        Click the link below if interested.
      </p>
      <div class="mt-12">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd6uFDHfkHsn2nCZ95urOL3j5yB0TBZzadolAakyzmebC1L6w/closedform"
          class="text-yellow-600 underline"
          >Application</a
        >
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
