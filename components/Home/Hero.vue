<script setup lang="ts">
</script>

<template>
    <div class="bg-customPurple dark:bg-gray-800 flex justify-center items-center h-1/3 md:h-1/2">
        <div class="max-w-6xl w-full flex items-center justify-between gap-10 md:py-10 py-10">
            <!-- Text on the left -->
            <div class="w-1/2 flex flex-col justify-center items-end text-right gap-6 px-5 hidden md:block">
                <h1 class="text-5xl font-black text-white font-inter leading-snug">
                    FINDING BUS TIMES<br/>
                    HAS NEVER BEEN<br/>
                    THIS EASY BEFORE
                </h1>
                <p class="text-lg text-white mt-4">
                    BUS TIMES AT YOUR FINGERTIPS - EFFORTLESSLY
                </p>
            </div>
            <!-- Image on the right -->
            <div class="w-full md:w-1/2 flex justify-center items-center pl-4">
                <img src="../../assets/img/pngwing.com (2).png" alt="Description" class=" w-56 md:w-full max-w-full h-auto floating" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.floating {
    animation: float 3s ease-in-out infinite;
}

.font-inter {
    font-family: 'Inter', sans-serif;
}
</style>
