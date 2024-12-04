<template>
  <VuePinpoint
    v-bind="config"
    @loading="() => (isLoading = true)"
    @end="() => (isLoading = false)"
    @error="() => (isLoading = false)"
  />
  <DemoPanelAPI
    @set="(data) => (config = { ...data })"
    :disabled="isLoading"
  />
  <div
    class="demo-loading"
    v-if="isLoading"
  >
    <h1>Loading...</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VuePinpoint from './components/VuePinpoint.vue'
import DemoPanelAPI from './components/Demo/DemoPanelAPI.vue'

const config = ref({})
const isLoading = ref(false)
</script>

<style scoped>
.demo-loading {
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
