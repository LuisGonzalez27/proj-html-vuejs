<template>
    <section class="nav-top d-flex justify-content-between align-content-center">
        <img src="../../assets/img/avadabarbers-stickylogo-x2.png" class="logo">
        <div class="d-flex menu">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bars"></i>
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
    width: 80%;
    height: 50px;
    color: $white;
    margin: 0 auto;
    padding-top: 30px;

    img {
        height: 50px;
    }
}

.menu {
    width: 50px;
    justify-content: space-between;
}
</style>