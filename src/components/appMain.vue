<template>
    <appServices :services="this.store.services" />
    <appProducts :products="this.store.products" />
    <appReviews :reviews="this.store.reviews" />
    <appPosts :posts="this.store.posts" />
</template>

<script>
import { store } from "../store";
import appServices from './mainComp/appServices.vue';
import appProducts from './mainComp/appProducts.vue';
import appReviews from "./mainComp/appReviews.vue";
import appPosts from "./mainComp/appPosts.vue";

export default {
    name: "appMain",
    components: {
        appServices,
        appProducts,
        appReviews,
        appPosts,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>