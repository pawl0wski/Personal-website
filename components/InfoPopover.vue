<template>
    <div class="info_popover">
        <div class="info_popover__content">
            <p class="info_popover__content__text"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info_popover {
    max-width: 18rem;

    position: absolute;

    transition: 0.25s opacity;

    // Hide on start
    opacity: 0;
    display: none;

    &__content {
        margin: 0.7rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: $background-color-lighter;
        box-shadow: 0 0 15px 0 $background-color;
        &__text {
            margin: 0;
        }
    }
}
</style>
