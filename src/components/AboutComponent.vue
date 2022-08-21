<template>
  <div class="bg-cool-gray dark:bg-russian-black pt-2 pb-2 relative">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 lg:py-12 sm:px-6 lg:px-8">
      <div class="text-center">
        <p
          class="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          What is T.U.R.T.L.E?
        </p>
        <p
          class="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300"
        >
          T.U.R.T.L.E was founded in the fall semester of 2013 by Mechanical
          Engineering students Kenny Chour (15') and Ivan Cortes (15'). At the
          time, this club consisted of only a handful of students and it
          operated under the advisement of Dr. Aaron Ames. The goal was simply
          to form a group of motivated students who could work on interesting
          projects throughout the semester. However, the club soon gained
          support from other students of various engineering majors who also
          wished for an opportunity to apply their skills and knowledge.
        </p>
      </div>
    </div>
  </div>
  <div
    class="relative bg-cool-gray dark:bg-russian-black pt-16 pb-32 overflow-hidden"
  >
    <div class="relative">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
        >
          <div>
            <div></div>
            <div class="mt-6">
              <h2
                class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
              >
                What do we do?
              </h2>
              <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
                T.U.R.T.L.E's mission is to provide Texas A&M engineering
                students a hands-on experience in the field of robotics. Each
                semester, teams will be challenged with a project or assignment
                that will culminate in a significant showcase of creativity,
                talent, teamwork, and innovation (be it a competition or an
                academic presentation). In addition to providing hands-on
                experience, T.U.R.T.L.E strives to help develop and strengthen
                leadership qualities in each of its members.
              </p>
              <div class="mt-6">
                <router-link
                  to="#"
                  class="mt-3 w-full px-6 py-3 border hover:dark:bg-yellow-600 border-transparent text-base font-medium border-t-2 border-t-l-blue-300 dark:border-t-l-blue-800 hover:dark:border-t-blue rounded-md text-white dark:bg-yellow-600 bg-l-blue-500 shadow-sm hover:bg-l-blue-600 hover:border-t-l-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-l-blue-900 focus:ring-l-blue-100"
                >
                  Get Started
                </router-link>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500 dark:text-gray-300">
                  &ldquo;There are an endless number of things to discover about
                  robotics. A lot of it is just too fantastic for people to
                  believe.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-6 w-6 rounded-full"
                      src="../assets/danielWilson.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    class="text-base font-medium text-gray-700 dark:text-gray-500"
                  >
                    Daniel H. Wilson, Robotics Engineer and New York bestselling
                    author
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <svg
              class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x="0"
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
                width="404"
                height="784"
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="../assets/hailfireProject.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
        >
          <div>
            <div></div>
            <div class="mt-6">
              <h2
                class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
              >
                What is robotics?
              </h2>
              <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">
                Robotics is an interdisciplinary branch of computer science and
                engineering. Robotics involves design, construction, operation,
                and use of robots. The goal of robotics is to design machines
                that can help and assist humans.
              </p>
              <!-- <div class="mt-6">
                <router-link
                  to="#"
                  class="mt-3 w-full px-6 py-3 border hover:dark:bg-yellow-600 border-transparent text-base font-medium border-t-2 border-t-l-blue-300 dark:border-t-l-blue-800 hover:dark:border-t-blue rounded-md text-white dark:bg-yellow-600 bg-l-blue-500 shadow-sm hover:bg-l-blue-600 hover:border-t-l-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-l-blue-900 focus:ring-l-blue-100"
                >
                  Learn More
                </router-link>
              </div> -->
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div
            class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <svg
              class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
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
                width="404"
                height="784"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
            <div
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            >
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6584893731550359552"
                height="684"
                width="684"
                frameborder="0"
                allowfullscreen="true"
                title="Embedded post"
                class="overflow-hidden hover:overflow-scroll md: mx-auto"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="py-4 bg-cool-gray dark:bg-russian-black overflow-hidden lg:py-8 md:pb-24 sm:pb-16 lg:pb-32"
  >
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
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
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-4xl"
        >
          What does a T.U.R.T.L.E Member Do?
        </h2>
        <p
          class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 dark:text-gray-300"
        >
          We seek TAMU students who will engage in challenging (but fun)
          projects each semester. Once accepted, members are placed in teams,
          each of which has its own project, project leader, and meeting times.
          The number of team members and relevant skills required depend on the
          nature of each project. Needless to say, teamwork is a very important
          part of being a T.U.R.T.L.E member.
        </p>
        <br />

        <p
          class="mt-4 max-w-3xl mx-auto text-center text-xl text-yellow-600 dark:text-yellow-600"
        >
          A general member of T.U.R.T.L.E can expect the following level of
          commitment:
        </p>
        <ul
          class="mt-4 list-disc max-w-3xl mx-auto text-left text-l text-gray-500 dark:text-gray-300"
        >
          <li>
            Involvement in a project through the entire semester, and possibly
            for multiple semesters.
          </li>
          <li>
            Meeting with their project team about once a week during the
            semester.
          </li>
          <li>
            Completing individual or group tasks, as deemed necessary by the
            project leader.
          </li>
        </ul>
        <p
          class="mt-4 max-w-3xl mx-auto text-center text-xl text-yellow-600 dark:text-yellow-600"
        >
          In addition, members enjoy the following activities:
        </p>
        <ul
          class="mt-4 list-disc max-w-3xl mx-auto text-left text-l text-gray-500 dark:text-gray-300"
        >
          <li>
            Periodic general meetings where each team presents their progress
            and future plans.
          </li>
          <li>
            Special presentations and workshops to increase their knowledge and
            technical skills.
          </li>
          <li>
            Social events throughout the semester, based on common interests.
          </li>
          <li>
            Opportunities to present their projects to larger audiences, such as
            project showcases or other events sponsored by Texas A&M.
          </li>
        </ul>
      </div>

      <div class="relative mt-32">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight dark:text-white text-gray-900 sm:text-4xl"
        >
          Long Term Benefits
        </h2>

        <p
          class="mt-4 max-w-3xl mx-auto text-center text-xl text-yellow-600 dark:text-yellow-600"
        >
          Dedicated members of TURTLE have the most to gain. Here are the main
          benefits you will see as a dedicated member:
        </p>
        <ul
          class="mt-4 list-disc max-w-3xl mx-auto text-left text-l text-gray-500 dark:text-gray-300"
        >
          <li>
            Learn new skills the best way--hands on. Things you will do:
            research, design, make, communicate.
          </li>
          <li>
            Get experience working with a team. This isn't always a pleasant
            experience, but it is essential to have. Everyone wants someone who
            can work well with others.
          </li>
          <li>
            Learn from others. Some of our members have quite a bit of
            experience they are willing to share with you. Also, members come
            from all kinds of different majors and technical backgrounds.
          </li>
          <li>
            Become a project leader! You think working with a team is
            challenging? Try LEADING a team. This is where you learn the most,
            by the way.
          </li>
          <li>
            Become an officer of TURTLE. Steer the club in new directions and
            make sure it keeps going strong. Various positions available for
            experienced members.
          </li>
        </ul>
      </div>

      <iframe
        width="451"
        height="801"
        src="https://www.youtube.com/embed/HZQvRP7qkmQ"
        title="Finger Prototype V1"
        frameborder="0"
        allowfullscreen="true"
        class="mt-32 mx-auto"
      ></iframe>

      <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
        <svg
          class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
          width="784"
          height="404"
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
              x="0"
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
            width="784"
            height="404"
            fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
          />
        </svg>
      </div>
    </div>

    <svg
      class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
      width="404"
      height="784"
      fill="none"
      viewBox="0 0 404 784"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
          x="0"
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
        width="404"
        height="484"
        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
      />
    </svg>

    <div class="relative mt-12 sm:mt-16 lg:mt-24">
      <div
        class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <!-- <div class="lg:col-start-2">
            <h3
              class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl dark:text-white"
            >
              Stay connected anywhere
            </h3>
            <p class="mt-3 text-lg text-gray-500 dark:text-gray-300">
              Never miss a class again! You can learn from any location, as long
              as you have an internet connection and a device on hand. And we
              make it easy for you - just two clicks and boom, you’re in!
            </p>
          </div> -->

        <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                x="0"
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
              width="784"
              height="404"
              fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-cool-gray dark:bg-russian-black">
    <div
      class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:pb-32"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
      >
        <span class="block">Ready to Register?</span>
        <span class="block">Submit your application below.</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-700 hover:bg-l-blue-800"
          >
            Get Started
          </router-link>
        </div>
        <div class="ml-3 inline-flex">
          <router-link
            to="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-l-blue-200"
          >
            Learn More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
