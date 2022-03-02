<template>
  <div>
    <Header/>
    <HomePageContent/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/containers/header/index.vue'
import HomePageContent from '@/containers/homePageContent/index.vue'
import Footer from '@/containers/footer/index.vue'
export default {
    name:"Home",
    components: {
      Header,
      HomePageContent,
      Footer,
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>