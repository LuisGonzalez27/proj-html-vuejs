<template>
    <header>
        <headerTop />
        <div class="back-img">
            <section class="my-container d-flex align-items-center justify-content-between">
                <div>
                    <h1>Barber Shop</h1>
                    <h5>The Pinnacle of Male Grooming</h5>
                    <button class="my-btn">Learn More</button>
                </div>
                <img src="../assets/img/avadabarbers_hero_focalmirror.png" class="back-logo">
            </section>
        </div>
    </header>
    <headerJumbo />
</template>

<script>
import headerTop from './headerComp/headerTop.vue';
import headerJumbo from './headerComp/headerJumbo.vue';


export default {
    name: "appHeader",
    components: {
        headerTop,
        headerJumbo,
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

header {
    position: relative;
    min-height: 960px;
}

.my-container {
    width: 80%;
    padding-top: 80px;
    margin: 0 auto;
}

.back-img {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    top: 0;
    z-index: -2;
}

.back-logo {
    max-width: 35%;
    z-index: -1;
}

h1 {
    color: $white;
    font-size: 100px;
}

h5 {
    font-family: Arial;
    color: $silver;
}
</style>