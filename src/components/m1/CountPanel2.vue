<template>
  <h1>Count Panel 2</h1>

  <div>
    <v-btn variant="outlined" @click = "() => changeCount(1)"> INC</v-btn>
  </div>


  <div>
    <v-btn variant="outlined" @click = "() => changeCount(-1)"> DEC</v-btn>
  </div>

</template>

<script setup>

import useCounterStore from "@/store/useCounterStore";

const {changeCount} = useCounterStore()

</script>

<style scoped>

</style>
