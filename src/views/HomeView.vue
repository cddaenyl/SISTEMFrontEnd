<script setup lang="ts">
import Category from '@/components/Category.vue';
import JoinContent from '@/components/JoinContent.vue';
import Authors from '@/components/ListAuthorsContent.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <main>
      <!-- Hero Section -->
      <section class="relative flex flex-col text-base font-bold text-white w-full">
        <img loading="lazy" src="@/assets/images/misc/hero.png" alt="Background image for hero section"
          class="absolute inset-0 object-cover w-full h-full" />
        <div class="relative z-10 flex flex-col items-start p-5 sm:px-20 py-20 w-full max-w-screen-xl mx-auto">
          <header class="text-xs sm:text-base font-semibold leading-none uppercase tracking-wider">
            <span class="font-medium">Posted on</span>
            <strong class="font-black"> Startup</strong>
          </header>
          <h1
            class="mt-6 text-3xl sm:text-4xl lg:text-6xl tracking-tighter leading-tight lg:leading-[64px] max-w-full lg:w-[800px]">
            Step-by-step guide to choosing great font pairs
          </h1>
          <time class="mt-6 text-sm sm:text-base leading-7 text-blue-600">
            By <span class="text-blue-600">James West</span> | May 23, 2022
          </time>
          <p class="mt-4 text-sm sm:text-base leading-7 max-w-full lg:w-[600px] text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <button class="px-8 py-3 mt-8 sm:px-12 sm:py-4 text-sm sm:text-lg leading-none bg-blue-600">
            Read More &gt;
          </button>
        </div>
      </section>

      <!-- Featured and All Posts Section -->
      <section class="flex flex-col p-5 mt-16 sm:px-20 max-w-screen-xl mx-auto w-full">
        <div class="flex flex-wrap gap-5 justify-between items-center text-gray-800">
          <h2 class="text-2xl sm:text-4xl font-bold tracking-tighter">Featured Post</h2>
          <router-link to="/blog" class="text-amber-300 hover:text-amber-400">View All</router-link>
        </div>
        <div class="flex flex-wrap mt-8 gap-5">
          <!-- Featured Post -->
          <article class="flex flex-col w-full lg:w-[48%] bg-white p-5 shadow-lg rounded-lg">
            <img loading="lazy" src="@/assets/images/misc/home-1.png" alt="Featured blog post"
              class="object-contain w-full rounded-lg" />
            <div class="mt-4 text-sm font-medium leading-none text-amber-300">
              By <span class="text-amber-300">John Doe</span> | <time datetime="2022-05-23">May 23, 2022</time>
            </div>
            <h3 class="mt-4 text-xl sm:text-3xl font-bold leading-tight text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p class="mt-4 text-sm sm:text-base leading-7 text-gray-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <router-link to="/blog/post"
              class="mt-8 px-8 py-3 bg-blue-600 text-white text-sm sm:text-lg leading-none">Read More &gt;</router-link>
          </article>

          <!-- All Posts -->
          <aside class="flex flex-col w-full lg:w-[41%] gap-5">
            <article v-for="(post, index) in 4" :key="index"
              :class="['p-5 rounded-lg', index % 2 ? 'bg-orange-50' : 'bg-white']">
              <div class="text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
              </div>
              <h4 class="mt-2 text-lg sm:text-2xl font-bold leading-tight text-gray-800">
                8 Figma design systems that you can download for free today.
              </h4>
            </article>
          </aside>
        </div>
      </section>

      <!-- About Us Section -->
      <section data-layername="aboutUsOurMission"
        class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
          alt="" class="object-contain self-end aspect-[45.45] max-w-[1061px] w-[1061px] max-md:max-w-full" />
        <section data-layername="background" class="px-20 py-24 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h2 data-layername="aboutUs" class="self-start font-semibold leading-none uppercase tracking-[3px]">
                  ABOUT US
                </h2>
                <h3 data-layername="weAreACommunityOfContentWritersWhoShareTheirLearnings"
                  class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                  We are a community of content writers who share their learnings
                </h3>
                <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
                  class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <router-link to="/aboutus" data-layername="readMore"
                  class="self-start mt-7 text-lg leading-8 text-amber-300 hover:text-blue-600" tabindex="0">
                  Read More &gt;
                </router-link>
              </div>
            </article>
            <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
                <h2 data-layername="ourMision" class="font-semibold leading-none uppercase tracking-[3px]">
                  Our mision
                </h2>
                <h3 data-layername="creatingValuableContentForCreativesAllAroundTheWorld"
                  class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                  Creating valuable content for creatives all around the world
                </h3>
                <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat"
                  class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>

      <!-- Category Section -->
      <section class="flex flex-col p-5 mt-24 sm:px-20 max-w-screen-xl mx-auto w-full">
        <h2 class="text-2xl sm:text-4xl font-bold text-center text-gray-800">Choose A Category</h2>
        <Category />
      </section>

      <!-- Why We Started Section -->
      <section class="relative flex flex-col items-center mt-24 mx-auto w-full max-w-screen-xl p-5 lg:h-[705px]">
        <div class="absolute bottom-0 w-full lg:w-[820px] h-[300px] lg:h-full overflow-hidden rounded-lg">
          <img loading="lazy" src="@/assets/images/misc/home-2.png" alt="Group of friends enjoying view"
            class="object-cover w-full h-full" />
        </div>
        <div class="relative z-10 bg-white w-full lg:w-[706px] h-auto lg:h-[584px] p-8 lg:p-20 shadow-lg">
          <span class="block text-sm font-semibold uppercase tracking-wide text-gray-800">WHY WE STARTED</span>
          <h2 class="mt-6 text-2xl sm:text-5xl font-bold tracking-tight leading-tight text-gray-800">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p class="mt-6 text-sm sm:text-base leading-7 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <button class="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-bold">Discover our story &gt;</button>
        </div>
      </section>
      <Authors />


      <section class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-row items-center">
          <ul class="pt-10 flex items-center gap-5">
            <li>
              <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <h2 data-layername="weAre" class="self-start text-sm leading-none opacity-60">
                  We are
                </h2>
                <h1 data-layername="featuredIn" class="text-2xl font-bold leading-none">
                  Featured in
                </h1>
              </article>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/logo/logo-1.png" alt=""
                  class="hover:opacity-80 transition duration-150 ease-in-out">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/logo/logo-2.png" alt=""
                  class="hover:opacity-80 transition duration-150 ease-in-out">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/logo/logo-3.png" alt=""
                  class="hover:opacity-80 transition duration-150 ease-in-out">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/logo/logo-4.png" alt=""
                  class="hover:opacity-80 transition duration-150 ease-in-out">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/images/logo/logo-5.png" alt=""
                  class="hover:opacity-80 transition duration-150 ease-in-out">
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section data-layername="testimonials"
        class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div data-layername="background"
          class="flex justify-between items-start px-16 py-20 w-full bg-orange-50 max-md:px-5 max-md:max-w-full">
          <div class="flex flex-col w-1/2">
            <article class="flex flex-col items-start self-start mt-3 text-base text-gray-800">
              <h2 data-layername="testimoniaLs" class="font-semibold leading-none uppercase tracking-[3px]">
                TESTIMONIALS
              </h2>
              <h3 data-layername="whatPeopleSayAboutOurBlog"
                class="mt-3 text-4xl font-bold tracking-tighter leading-10">
                What people say about our blog
              </h3>
              <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor"
                class="self-stretch mt-4 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </article>
          </div>

          <div class="shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px] mx-5"></div>

          <div class="flex flex-col w-1/2">
            <article class="flex flex-col max-md:max-w-full">
              <aside
                data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
                class="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </aside>
              <div class="flex flex-wrap gap-5 justify-start items-start mt-28 w-full max-md:mt-10 max-md:max-w-full">
                <figure class="flex gap-4 mt-2">
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/325aaf33d5e04c88005089c84333104f671f86dbae035d823bfea6f90988d065?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                    alt="Profile picture of Jonathan Vallem"
                    class="object-contain shrink-0 self-start w-12 rounded-full aspect-square" />
                  <figcaption class="flex flex-col">
                    <h4 data-layername="jonathanVallem" class="text-2xl font-bold leading-none text-gray-800">
                      Jonathan Vallem
                    </h4>
                    <p data-layername="newYorkUsa" class="self-start text-base leading-7 text-zinc-500 mt-2">
                      New York, USA
                    </p>
                  </figcaption>
                </figure>
                <div class="ml-12 flex gap-6">
                  <button class="flex items-center p-0 bg-transparent border-none">
                    <img loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                      alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" />
                  </button>
                  <button class="flex items-center p-0 bg-transparent border-none">
                    <img loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                      alt="" class="object-contain shrink-0 aspect-square w-[62px]" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <JoinContent />
    </main>
  </MainLayout>
</template>
