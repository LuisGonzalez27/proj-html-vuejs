<template>
  <appHeader />
  <main>
    <appMain />
  </main>
  <AppFooter />

</template>

<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import AppFooter from './components/appFooter.vue';

export default {
  components: {
    appHeader,
    appMain,
    AppFooter,
  }
}
</script>

<style lang="scss" scoped>

</style>