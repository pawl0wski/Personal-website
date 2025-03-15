<template>
    <div id="info_popover">
        <div id="info_popover__content">
            <p id="info_popover__content__text"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables";

#info_popover {
    max-width: 18rem;

    position: absolute;
    z-index: 1;

    transition: 0.25s opacity;

    // Hide on start
    opacity: 0;
    display: none;

    &__content {
        background-color: $background-color;

        margin: 0.7rem;
        padding: 1rem;

        border-style: solid;
        border-width: 1px;
        border-color: $background-color-more-darker;
        border-radius: $small-margin;

        box-shadow: 0 0 15px 0 $background-color;
        &__text {
            margin: 0;
        }
    }
}
</style>
