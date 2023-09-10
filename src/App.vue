<script setup lang="ts">
import AppBar from './views/AppBar.vue';
import Preface from './views/Preface.vue';
import posts from './constants/posts';
</script>
<template>
  <AppBar />
  <div class="flex justify-center p-4 pt-10">
    <Preface />
  </div>
  <div class="flex justify-center p-4 pt-10">
    <section class="w-[1024px]">
      <div v-for="post in posts" :key="post.year">
        <div>{{ post.year }}</div>
        <div v-for="(content, index) in post.contents" :key="index">
          <div>{{ content.title }}</div>
          <div>{{ content.link }}</div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
