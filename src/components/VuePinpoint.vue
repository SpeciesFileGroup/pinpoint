<template>
  <Couplet v-if="store.state.currentNode" />
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import { useKeyStore } from '@/store/key'
import Couplet from './Couplet.vue'

type Props = {
  keyId: Number
  projectToken: String
  baseUrl: string
}

const props = defineProps<Props>()
const store = useKeyStore(props)

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
