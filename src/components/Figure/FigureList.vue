<template>
  <div class="pinpoint-figure-list">
    <FigureItem
      v-for="figure in figures"
      :key="figure.image"
      :figure="figure"
    />
  </div>
</template>

<script setup lang="ts">
import { Figure } from '@/types'
import FigureItem from './FigureItem.vue'

type Props = {
  figures: Figure[]
}

defineProps<Props>()
</script>

<style>
.pinpoint-figure-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
