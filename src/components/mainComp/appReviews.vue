<template>
    <section class="my-container d-flex justify-content-center">
        <div class="d-flex my-center">
            <p class="mb-0 second-title">What people say</p>
            <h2>Reviews</h2>
            <div class="row text-center justify-content-center m-0 pb-5">
                <div class="reviews pt-5" v-for="(item, index) in reviews" :key="index">
                    <p>{{ item.text }}</p>
                    <img :src="getImg(item.img)" alt="" class="img-circle">
                    <h4>{{ item.name }}</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "appReviews",

    props: {
        reviews: Array,
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
    min-height: 800px;

    .second-title {
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
        .reviews {
            width: 18%;
            padding: 0 45px;

            img {
                height: 100px;
            }

            h4 {
                color: $colorFont;
                padding-top: 20px;
                font-family: Arial;
                font-style: oblique;
            }

            p {
                color: $silver;
                font-size: 16px;
                font-family: Arial;
            }
        }
    }
}

.img-circle {
    border-radius: 50%;
}
</style>