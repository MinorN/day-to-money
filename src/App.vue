<script setup lang="ts">
import { ref } from 'vue';


const count = ref(0)


const add = () => {
  count.value += 1
}
</script>

<template>
  <h1>hi</h1>
  <button @click="add">+1</button>
  {{ count }}
</template>

<style></style>
