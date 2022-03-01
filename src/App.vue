<template>
<div>
    <LoginPage />
</div>
</template>

<script>
import LoginPage from "./views/loginPage/index.vue";

export default {
    name: 'Login',
    components: { 
    LoginPage,
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

*{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
}
</style>