<template>
<div>
    <h1 v-if="level === 1"

    :class="{
    firstTitleStyle: firstTitleStyleData, 
    grauStyle: grauStyleData,
    homeTitle: homeTitleData

    }">
        {{ text }}
    </h1>
    <h2 v-else-if="level === 2"
    :class="{posTitleStyle: posTitleStyleData}">
        {{ text }}
    </h2>
    <h3 v-else-if="level === 3"
    :class="{homeTitleEspecial: homeTitleEspecialData}">
        {{ text }}
    </h3>
    <h4 v-else-if="level === 4">
        {{ text }}
    </h4>
    <h5 v-else-if="level === 5">
        {{ text }}
    </h5>
    <h6 v-else-if="level === 6">
        {{ text }}
    </h6>    
</div>
</template>

<script>
export default {
    name: 'Title',
    props:{
        level: {
            type: Number,
            required: true,
        },
        text:{
            type: String,
            required: true,
            default: 'Escreva um Titulo'
        },
        firstTitleStyle:{
            default: false,
        },
        posTitleStyle:{
            default: false,
        },
        grauStyle:{
            default: false,
        },
        homeTitleEspecial: {
            default: false,
        },
        homeTitle:{
            default: false,
        },
    },
    data(){
        return{
            firstTitleStyleData: this.firstTitleStyle,
            posTitleStyleData: this.posTitleStyle,
            grauStyleData: this.grauStyle,
            homeTitleEspecialData: this.homeTitleEspecial,
            homeTitleData: this. homeTitle,

        }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
