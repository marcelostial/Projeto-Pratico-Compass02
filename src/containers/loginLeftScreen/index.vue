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
                <TextContent v-show="continuar" textErrorArea=true text="Ops, usuário ou senha inválidos. Tente novamente!" /> 
            </div>
            <Input formSubmitStyle=true type="submit" value="Continuar"/>
        </form>
    </div> 

</template>

<script>

import TextContent from '@/components/text/index.vue'
import Title from '@/components/title/index.vue'
import Input from '@/components/input/index.vue'
import router from '@/router';

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
      continuar: false,
    }
},

state: {
    isLogin: false,
},

mutations: {
   setLogged(state){
      state.isLogin = true;
    }
},

methods: {
  login() {
      if (this.user == "admin" && this.pass == "admin"){
          this.setLogged()
          router.push("/home")

      } else {
      (this.continuar = true),
        (this.Input.formErrorStyle=true);
      }
    },
   },
};

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
