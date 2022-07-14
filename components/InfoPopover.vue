<template>
    <div class="info_popover">
        <p class="info_popover__text"></p>
    </div>
</template>

<style lang="scss" scoped>
.info_popover {
    padding: 1rem;
    max-width: 18rem;
    border-radius: 10px;
    background-color: $background-color-lighter;
    box-shadow: 0 0 15px 0 $background-color;

    position: absolute;

    transition: 0.25s opacity;

    // Hide on start
    opacity: 0;
    display: none;

    &__text {
        margin: 0;
    }
}
</style>
