<template>
    <section class="my-container d-flex justify-content-center">
        <div class="d-flex my-center">
            <p class="mb-0 second-title">Tales from the barber shop</p>
            <h2>Recent blog posts</h2>
            <div class="row text-center justify-content-center m-0 pb-5">
                <div class="posts pt-5" v-for="(item, index) in posts" :key="index">
                    <div class="img-hover-zoom">
                        <img :src="getImg(item.img)" alt="">
                    </div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                </div>
            </div>
            <button class="my-btn text-center">Read more from our blog</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "appPosts",

    props: {
        posts: Array,
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
    min-height: 950px;
    background-color: $colorPosts;

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
        .posts {
            width: 20%;

            img {
                transition: transform 2s ease;
            }

            h4 {
                color: $colorFont;
                padding-top: 20px;
                text-transform: capitalize;
                cursor: pointer;
            }

            p {
                color: $silver;
                font-size: 16px;
                font-family: Arial;
            }
        }
    }
}

.img-hover-zoom {
    overflow: hidden;
}

.img-hover-zoom:hover img {
    transform: scale(1.2);
    cursor: pointer;
}
</style>