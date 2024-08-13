<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Declare showMenu as a ref with a boolean type
const showMenu = ref<boolean>(true);
let lastScrollY = 0;

const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the menu
        showMenu.value = false;
    } else {
        // Scrolling up, show the menu
        showMenu.value = true;
    }
    lastScrollY = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="max-w-screen overflow-hidden overflow-y-auto">
    <!-- Conditionally render the NavBar based on the showMenu value -->
    <Navbar v-if="showMenu" class="fixed top-0 w-full z-[1000]"/>
    <div class="bg-customPurple dark:bg-gray-800 h-[90vh] py-24">
      <slot />
    </div>
    <FooterSection class=" h-[10vh] w-screen bg-customPurple"/>
  </div>
</template>
