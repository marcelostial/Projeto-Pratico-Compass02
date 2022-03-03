<template>
<div id="nSecond" v-html="timerSeconds"/>
</template>

<script>
import router from '../../router/index.js'

export default {
     data(){
        return{
            timerSeconds: "",
        }
    },

    name: "Timer",

    methods:{

        timerLogical(){
            let seconds = 600;
            setInterval(() => {
            this.timerSeconds = seconds;
            seconds--

            if (!seconds){
                router.push({name:'Login'})
                }
            }, 1000);
          }
    },

    created(){
        this.timerLogical()
    },
}  
</script>

<style>

</style>