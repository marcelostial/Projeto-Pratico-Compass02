<template>
<div>
    <p :class="{
        textFirstArea: textFirstAreaData,
        textErrorArea: textErrorAreaData,
        homeText: homeTextData,
        textFooter: textFooterData,
        textContador: textContadorData,
        tSecond: tSecondData,
        loginError,
    }">
    {{ text }}
    </p>
</div>

</template>

<script>

export default {
    name: 'TextContent',
    props: {
        text: {
            type: String,
            default: 'Escreva um texto',
        },
        textFirstArea: {
            default: false,
        },
        textErrorArea: {
            default: false,
        },
        homeText: {
            default: false,
        },
        textContador: {
            default: false,
        },
        textFooter: {
            default: false,
        },
        tSecond: {
            default: false,
        },
        loginError: {
            default: false,
        }
    },

    data(){
        return{
            textFirstAreaData: this.textFirstArea,
            textErrorAreaData: this.textErrorArea,
            homeTextData: this.homeText,
            textContadorData: this.textContador,
            textFooterData: this.textFooter,
            tSecondData: this.tSecond,

        }
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>