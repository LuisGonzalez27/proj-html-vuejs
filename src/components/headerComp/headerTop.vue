<template>
    <section class="nav-top d-flex justify-content-center">
        <div class="my-container d-flex justify-content-between align-items-center">
            <img src="../../assets/img/avadabarbers-stickylogo-x2.png" class="logo">
            <div class="d-flex menu">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as*;

.nav-top {
    width: 100%;
    height: 120px;
    color: $white;
    margin: 0 auto;
    padding: 40px 0;
    position: fixed;
    z-index: 1000;

    img {
        height: 60px;
        cursor: pointer;
    }
}

.my-container {
    width: 60%;
}

.menu {
    width: 50px;
    justify-content: space-between;
}
</style>