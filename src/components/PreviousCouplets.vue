<template>
  <div class="pinpoint-previous-couplets">
    <h2>Previous couplets</h2>
    <div class="pinpoint-previous-list">
      <PreviousList :nodes="previousCouplets" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { Node } from '@/types'
import PreviousList from './PreviousList.vue'

type Props = {
  node: Node
}

const props = defineProps<Props>()
const store = inject('store')

const previousCouplets = computed(() => {
  const parents = []
  let parentId = props.node.id

  while (parentId !== null) {
    const parent = store.state.nodes[parentId]

    parentId = parent.parentId
    parents.unshift(parent)
  }

  parents.splice(0, 1)

  return parents
})
</script>
