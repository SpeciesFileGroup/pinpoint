<template>
  <div class="pinpoint-couplet">
    <div class="pinpoint-couplet-container">
      <button
        v-if="store.state.currentNode.parentId"
        class="pinpoint-button-up"
        type="button"
        @click="
          () =>
            (store.state.currentNode = store.state.nodes[currentNode.parentId])
        "
      >
        <slot name="button-up-label">Up</slot>
      </button>
      <div class="pinpoint-couplet-node">
        <h1 v-if="currentNode.parentId">
          Couplet {{ currentNode.coupletNumber }}
        </h1>

        <p
          v-if="isNaN(currentNode.targetLabel) && !currentNode.parentId"
          class="pinpoint-node-target"
        >
          <slot
            name="target"
            :label="currentNode.targetLabel"
            :id="currentNode.targetId"
          >
            {{ currentNode.targetLabel }}
          </slot>
        </p>
      </div>
    </div>
    <div class="pinpoint-couplet-children-container">
      <Node
        v-for="node in nodes"
        :node="node"
        :key="node.id"
      >
        <template #target="{ id, label }">
          <slot
            name="target"
            :id="id"
            :label="label"
          />
        </template>
      </Node>
    </div>
  </div>
</template>

<script setup>
import { inject, watch, ref, computed } from 'vue'
import Node from './Node.vue'

const store = inject('store')

const currentNode = computed(() => store.state.currentNode)
const nodes = computed(() => {
  const ids = store.state.currentNode.children

  return ids.map((id) => store.state.nodes[id])
})
</script>

<style>
.pinpoint-couplet-children-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
}
</style>
