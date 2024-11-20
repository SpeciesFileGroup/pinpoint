<template>
  <div class="pinpoint-node">
    <template v-if="node">
      <button
        type="button"
        @click="() => (store.state.currentNode = node)"
      >
        Go
      </button>
      <p>{{ node.text }}</p>
      <h3>Next</h3>
      <VTree
        v-for="child in node.children.map((id) => store.state.nodes[id])"
        :couplet-number="node.coupletNumber"
        :node="child"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import VTree from './Tree.vue'

import type { Node } from '@/types'
type Props = {
  node: Node
}

const props = defineProps<Props>()

const store = inject('store')
</script>

<style>
.pinpoint-node {
  border: 1px solid black;
  padding: 1rem 2rem;
}
</style>
