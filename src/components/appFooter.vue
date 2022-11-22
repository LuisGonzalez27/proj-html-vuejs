<template>
    <footerTop :footerTop="this.store.footerTop" :footerInfo="this.store.footerInfo" />
</template>

<script>
import { store } from "../store";
import footerTop from "./footerComp/footerTop.vue";


export default {
    name: "appFooter",
    components: {
        footerTop,
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