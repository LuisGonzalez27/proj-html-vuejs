<template>
    <section class="my-container text-center">
        <div class="title">
            <p class="mb-0">Mens Grooming</p>
            <h2>Services</h2>
        </div>
        <div class="row text-center justify-content-center m-0 pb-5">
            <div class="services pt-5" v-for="(item, index) in services" :key="index">
                <div>
                    <img :src="getImg(item.img)" alt="">
                </div>
                <div class="description-tag">
                    <h4>{{ item.name }}</h4>
                    <p>
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
        <button class="my-btn text-center">Read about our services</button>
    </section>
</template>

<script>
export default {
    name: "appServices",

    props: {
        services: Array,
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
    min-height: 650px;

    .title {
        p {
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;
            color: $colorFont;
        }
    }

    h2 {
        color: $silver;
        font-size: 70px;
    }

    img {
        height: 80px;
    }

    h4 {
        color: $colorFont;
        padding-top: 30px;
    }

    p {
        font-size: 15px;
        color: $silver;
        font-family: Arial;
        padding-top: 10px;
    }

    .services {
        width: 18%;
        padding: 0 45px;

    }
}
</style>