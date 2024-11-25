<template>
  <div>
    <img
      :src="figure.image"
      class="pinpoint-figure"
      @click="() => (isModalVisible = !isModalVisible)"
    />
    <VModal
      v-if="isModalVisible"
      @close="() => (isModalVisible = false)"
    >
      <img
        src="https://picsum.photos/id/237/200/300"
        @click="() => (isModalVisible = true)"
      />
    </VModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Figure } from '@/types'
import VModal from '../Modal.vue'

type Props = {
  figure: Figure
}

defineProps<Props>()

const isModalVisible = ref<boolean>(false)
</script>

<style>
.pinpoint-figure {
  width: 128px;
  height: 128px;
  object-fit: contain;
  border: 1px solid black;
  cursor: pointer;
}
</style>
