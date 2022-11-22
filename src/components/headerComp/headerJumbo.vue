<template>
    <section class="jumbo d-flex justify-content-center">
        <div class="d-flex pro">
            <p>Award winning</p>
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
    height: 450px;
    background-image: url(../../assets/img/avadabarbers-about-introbackground.jpg);
    background-size: 90%;
}

.pro {
    // justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
}

h2 {
    color: $silver;
    font-size: 70px;
}

p {
    color: $colorFont;
    font-family: Arial;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
}
</style>