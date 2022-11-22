<template>
    <header>
        <div class="back-img">
            <section class="my-container">
                <div>
                    <h1>Barber Shop</h1>
                    <div class="separator"></div>
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
import headerJumbo from './headerComp/headerJumbo.vue';

export default {
    name: "appHeader",
    components: {
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
    width: 100%;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
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
}

.back-logo {
    max-width: 30%;
}

h1 {
    color: $white;
    font-size: 85px;
}

h5 {
    font-family: Arial;
    color: $silver;
    padding-bottom: 20px;
}

.separator {
    border-bottom: 4px solid $colorFont;
    width: 50%;
    margin-bottom: 20px;
}
</style>