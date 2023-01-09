<template>

  <div>
    <h3>Menu Component  {{userId}}</h3>
  </div>

  <ul>
    <li v-for="m in showMenus" :key="m.path">
      <router-link :to="m.path"> {{m.name}}</router-link>
    </li>
  </ul>

</template>

<script setup>

import useLoginStore from "@/store/useLoginStore";
import {computed} from "vue";

const {getLoginInfo} = useLoginStore()


const userId = computed(() => {

  return getLoginInfo().id
})


const menus = [
  {path:"/m1", name:'Menu1', onlyLogin:true},
  {path:"/m2", name:'M2 Login'},
  {path:"/m3", name:'M3 Logout', onlyLogin:true},
  {path:"/m4", name:'Menu4'},
]

const showMenus = computed(() => {

  if(!getLoginInfo().id) {

    return menus.filter(m  => !m.onlyLogin)

  }
  return menus
})


</script>

<style scoped>

</style>
