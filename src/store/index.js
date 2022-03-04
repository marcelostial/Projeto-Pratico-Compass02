import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userValue: "",
    userPassword: "",
    loginError: false,
    formErrorStyle: false,
  },
  getters: {
  },
  mutations: {
    setUser(state, payload){
      state.userValue = payload;
    },
    setPassword(state, payload){
      state.userPassword = payload;
    },

    formErrorStyleMutations(state, payload){
      state.formErrorStyle = payload;
    },

    loginErrorStyleMutations(state, payload){
      state.loginError = payload;
    },

    loginLogical(state) {
      if (state.userValue === "admin" && state.userPassword === "admin"){
         router.push({name:'Home'}) 
      }
      else {
        state.loginError = true;
        state.formErrorStyle=true;
      }
    },
    
  },
  actions: {
  },
  modules: {
  }
})
