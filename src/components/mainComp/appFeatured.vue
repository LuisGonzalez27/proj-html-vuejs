<template>
    <section class="my-container d-flex justify-content-center">
        <div class="d-flex my-center">
            <div class="row">
                <div class="reviews" v-for="(item, index) in featured" :key="index">
                    <div class="left">
                        <img :src="getImg(item.img)" alt="">
                    </div>
                    <div class="right">
                        <p class="mb-0 second-title">This monts featured product</p>
                        <h2>Shaving butter</h2>
                        <p>{{ item.text }}</p>
                        <button class="my-btn text-center">Buy now</button>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "appReviews",

    props: {
        featured: Array,
    },
    methods: {
        getImg(url) {
            return new URL(url, import.meta.url).href;
        },
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as*;

.my-container {
    width: 100%;
    height: 400px;
    margin-top: -50px;
    // min-width: 1400px;

    .second-title {
        font-size: 16px;
        text-transform: uppercase;
        color: $colorFont;
        font-family: Arial;
    }

    .row {
        .reviews {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

.left {
    width: 25%;
    background-image: url(../../assets/img/avadabarbers-cta-background.jpg);
    background-position: center;
    background-size: cover;
    height: 400px;
    border-top: 3px solid $colorFont;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 400px;
    }
}

.right {
    width: 35%;
    background-color: black;
    height: 400px;
    border-top: 3px solid $colorFont;
    padding: 70px;

    h2 {
        color: $silver;
        font-size: 70px;
    }

    p {
        color: $silver;
        font-size: 16px;
        font-family: Arial;
    }
}
</style>