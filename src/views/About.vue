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
          class="text-yellow-600 underline text-xl"
          >Application</a
        >
      </div>
    </div>
    <!-- Second Section -->
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 lg:py-12 sm:px-6 lg:px-8">
      <h1>
        <span
          class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
        >
          <span class="block text-yellow-600 dark:text-yellow-600"
            >Who Can Become a Member?<br />
          </span>
        </span>
      </h1>
      <p
        class="max-w-xl mt-24 mx-left text-xl text-gray-500 dark:text-gray-300"
      >
        T.U.R.T.L.E accepts undergraduate and graduate students of all
        engineering majors. Students in other areas of study who are interested
        in the organization are also encouraged to inquire about possible
        positions. One important requirement for all members is dedication! We
        welcome students who are willing to put time and effort into the
        completion of projects. Students who are not willing to participate will
        not gain anything from membership in the organization. Previous robotic
        experience is not required, although it is preferred. More important is
        the willingness to learn and improve.
      </p>
      <div class="mt-12"></div>
    </div>
    <!-- Third Section -->
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 lg:py-12 sm:px-6 lg:px-8">
      <h1>
        <span
          class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
        >
          <span class="block text-yellow-600 dark:text-yellow-600"
            >How to Become a Member?<br />
          </span>
        </span>
      </h1>

      <p
        class="max-w-xl mt-24 mx-left text-xl text-gray-500 dark:text-gray-300"
      >
        T.U.R.T.L.E normally seeks new members at the beginning of each
        semester. Students who are interested in joining T.U.R.T.L.E must complete
        the following steps in the order in which they are presented:
      </p>
      <ul
        class="mt-12 list-disc max-w-3xl mx-left text-left text-l text-gray-500 dark:text-gray-300"
      >
        <li>
          Complete and submit a new member application by the published
          deadline.
        </li>
        <li>
          Attend a short interview with T.U.R.T.L.E officers. (This requirement may
          be waived in the event of a large number of applicants.)
        </li>
        <li>
          Once accepted, the applicant must pay the semester membership fee.
          Returning members are not required to re-apply. However, everyone is
          required to pay the membership fee every semester.
        </li>
      </ul>

      <p
        class="mt-12 max-w-3xl mx-left text-xl text-yellow-600 dark:text-yellow-600"
      >
        If you miss the application deadline, but are still interested in
        joining T.U.R.T.L.E, we encourage you to contact us about your interest.
        However, keep in mind that we must be fair to those who observed the
        deadline when evaluating such cases. Penalties for late applications may
        be a slightly higher membership fee.
      </p>

      <div class="mt-12"></div>
    </div>
    <FooterComponent />
  </div>
</template>
