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
      <Node :node="side.left" />
      <Node :node="side.right" />
    </div>
  </div>
</template>

<script setup>
import { inject, watch, ref, computed } from 'vue'
import Node from './Node.vue'

const store = inject('store')
const left = ref(null)
const right = ref(null)

const side = computed(() => {
  const [leftId, rightId] = store.state.currentNode.children

  return {
    left: store.state.nodes[leftId],
    right: store.state.nodes[rightId]
  }
})
</script>

<style>
.pinpoint-couplet-children-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
