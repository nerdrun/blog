<script setup lang="ts">
import PostCard from '@/views/components/PostCard.vue';
import PrefaceCard from '@/views/components/PrefaceCard.vue';
import posts from '@/constants/posts';
</script>
<template>
  <div class="flex justify-center p-5 pt-10">
    <PrefaceCard />
  </div>
  <div class="flex justify-center p-5 pt-10">
    <section class="w-[1024px] pb-16">
      <div v-for="post in posts" :key="post.year">
        <div class="text-2xl my-8">{{ post.year }}</div>
        <PostCard v-for="(content, index) in post.contents" :key="index" :post="content" />
      </div>
    </section>
  </div>
</template>