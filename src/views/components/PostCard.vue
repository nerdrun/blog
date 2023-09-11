<script setup lang="ts">
import CategoryChip from './CategoryChip.vue';
import { PropType } from 'vue';
import { Post } from '@/models/Post';
defineProps({
  post: { required: true, type: Object as PropType<Post>, default: {} }
});

const navigateTo = (link: string) => window.open(link);
</script>
<template>
  <div
    class="flex md:flex-row flex-col items-center cursor-pointer border-b border-b-diminished-grey px-2 md:px-3 py-3 pt-8 md:py-6" 
    @click="() => navigateTo(post.link)"
  >
    <div class="md:w-[220px] md:h-[150px] w-full">
      <img 
        :src="post.image" 
        :alt="post.title" 
        class="object-cover w-full h-[150px] rounded-md" 
      />
    </div>
    <div class="md:ml-8 md:mt-0 mt-4">
      <CategoryChip :category="post.category" />
      <div class="md:my-6 text-xl">{{ post.title }}</div>
      <div class="text-diminished-black text-sm">{{ post.date }}</div>
    </div>
  </div>
</template>
<style scoped></style>