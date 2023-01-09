import {defineStore} from "pinia";
import {ref} from "vue";



const useCounterStore = defineStore('counter', () => {

  const count = ref(10)

  const changeCount = (amount) => {

    console.log('changeCount..........')
    count.value += amount
  }

  return {count, changeCount}

})

export default useCounterStore
