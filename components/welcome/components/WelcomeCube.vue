<template>
    <div class="welcome__cube"></div>
</template>

<style lang="scss" scoped>
div.welcome__cube {
    width: 30vw;
    height: 30vw;

    background: linear-gradient(
        90deg,
        $primary-color 5%,
        darken($primary-color, 40%) 95%
    );
    border-radius: 33px;
    transform: rotate(60deg) translate(5vw, -5vw);
}
</style>
