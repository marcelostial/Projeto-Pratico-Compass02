<template>
  <div id="screenLeft">
    <div id="areaWelcome">
      <div id="logobrancamobile">
        <img
          draggable="false"
          src="@/assets/logo-Compass-branca.png"
          alt="Logo Compasso"
        />
      </div>
      <Title :level="1" firstTitleStyle="true" text="Olá," />
      <TextContent
        textFirstArea="true"
        text="Para continuar navegando de forma segura, efetue o login na rede."
      />
    </div>
    <form @submit.prevent="handleSubmit" id="areaLogin">
      <Title :level="2" posTitleStyle="true" text="Login" />
      <Input
        :formErrorStyle="this.$store.state.formErrorStyle"
        formUserStyle="true"
        type="text"
        required
        placeholder="Usuário"
        icon="iconuser.png"
        alt="Icon User"
      />
      <Input
        :formErrorStyle="this.$store.state.formErrorStyle"
        formUserStyle="true"
        type="password"
        required
        placeholder="Senha"
        icon="iconpas.png"
        alt="Icon Password"
      />
      <div id="areaErrorMsg">
        <TextContent
          v-show="errorMostrar"
          textErrorArea="true"
          text="Ops, usuário ou senha inválidos. Tente novamente!"
        />
      </div>
      <Input formSubmitStyle="true" type="submit" value="Continuar" />
    </form>
  </div>
</template>

<script>

import TextContent from '@/components/text/index.vue'
import Title from '@/components/title/index.vue'
import Input from '@/components/input/index.vue'

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

methods: {
    handleSubmit(){
      this.$store.commit('loginLogical')
      this.errorMostrar = true;
    },
},

beforeMount() {
    this.$store.commit('formErrorStyleMutations',false)
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
