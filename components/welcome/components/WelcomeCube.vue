<template>
    <div class="welcome__cube"></div>
</template>

<style lang="scss" scoped>
div.welcome__cube {
    width: 30vw;
    height: 30vw;

    aspect-ratio: 1 / 1;

    background: linear-gradient(
        90deg,
        $primary-color 5%,
        darken($primary-color, 40%) 95%
    );
    border-radius: 33px;
    transform: rotate(60deg) translate(10vw, -16vw);
}
</style>
