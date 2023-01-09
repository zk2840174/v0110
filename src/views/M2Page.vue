<template>

  <MenuComponent></MenuComponent>

  <h1>M2 Page</h1>

  <div>

    <v-btn @click="handleClickLogin" >LOGIN</v-btn>

  </div>

</template>

<script setup>

import MenuComponent from "@/components/menu/MenuComponent.vue";

import useLoginStore from "@/store/useLoginStore";

const {setLoginInfo} = useLoginStore()

const handleClickLogin = () => {

  setLoginInfo('A'+Date.now())

}

</script>

<style scoped>

</style>
