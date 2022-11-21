<template>
    <section class="jumbo d-flex justify-content-center">
        <div class="d-flex pro">
            <p>Award width</p>
            <h2>Pro Barbers</h2>
            <button class="my-btn">Met Your new barber</button>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as*;

.jumbo {
    width: 100%;
    height: 300px;
    background-image: url(../../assets/img/avadabarbers-about-introbackground.jpg);
    background-size: 60%;
}

.pro {
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

h2 {
    color: $goldenRod;
}

p {
    color: $white;
}
</style>