<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <main class="flex flex-col mb-10">
            <section class="flex flex-col items-center text-center text-gray-800 max-w-[749px] mx-auto mt-32">
                <h2 class="font-black uppercase tracking-[3px]">Contact us</h2>
                <h3 class="mt-3 text-5xl font-bold tracking-tighter max-md:text-4xl">Let's Start a Conversation</h3>
                <p class="mt-6 w-full text-zinc-500 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim.
                </p>
            </section>

            <section class="flex flex-col max-w-screen-md mx-auto mt-16">
                <div class="px-16 py-12 w-full bg-amber-300 max-md:px-5">
                    <div class="flex gap-5 max-md:flex-col">
                        <div class="flex flex-col w-6/12 max-md:w-full">
                            <h2 class="text-sm opacity-60">Working hours</h2>
                            <hr class="self-stretch mt-4 h-px border opacity-10" />
                            <p class="mt-4 font-bold">Monday To Friday</p>
                            <p class="font-bold">9:00 AM to 8:00 PM</p>
                            <p class="text-base opacity-60">Our Support Team is available 24/7</p>
                        </div>
                        <div class="flex flex-col w-6/12 max-md:w-full">
                            <h2 class="text-sm opacity-60">Contact Us</h2>
                            <hr class="self-stretch mt-4 h-px border opacity-10" />
                            <p class="mt-4 text-xl font-bold">020 7993 2905</p>
                            <p class="text-base opacity-60">hello@finsweet.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex flex-col max-w-screen-md text-gray-800 mx-auto mt-8">
                <div class="p-6 rounded-sm border border-zinc-500 border-opacity-50">
                    <label for="fullNameInput" class="sr-only">Full Name</label>
                    <input type="text" id="fullNameInput" placeholder="Full Name"
                        class="w-full bg-transparent outline-none" />
                </div>
                <div class="p-6 rounded-sm border border-zinc-500 border-opacity-50 mt-4">
                    <label for="emailInput" class="sr-only">Your Email</label>
                    <input type="text" id="emailInput" placeholder="Your Email"
                        class="w-full bg-transparent outline-none" />
                </div>

                <section class="flex flex-wrap gap-4 items-center max-w-screen-md mt-4">
                    <div class="flex flex-1 gap-10 p-6 border border-zinc-500 border-opacity-50 min-w-[240px]">
                        <select id="provinceSelect" class="bg-transparent border-none">
                            <option value="">Provinsi</option>
                        </select>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                            alt="" class="object-contain w-2" />
                    </div>
                    <div class="flex flex-1 gap-10 p-6 border border-zinc-500 border-opacity-50 min-w-[240px]">
                        <select id="citySelect" class="bg-transparent border-none">
                            <option value="">Kota</option>
                        </select>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                            alt="" class="object-contain w-2" />
                    </div>
                </section>

                <div class="p-6 pt-6 pb-24 rounded-sm border border-zinc-500 border-opacity-50 min-h-[144px] mt-4">
                    <label for="messageInput" class="sr-only">Message</label>
                    <input type="text" id="messageInput" placeholder="Message"
                        class="w-full bg-transparent outline-none" />
                </div>
            </section>

            <section class="flex flex-col max-w-screen-md mx-auto mt-4">
                <button class="text-2xl font-bold text-gray-800 hover:text-white">
                    <div class="px-16 py-4 w-full bg-blue-600">Send Message</div>
                </button>
            </section>
        </main>
    </MainLayout>
</template>
