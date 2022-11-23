<template>
    <AppWave class="wave-top" />
    <appServices :services="this.store.services" id="Services" />
    <AppWave class="wave-invert" />
    <appProducts :products="this.store.products" id="Shop" />
    <appFeatured :featured="this.store.featured" />
    <appReviews :reviews="this.store.reviews" id="About" />
    <AppWave class="wave-button" />
    <appPosts :posts="this.store.posts" id="Blog" />
</template>

<script>
import { store } from "../store";
import appServices from './mainComp/appServices.vue';
import appProducts from './mainComp/appProducts.vue';
import appFeatured from "./mainComp/appFeatured.vue";
import appReviews from "./mainComp/appReviews.vue";
import appPosts from "./mainComp/appPosts.vue";
import AppWave from "./mainComp/appWave.vue";

export default {
    name: "appMain",
    components: {
        appServices,
        appProducts,
        appFeatured,
        appReviews,
        appPosts,
        AppWave,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>
.wave-top {
    margin-top: -100px;
}

.wave-button {
    margin-bottom: -100px;
    transform: rotate(180deg);
}

.wave-invert {
    filter: invert(1);
}
</style>