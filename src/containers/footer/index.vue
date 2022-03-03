<template>
    <div id="footer">
                <div id="footerHome">
                    <div id="textFooterArea">
                       <TextContent textFooter=true text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."/>
                    </div>
                    <div id="barra"></div>
                    <div id="areaContador">
                        <TextContent textContador=true text="Application refresh in"/>
                        <Timer/>
                    </div>
                    <button id="buttonNextNavigation">Continuar<br>Navegando</button>
                    <button id="buttonLogout" @click="logout">Logout</button>
                </div>
    </div> 
</template>

<script>
import Timer from "@/components/timer/index.vue";
import TextContent from '@/components/text/index.vue';
import router from '@/router/index.js'

export default {
    components: {
        Timer, 
        TextContent, 
        },

    methods: {
        logout(){
            if(this.logout){
                router.push({name:'Login'})
            }
     }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>