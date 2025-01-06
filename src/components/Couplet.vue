<template>
  <div>
    <button
      v-if="store.state.currentNode.parentId"
      type="button"
      @click="
        () =>
          (store.state.currentNode =
            store.state.nodes[store.state.currentNode.parentId])
      "
    >
      Up
    </button>
    <h1>Couplet {{ store.state.currentNode.coupletNumber }}</h1>

    <div>
      <p>{{ store.state.currentNode.text }}</p>
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
