<script setup lang="ts">
import Sosmed from './SosmedContent.vue';
</script>

<template>
    <section class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <!-- Main Content -->
        <main class="mt-10 w-full max-md:mt-10 max-md:max-w-full mb-10 mb-5">
            <h1 class="self-center text-4xl font-bold tracking-tighter text-gray-800">List of Authors</h1>
            <div class="flex gap-5 max-md:flex-col">
                <!-- Individual Author Cards -->
                <router-link to="/author" class="flex flex-col w-3/12 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full bg-zinc-100 hover:bg-orange-50 max-md:px-5 max-md:mt-8">
                        <img src="@/assets/images/misc/Floyd Miles.png" alt="Author Image" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Floyd Miles</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <Sosmed />
                    </div>
                </router-link>

                <router-link to="/author" class="flex flex-col w-3/12 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full bg-zinc-100 hover:bg-orange-50 max-md:px-5 max-md:mt-8">
                        <img src="@/assets/images/misc/Dianne Russell.png" alt="Author Image" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Dianne Russell</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <Sosmed />
                    </div>
                </router-link>

                <router-link to="/author" class="flex flex-col w-3/12 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full bg-zinc-100 hover:bg-orange-50 max-md:px-5 max-md:mt-8">
                        <img src="@/assets/images/misc/Jenny Wilson.png" alt="Author Image" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Jenny Wilson</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <Sosmed />
                    </div>
                </router-link>

                <router-link to="/author" class="flex flex-col w-3/12 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full bg-zinc-100 hover:bg-orange-50 max-md:px-5 max-md:mt-8">
                        <img src="@/assets/images/misc/Leslie Alexander.png" alt="Author Image" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Leslie Alexander</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <Sosmed />
                    </div>
                </router-link>
            </div>
        </main>
    </section>
</template>