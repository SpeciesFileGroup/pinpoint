<template>
  <h2>Previous couplets</h2>
  <PreviousList :nodes="previousCouplets" />
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
  let parentId = props.node.parentId

  while (parentId !== null) {
    const parent = store.state.nodes[parentId]

    parentId = parent.parentId
    parents.push(parent)
  }

  return parents.reverse()
})
</script>
