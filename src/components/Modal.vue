<template>
  <div
    class="pinpoint-modal-wrapper"
    @click="emit('close')"
    @key.esc.stop="emit('close')"
  >
    <div
      class="pinpoint-modal-container"
      @click.stop
    >
      <div class="pinpoint-modal-panel">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

const handleKeys = (e) => {
  if (e.key === 'Escape') {
    e.stopPropagation()
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeys)
  document.body.classList.add('overflow-hidden')
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeys)
  document.body.classList.remove('overflow-hidden')
})
</script>

<style>
.pinpoint-modal-wrapper {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.pinpoint-modal-panel {
  background-color: white;
  overflow-x: auto;
  height: 100%;
  max-height: 100%;
}

.pinpoint-modal-container {
  height: 100%;
  margin: auto auto;

  @media (min-width: 768px) {
    height: auto;
  }
}
</style>
