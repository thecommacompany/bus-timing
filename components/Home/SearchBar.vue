<script setup lang="ts">

</script>

<template>
    <div class="bg-customPurple py-10 px-5 flex flex-col items-center justify-center">
        <div class="w-full md:w-4/5 bg-gray-100 rounded-2xl shadow-xl flex flex-col md:flex-row p-4 gap-4 relative">
            <!-- Portion 1: From -->
            <div class="flex items-center border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4 relative">
                <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-4xl" />
                <div class="flex flex-col">
                    <label class="text-sm font-extrabold text-gray-800 font-inter">From</label>
                    <input type="text" placeholder="Enter Location" class="font-extrabold font-inter mt-1 mr-4 rounded bg-transparent" />
                </div>
                <!-- Overlay Icon between Portion 1 and Portion 2 [Large Devices]-->
                <div class="absolute top-1/2 left-[95%] transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hidden md:block">
                    <Icon name="material-symbols:swap-horiz-rounded" class="text-customPurple text-sm" />
                </div>
                <!-- Overlay Icon between Portion 1 and Portion 2 [Small Devices]-->
                <div class="absolute top-[95%] left-[80%] transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 block md:hidden">
                    <Icon name="material-symbols:swap-vert-rounded" class="text-customPurple text-sm" />
                </div>
            </div>
            
            <!-- Portion 2: To -->
            <div class="flex items-center border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4 relative">
                <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-4xl" />
                <div class="flex flex-col">
                    <label class="text-sm font-extrabold text-gray-800 font-inter">To</label>
                    <input type="text" placeholder="Enter Location" class="font-extrabold font-inter mt-1 mr-4 rounded bg-transparent" />
                </div>
            </div>

            <!-- Portion 3: Date you need to Travel -->
            <div class="flex flex-col md:flex-row items-center pt-4 md:pt-0 md:pl-4" style="flex-grow: 1;">
                <div class="flex items-center">
                    <Icon name="material-symbols:calendar-month-rounded" class="text-gray-700 mr-2 text-4xl" />
                    <div class="flex flex-col mr-4">
                        <label class="text-sm font-bold text-gray-800 font-inter">Date you need to Travel</label>
                        <input type="text" value="Friday, 09 Aug" class="text-gray-400 font-extrabold font-inter mt-1 rounded bg-transparent" />
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <button class="text-sm text-white bg-customPurple hover:bg-purple-900 font-bold py-1 px-3 m-1 rounded-lg">Tomorrow</button>
                    <button class="text-sm text-white bg-customPurple hover:bg-purple-900 font-bold py-1 px-3 m-1 rounded-lg">Day After Tomorrow</button>
                </div>
            </div>
        </div>
        <!-- Search Button placed below the card -->
        <button class="mt-5 bg-[#3D7184] text-white font-bold text-2xl py-2 opacity-80 px-4 rounded-2xl flex items-center justify-center w-60 hover:bg-opacity-100 transition">
            <Icon name="material-symbols:search-rounded" class="text-4xl mr-2" />
            SEARCH
        </button>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

.font-inter {
    font-family: 'Inter', sans-serif;
}
</style>
