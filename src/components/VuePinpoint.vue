<template>
  <PreviousCouplets
    v-if="currentNode?.parentId"
    :node="currentNode"
  />
  <Couplet v-if="currentNode" />
</template>

<script setup lang="ts">
import { computed, ref, provide, watch } from 'vue'
import { useKeyStore } from '@/store/key'
import Couplet from './Couplet.vue'
import PreviousCouplets from './PreviousCouplets.vue'

type Props = {
  keyId: Number
  projectToken: String
  baseUrl: string
}

const props = defineProps<Props>()
const store = useKeyStore(props)

const currentNode = computed(() => store.state.currentNode)

provide('store', store)

watch(
  () => props.keyId,
  () => {
    if (props.keyId) {
      store.loadKey(props.keyId)
    }
  },
  {
    immediate: true
  }
)
</script>
