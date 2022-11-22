<template>
    <section class="my-container">
        <div class="wave">
            <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%"
                height="100" viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#ffffff;padding:0;">
                <path d="M0 100 L50 2 L100 100 Z"></path>
            </svg>
        </div>
    </section>
</template>

<script>
export default {
    name: "appWave",
}
</script>

<style lang="scss" scoped>
@use '../../assets/styles/partials/variables' as*;

.wave {
    background-color: transparent;
}
</style>