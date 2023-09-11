<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Category } from '@/enums/category.enum';

const props = defineProps({
  category: { required: true, type: String as PropType<Category>, default: '' },
});

const categoryText = computed(() => {
  const category = props.category;
  if(category === Category.BLOG) return 'Blog Post';
  else if(category === Category.COURSE) return 'Course';
  return '';
});
const color = computed(() => {
  const category = props.category;
  if(category === Category.BLOG) return 'text-blog';
  else if(category === Category.COURSE) return 'text-course';
  return '';
});
</script>
<template>
  <div :class="[color]">{{ categoryText }}</div>
</template>
<style scoped></style>