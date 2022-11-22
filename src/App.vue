<template>
  <div id="navbar">
    <nav :class="{ 'onScroll': !view.scrollPage }">
      <headerTop />
    </nav>
  </div>
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
import headerTop from './components/headerComp/headerTop.vue';

export default {
  name: '#navbar',
  components: {
    appHeader,
    appMain,
    AppFooter,
    headerTop,
  },
  data() {
    return {
      view: {
        scrollPage: true
      }
    }
  },
  methods: {
    //Evento di scroll della nav
    handleScroll() {
      if (window.scrollY > 0) {
        if (this.view.scrollPage) this.view.scrollPage = false;
      } else {
        if (!this.view.scrollPage) this.view.scrollPage = true;
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as*;

nav {
  position: fixed;
  width: 100%;
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all .5s ease-in-out;
  z-index: 900;

  &.onScroll {
    background-color: $codGray;
    height: 80px;
  }
}
</style>