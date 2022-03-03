<template>
   <div id="areaSeconds">
       <div id="nSecond" v-html="timerSeconds"/>
       <TextContent text="seconds" tSecond=true /> 
</div>

</template>

<script>
import router from '@/router/index.js';
import TextContent from '@/components/text/index.vue';

export default {
     data(){
        return{
            timerSeconds: "600",
        }
    },

    name: "Timer",
    components: {
        TextContent,
    },

    methods:{
        timerLogical(){
            let seconds = 599;
            setInterval(() => {
            this.timerSeconds = seconds;
            seconds--

            if (!seconds){
                router.push({name:'Login'})
                }
            }, 1000);
          }
    },

    mounted(){
     this.timerLogical()
    }
} 
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>