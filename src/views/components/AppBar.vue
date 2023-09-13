<script setup lang="ts">
const links = [
  { name: 'github', path: new URL('../../assets/logos/github.svg', import.meta.url).href, url: 'https://github.com/nerdrun' },
  { name: 'linkedin', path: new URL('../../assets/logos/linkedin.svg', import.meta.url).href, url: 'https://www.linkedin.com/in/nerdrun' },
  { name: 'medium', path: new URL('../../assets/logos/medium.svg', import.meta.url).href, url: 'https://nerdrun.medium.com' },
];
</script>
<template>
  <section class="flex justify-center sticky top-0 bg-light-dark py-4 border-b border-b-white">
    <div class="w-[1024px] flex justify-between items-center px-6 md:px-0">
      <div class="text-lg">
        <router-link to="/">Nerdrun</router-link>
      </div>
      <div class="flex justify-center itmes-center">
        <div 
          v-for="link in links" 
          :key="link.name" 
          class="w-10 h-10 flex justify-center items-center"
        >
          <a :href="link.url" target="_blank" class="cursor-pointer">
            <img class="w-6 h-6" :src="link.path" :alt="link.name" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>