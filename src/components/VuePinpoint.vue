<template>
  <div></div>
</template>

<script setup lang="ts">
import { makeHttpClient } from '../utils'

type Props = {
  keyId: Number
  projectToken: String
}

const props = defineProps<Props>()
</script>
