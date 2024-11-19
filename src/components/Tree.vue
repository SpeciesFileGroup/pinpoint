<template>
  <ul>
    <li>
      <VTree />
    </li>
  </ul>
</template>

<script setup>
import VTree from './Tree'

defineProps({
  couplets: {
    type: items
  }
})
</script>
