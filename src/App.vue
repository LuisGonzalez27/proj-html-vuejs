<template>
  <div id="offCanvas">
    <div ref="mySidenav" id="mySidenav" class="sidenav">
      <a @click="closeNav" class="closebtn"><i class="fa-solid fa-xmark"></i></a>
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">About Us</a>
      <a href="#">Shop</a>
      <a href="#">Our Team</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>
    </div>
    <div class="menu">
      <span><i class="fa-solid fa-cart-shopping fa-lg"></i></span>
      <span @click="openNav"><i class="fa-solid fa-bars fa-lg"></i></span>
    </div>
  </div>

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
  name: 'App',
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
    },
    openNav() {
      let vm = this;
      vm.$refs.mySidenav.style.width = "100%";
    },
    closeNav() {
      let vm = this;
      vm.$refs.mySidenav.style.width = "0";
    },
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

#offCanvas {
  position: fixed;
  width: 100%;
  background-color: transparent;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

/* The side navigation menu */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 100;
  background-color: $codGray;
  overflow-x: hidden;
  transition: 0.5s;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

// menu link
.sidenav a {
  padding: 10px 0;
  text-decoration: none;
  font-size: 25px;
  color: $white;
  transition: 0.3s;
  font-family: Arial;
}

.sidenav a:hover {
  color: $colorFont;
}

//pulsante close
.sidenav .closebtn {
  position: absolute;
  top: 20px;
  right: 60px;
  font-size: 30px;
}

.menu {
  color: $white;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 350px;
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu span:hover {
  color: $colorFont;
}
</style>