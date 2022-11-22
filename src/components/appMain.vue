<template>
    <appServices :services="this.store.services" />
    <appProducts :products="this.store.products" />
</template>

<script>
import { store } from "../store";
import appServices from './mainComp/appServices.vue';
import appProducts from './mainComp/appProducts.vue';

export default {
    name: "appMain",
    components: {
        appServices,
        appProducts,
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