<template>
  <ul v-if="nodes?.length">
    <li>
      <span
        class="pinpoint-previous-list-item"
        @click="() => store.setCurrentNode(nodes[0].id)"
        >[{{ nodes[0].coupletNumber - 1 }}] {{ nodes[0].text }}</span
      >
      <PreviousList :nodes="nodes.slice(1)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { Node } from '@/types'
import PreviousList from './PreviousList.vue'

type Props = {
  nodes: Node[]
}

defineProps<Props>()

const store = inject('store')
</script>

<style>
.pinpoint-previous-list-item {
  cursor: pointer;
}
</style>
