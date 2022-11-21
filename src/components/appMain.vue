<template>
    <appServices :services="this.store.services" />
</template>

<script>
import appServices from './mainComp/appServices.vue';
import { store } from "../store";

export default {
    name: "appMain",
    components: {
        appServices,
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