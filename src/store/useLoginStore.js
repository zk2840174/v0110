import {defineStore} from "pinia";
import {ref} from "vue";
import VueCookies from "vue-cookies";


const useLoginStore = defineStore('userLoginStore', () => {

  const loginInfo = ref({id:null})

  const getLoginInfo = () => {

    console.log("getLoginInfo")

    if(loginInfo.value.id){
      return loginInfo.value
    }

    //check cookie
    const cookieValue = VueCookies.get("loginCookie")

    //시간 체크 필요함
    if(cookieValue){
      loginInfo.value.id = cookieValue
    }

    return loginInfo.value
  }

  const setLoginInfo = (username) => {

    console.log("setLoginInfo")

    loginInfo.value.id = username

    VueCookies.set("loginCookie", username, '30d')

  }

  return {getLoginInfo, setLoginInfo}


})

export default useLoginStore
