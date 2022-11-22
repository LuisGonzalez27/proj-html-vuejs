<template>
    <section class="my-container d-flex justify-content-center">
        <div class="d-flex my-center">
            <div class="copy d-flex" v-for="(item, index) in footerCopy" :key="index">
                <p>{{ item.date }}</p>
                <p>{{ item.by }}</p>
                <p>{{ item.all }}</p>
                <p>{{ item.powered }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "footerBottom",

    props: {
        footerCopy: Array,
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as*;

.my-container {
    width: 100%;
    background-color: $codGrayTwo;
    min-height: 80px;

    .copy {
        p {
            color: $silver;
            font-size: 12px;
            font-family: Arial;
            padding: 0 10px;
            margin: 0;
        }

        p:nth-child(2) {
            border-right: 1px solid $silver;
            border-left: 1px solid $silver;
        }

        p:nth-child(3) {
            border-right: 1px solid $silver;
        }
    }
}
</style>