<template>
        <div id="areaHorario">
            <div id="horarioStyle" v-html="userHora"></div>
               <div id="dataStyle" v-html="userData"></div>
            </div>
</template>

<script>
import {userDiaSemana} from '@/constants/userDiaSemana.js'
import {userMes} from '@/constants/userMes.js'

export default {
    name:'Clock',

    data(){
        return{
            userHora: "",
            userData: "",
        }
    },

    methods: {
        clockLogical(){
                let data=new Date();
                let horas=data.getHours();
                let minutos=data.getMinutes();

                let userHora = `${horas <= 9 ? "0" : ""}${horas}:${minutos <= 9 ? "0" : ""}${minutos}`
                this.userHora = userHora;

                let diaSemana=data.getDay();
                let dia=data.getDate();
                let mes=data.getMonth();
                let ano=data.getFullYear();

                let userData = `${userDiaSemana[diaSemana]}, ${dia <= 9 ? "0" : ""}${dia} de ${userMes[mes]} de ${ano}`
                this.userData = userData;
         }

    },
    created(){
        setInterval(() => {
            this.clockLogical()
    }, 0);
  }
} 

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>