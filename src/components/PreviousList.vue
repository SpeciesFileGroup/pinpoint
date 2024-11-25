<template>
  <ul v-if="nodes?.length">
    <li>
      [{{ nodes[0].coupletNumber }}] {{ nodes[0].text }}
      <PreviousList :nodes="nodes.slice(1)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Node } from '@/types'
import PreviousList from './PreviousList.vue'

type Props = {
  nodes: Node[]
}

defineProps<Props>()
</script>
