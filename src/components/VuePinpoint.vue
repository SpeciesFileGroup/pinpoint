<template>
  <PreviousCouplets
    v-if="currentNode?.parentId"
    :node="currentNode"
  />
  <Couplet v-if="currentNode" />
  <div v-if="error">{{ error.message }}</div>
</template>

<script setup lang="ts">
import { computed, ref, provide, watch } from 'vue'
import { useKeyStore } from '@/store/key'
import Couplet from './Couplet.vue'
import PreviousCouplets from './PreviousCouplets.vue'
import { EventNames } from '@/constants'

type Props = {
  leadId: Number
  projectToken: String
  baseUrl: string
}

const props = defineProps<Props>()
const emit = defineEmits(Object.values(EventNames))

const store = useKeyStore(props)
const currentNode = computed(() => store.state.currentNode)
const error = ref(null)

provide('store', store)

watch(
  [() => props.leadId, () => props.projectToken, () => props.baseUrl],
  () => {
    store.reset()
    store.setConfig(props)
    error.value = null

    if (props.leadId && props.baseUrl && props.projectToken && props.baseUrl) {
      emit(EventNames.Start)
      emit(EventNames.Loading)
      store
        .loadKey(props.leadId)
        .then((response) => {
          emit(EventNames.End, response)
        })
        .catch((response) => {
          emit(EventNames.Error, response)
          error.value = response
        })
    }
  },
  {
    immediate: true
  }
)
</script>
