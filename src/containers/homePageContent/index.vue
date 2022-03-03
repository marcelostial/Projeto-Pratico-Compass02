<template>
<div id="homeArea">
                <div id="logoCompass">
                    <img draggable="false" src="@/assets/bola-logo-Compass.png" alt="Bola Logo Compass">
                </div>
                <div id="areaText">
                    <Title :level=3 homeTitleEspecial=true text="Our mission is"/>
                    <TextContent homeText="true" text="Nossa missão é"/>
                    <Title :level=1 homeTitle="true" text="to transform the world"/>
                    <TextContent homeText="true" text="transformar o mundo"/>
                    <Title :level=1 homeTitle="true" text="building digital experiences"/>
                    <TextContent homeText="true" text="construindo experiências digitais"/>
                    <Title :level=1 homeTitle="true" text="that enabled our client's growth"/>
                    <TextContent homeText="true" text="que permitem o crescimento de nossos clientes"/>
                </div>
</div>
</template>

<script>
import Title from "@/components/title/index.vue";
import TextContent from "@/components/text/index.vue";

export default {
    components: { Title, TextContent }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>