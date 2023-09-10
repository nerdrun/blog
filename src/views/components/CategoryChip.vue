<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Category } from '../../enums/category.enum';

defineProps({
  category: { required: true, type: String as PropType<Category>, default: '' },
});

const color = computed(() => {
  return '';
});
</script>
<template>
</template>
<style scoped></style>