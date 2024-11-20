<template>
  <ul class="pinpoint-tree">
    <li>
      [{{ coupletNumber }}]
      <span
        @click="() => store.setCurrentNode(node.parentId)"
        v-html="node.text"
      />
      [id: {{ node.id }}]

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
  margin-left: 1rem;
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
