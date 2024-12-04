<template>
  <div class="pinpoint-node-container">
    <template v-if="node">
      <div class="pinpoint-node">
        <button
          v-if="node.children.length"
          type="button"
          @click="() => (store.state.currentNode = node)"
        >
          Go
        </button>

        <p>{{ node.text }}</p>
        <FigureList :figures="node.figures" />
      </div>
      <div v-if="node.children.length">
        <h3>Next</h3>
        <VTree
          v-for="child in node.children.map((id) => store.state.nodes[id])"
          :couplet-number="node.coupletNumber"
          :node="child"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Node } from '@/types'
import { inject } from 'vue'
import VTree from './Tree.vue'
import FigureList from './Figure/FigureList.vue'

type Props = {
  node: Node
}

defineProps<Props>()

const store = inject('store')
</script>

<style>
.pinpoint-node-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  padding: 1rem 2rem;
}
.pinpoint-node {
  border: 1px solid black;
  padding: 1rem 2rem;
}
</style>
