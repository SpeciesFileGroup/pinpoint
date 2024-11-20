<template>
  <div>
    <div
      v-for="figure in figures"
      :key="figure.image"
    >

  </div>
  </div>
</template>

<script setup lang="ts">
import { Figure } from '@/types'
import { inject } from 'vue';

type Props = {
  figures: Figure[]
}

defineProps<Props>()
</script>
