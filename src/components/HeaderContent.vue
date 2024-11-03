<script setup lang="ts">
</script>

<template>
  <nav class="px-4 sm:px-12 w-full h-[80px] bg-x-black flex items-center justify-between">
    <img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo" class="h-8 sm:h-10">
    
    <!-- Menu Items -->
    <ul class="hidden sm:flex gap-4">
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
    </ul>
    
    <!-- Contact Button -->
    <a href="/contact" class="bg-x-blue px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out">
      Contact Us
    </a>
  </nav>
</template>
