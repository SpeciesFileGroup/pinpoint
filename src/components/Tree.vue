<template>
  <ul class="pinpoint-tree">
    <li>
      <span @click="() => store.setCurrentNode(node.parentId)">
      [{{ coupletNumber }}]
      <span v-html="node.text"/> <span v-if="isNaN(node.targetLabel)">[{{ node.targetLabel }}]</span>
      </span>
      <template v-for="id in node.children">
        <VTree
          v-if="store.state.nodes[id]"
          :node="store.state.nodes[id]"
          :couplet-number="node.coupletNumber"
        />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import VTree from '@/components/Tree.vue'
import type { Node } from '@/types'

type Props = {
  node: Node
  coupletNumber: string
}

defineProps<Props>()

const store = inject('store')
</script>

<style>
.pinpoint-tree {
  padding: 0;
  list-style: none;
}

.pinpoint-tree {
  ul {
    margin-left: 1rem;
  }

  span {
    cursor: pointer;
  }
}
</style>
