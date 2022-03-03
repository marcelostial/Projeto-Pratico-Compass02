<template>
    <div id="footer">
                <div id="footerHome">
                    <div id="textFooterArea">
                        <p id="textFooter">
                            Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                        </p>
                    </div>
                    <div id="barra"></div>
                    <div id="areaContador">
                        <p id="textContador"> Application refresh in</p>
                        <div id="areaSeconds">
                            <Timer/>
                            <div id="tSecond">seconds</div>
                        </div>
                    </div>
                    <button id="buttonNextNavigation">Continuar<br>Navegando</button>
                    <button id="buttonLogout">Logout</button>
                </div>
    </div> 
</template>

<script>
import Timer from "@/components/timer/index.vue";
export default {
    components: { Timer }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>