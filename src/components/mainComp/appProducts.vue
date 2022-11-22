<template>
    <section class="my-container d-flex justify-content-center">
        <div class="d-flex my-center">
            <p class="mb-0 second-title">We have you covered</p>
            <h2>Avada Grooming Products</h2>
            <div class="row text-center justify-content-center m-0 pb-5">
                <div class="products pt-5" v-for="(item, index) in products" :key="index">
                    <div>
                        <img :src="getImg(item.img)" alt="">
                    </div>
                    <div class="description-tag">
                        <h4>{{ item.name }}</h4>
                        <p>
                            {{ item.price }}
                        </p>
                    </div>
                </div>
            </div>
            <button class="my-btn text-center">Shop our product range</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "appProducts",

    props: {
        products: Array,
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
    min-height: 900px;
    background-image: url(../../assets/img/avadabarbers-reviewsbackground.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    p {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: bold;
        color: $colorFont;
        font-family: Arial;
    }

    h2 {
        color: $silver;
        font-size: 70px;
    }

    .row {
        .products {
            width: calc(100% / 4);

            img {
                height: 300px;
            }

            h4 {
                color: $colorFont;
                padding-top: 30px;
            }

            p {
                color: $colorFont;
                font-size: 15px;
                font-family: Arial;
                font-weight: normal;
            }
        }
    }
}
</style>