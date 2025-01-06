<template>
  <div class="demo-panel-api">
    <div>
      <button
        type="button"
        @click="toggle"
      >
        {{ isVisible ? '-' : '+' }}
      </button>
    </div>
    <template v-if="isVisible">
      <div>
        <label>API Url</label>
        <input
          type="text"
          v-model="config.baseUrl"
        />
      </div>

      <div>
        <label>Project token</label>
        <input
          type="text"
          v-model="config.projectToken"
        />
      </div>

      <div>
        <label>Lead ID</label>
        <input
          type="text"
          v-model="config.leadId"
        />
      </div>

      <button
        type="button"
        :disabled="disabled"
        @click="() => emit('set', config)"
      >
        Load
      </button>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['set'])
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const config = ref({
  leadId: 103,
  baseUrl: 'http://localhost:3000/api/v1',
  projectToken: '3oerVKf82_196cIECvHYNg'
})
const isVisible = ref(true)

function toggle() {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
.demo-panel-api {
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  gap: 0.5rem;
  font-size: 14px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1.5rem 1.5rem;
  border-bottom-left-radius: 0.5rem;

  label {
    display: block;
  }
}
</style>
