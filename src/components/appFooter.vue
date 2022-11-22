<template>
    <footerTop :footerTop="this.store.footerTop" :footerInfo="this.store.footerInfo" />
    <footerBottom :footerCopy="this.store.footerCopy" />
</template>

<script>
import { store } from "../store";
import footerTop from "./footerComp/footerTop.vue";
import footerBottom from "./footerComp/footerBottom.vue";

export default {
    name: "appFooter",
    components: {
        footerTop,
        footerBottom,
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