<template>
  <div class="pinpoint-node-container">
    <template v-if="node">
      <div class="pinpoint-node">
        <button
          v-if="node.children.length"
          class="pinpoint-button-go"
          type="button"
          @click="() => (store.state.currentNode = node)"
        >
          Go
        </button>

        <p class="pinpoint-node-text">{{ node.text }}</p>
        <p
          v-if="isNaN(node.targetLabel)"
          class="pinpoint-node-target"
        >
          <slot
            name="target"
            :label="node.targetLabel"
            :id="node.targetId"
          >
            {{ node.targetLabel }}
          </slot>
        </p>

        <FigureList :figures="node.figures" />
      </div>
      <div
        v-if="node.children.length"
        class="pinpoint-node-children-container"
      >
        <div class="pinpoint-node-next-container">
          <button
            class="pinpoint-node-next-button"
            type="button"
            @click="
              store.setCurrentNode(store.state.nodes[node.children[0]].parentId)
            "
          >
            Next
          </button>
        </div>
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
  border: 1px solid black;
  padding: 1rem 2rem;
}
.pinpoint-node {
  border: 1px solid black;
  padding: 1rem 2rem;
}
</style>
