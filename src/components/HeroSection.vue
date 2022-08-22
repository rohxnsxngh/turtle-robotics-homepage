<template>
  <div class="relative bg-cool-gray dark:bg-russian-black overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200 dark:text-l-blue-800"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y="72"
          width="640"
          height="640"
          class="text-transparent"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="mx-auto max-w-7xl px-4 sm:mt-0 md:mt-0 sm:px-6 lg:mt-16">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h1>
              <span
                class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
              >
                <span class="block text-yellow-600 dark:text-yellow-600"
                  >T.U.R.T.L.E<br />
                  <span class="text-white">Texas A&M University<br /></span>
                </span>
              </span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg pb-6 xl:text-xl"
            >
              Texas A&M University Robotics Team and Leadership Experience
            </p>
            <router-link
              to="/about"
              class="mt-3 w-full px-6 py-3 border dark:border-t-l-blue-500 border-transparent text-base font-medium border-t-2 border-t-l-blue-300 rounded-md text-white bg-yellow-600 shadow-sm hover:bg-l-blue-600 hover:border-t-l-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-l-blue-100 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Get Started
            </router-link>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <svg
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y="72"
                width="640"
                height="640"
                class="text-gray-50 dark:text-russian-black"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div
              class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <img
                alt="Tutle logo"
                src="../assets/turtleRobotics.jpg"
                class="w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    doAction() {
      // do something
    },
  },
};
</script>
