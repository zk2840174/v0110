<template>
  <h1>Count Panel 1 </h1>

  <h1>{{value}}</h1>

</template>

<script setup>

import useCounterStore from "@/store/useCounterStore";
import {computed} from "vue";

const countStore = useCounterStore()

const value = computed(() => {
  return countStore.count
})

</script>

<style scoped>

</style>
