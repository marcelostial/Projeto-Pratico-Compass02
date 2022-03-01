<template>
<div>
    <p :class="{
        textFirstArea: textFirstAreaData,
        textErrorArea: textErrorAreaData,
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
            default: false
        },
    },

    data(){
        return{
            textFirstAreaData: this.textFirstArea,
            textErrorAreaData: this.textErrorArea,

        }
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>