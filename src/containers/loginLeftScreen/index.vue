<template>
    <div id="screenLeft">
        <div id="areaWelcome">
            <div id="logobrancamobile"><img draggable="false" src="@/assets/logo-Compass-branca.png" alt="Logo Compasso"> </div>
            <Title :level=1 firstTitleStyle=true text="Olá," />
            <TextContent textFirstArea=true text="Para continuar navegando de forma segura, efetue o login na rede." />
        </div>
        <form @submit.prevent="login" id="areaLogin">
            <Title :level=2 posTitleStyle=true text="Login" />
            <Input formUserStyle=true type="text" required placeholder="Usuário" icon="iconuser.png" alt="Icon User" v-model="user"/>
            <Input :style="formErrorStyle" formUserStyle=true type="password" required placeholder="Senha" icon="iconpas.png" alt="Icon Password" v-model="pass" />
            <div id="areaErrorMsg">
                <TextContent v-show="errorMostrar" textErrorArea=true text="Ops, usuário ou senha inválidos. Tente novamente!" /> 
            </div>
            <Input formSubmitStyle=true type="submit" value="Continuar" />
        </form>
    </div> 

</template>

<script>

import TextContent from '@/components/text/index.vue'
import Title from '@/components/title/index.vue'
import Input from '@/components/input/index.vue'
import router from '@/router';
import { loginConst } from '@/constants/login.js'

export default {
    name: 'LoginLeftScreen',
    components: {
    TextContent,
    Title,
    Input,
},

data(){
    return{
      user: "",
      pass: "",
      errorMostrar: false,
    }
},

state: {
    isLogged: false,
},

mutations: {
   setLogged(state){
       state.isLogged = true
    //   if(this.submitContinuar){
    //       router.push({name:'Home'}) 
    }
   },

methods: {
  loginLogical() {
      loginConst()
      if (this.user == "admin" && this.pass == "admin"){
         this.setLogged()
         router.push({name:'Home'}) 
      }
      else {
        this.errorMostrar = true;
        this.Input.formErrorStyle=true;
      }
    },
   },
   created() {
       this.loginLogical()
   },
};

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
