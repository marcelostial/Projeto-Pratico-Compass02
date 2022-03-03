<template>
<div>
    <p :class="{
        textFirstArea: textFirstAreaData,
        textErrorArea: textErrorAreaData,
        homeText: homeTextData,
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
        }
    },

    data(){
        return{
            textFirstAreaData: this.textFirstArea,
            textErrorAreaData: this.textErrorArea,
            homeTextData: this.homeText,

        }
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>