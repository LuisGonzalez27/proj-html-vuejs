<template>
    <section class="my-container d-flex justify-content-center">
        <div class="d-flex my-center">
            <img src="../../assets/img/avadabarbers-stickylogo-x2.png" class="logo">
            <div class="row text-center justify-content-center m-0 pb-5">
                <div class="my-card pt-5" v-for="(item, index) in footerTop" :key="index">
                    <img :src="getImg(item.img)" alt="">
                    <button class="my-btn">
                        {{ item.text }}
                    </button>
                </div>
                <div class="info pt-5" v-for="(item, index) in footerInfo" :key="index">
                    <p>{{ item.title }}</p>
                    <p>{{ item.street }}</p>
                    <p>{{ item.location }}</p>
                    <p>{{ item.email }}</p>
                    <p>{{ item.cellPhone }}</p>
                    <h5>{{ item.follow }}</h5>
                    <span>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "footerTop",

    props: {
        footerTop: Array,
        footerInfo: Array,
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
    min-height: 600px;
    background-color: $codGray;

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
        text-transform: capitalize;
    }

    .row {
        .my-card {
            width: 22%;
        }

        p {
            margin-bottom: 5px;
        }
    }

    .info {
        width: 20%;
        color: $silver;
        font-family: Arial;
        text-transform: capitalize;

        h5 {
            color: $colorFont;
            font-size: 20px;
            text-transform: uppercase;
            font-family: Arial;
            font-weight: bold;
            padding-top: 50px;
        }

        span {
            display: flex;
            justify-content: space-evenly;
            padding-top: 50px;
        }
    }
}

.row :nth-child(2) {
    order: 3;
}
</style>