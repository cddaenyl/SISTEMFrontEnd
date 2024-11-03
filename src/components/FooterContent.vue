<script setup lang="ts">

</script>

<template>
  <footer class="flex overflow-hidden flex-col justify-center px-20 py-14 bg-gray-800 max-md:px-5">
    <div class="w-full h-auto flex items-start justify-between">
      <img src="@/assets/images/logo/finsweet.png" alt="{Finsweet"
        class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" loading="lazy" />
      <ul class="flex gap-6">
        <li>
          <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
        </li>
        <li>
          <a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
        </li>
        <li>
          <a href="/about" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
        </li>
        <li>
          <a href="/contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
        </li>
        <li>
          <a href="/privacypolicy" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Privacy
            Policy</a>
        </li>
      </ul>
    </div>

    <section
      class="items-center justify-between px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full overflow-hidden">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
            Subscribe to our newsletter to get the latest updates and news
          </h2>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div class="flex gap-5 max-md:flex-col">
            <form action="#" class="flex items-center justify-center gap-4 mb-5 w-full overflow-hidden">
              <input type="text" class="w-[323px] bg-transparent border border-x-darkgrey p-4 text-white"
                placeholder="Enter Your Email" required>
              <button type="submit"
                class="w-[179px] flex items-center justify-center font-bold bg-x-blue py-4 text-white hover:bg-x-yellow transition duration-150 ease-in-out">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div>
      <div class="flex items-center justify-between pt-10">
        <span class="text-white text-opacity-70">Finstreet 118 2561 Fintown</span>
        <ul class="flex items-center gap-6">
          <li>
            <a href="#">
              <img src="@/assets/images/logo/facebook.png" alt=""
                class="hover:opacity-75 transition duration-150 ease-in-out">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/logo/twitter.png" alt=""
                class="hover:opacity-75 transition duration-150 ease-in-out">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/logo/instagram.png" alt=""
                class="hover:opacity-75 transition duration-150 ease-in-out">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/logo/linkedin.png" alt=""
                class="hover:opacity-75 transition duration-150 ease-in-out">
            </a>
          </li>
        </ul>
      </div>
      <span class="text-white text-opacity-70">Hello@finsweet.com 020 7993 2905</span>
    </div>
  </footer>
</template>
