<template>
  <VuePinpoint v-bind="config" />
  <DemoPanelAPI @set="(data) => (config = { ...data })" />
</template>

<script setup>
import { ref } from 'vue'
import VuePinpoint from './components/VuePinpoint.vue'
import DemoPanelAPI from './components/Demo/DemoPanelAPI.vue'

const config = ref({})
</script>
