<template>
<div id="loginPage">
    <LoginLeftScreen />
    <LoginRightScreen />
</div>

</template>

<script>
import LoginLeftScreen from "@/containers/loginLeftScreen/index.vue";
import LoginRightScreen from "@/containers/loginRightScreen/index.vue";

export default {
    components: {
    LoginLeftScreen,
    LoginRightScreen
}
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>