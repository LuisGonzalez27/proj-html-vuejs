<template>
    <appServices :services="this.store.services" />
    <appProducts :products="this.store.products" />
    <appReviews :reviews="this.store.reviews" />

</template>

<script>
import { store } from "../store";
import appServices from './mainComp/appServices.vue';
import appProducts from './mainComp/appProducts.vue';
import appReviews from "./mainComp/appReviews.vue";

export default {
    name: "appMain",
    components: {
        appServices,
        appProducts,
        appReviews,
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