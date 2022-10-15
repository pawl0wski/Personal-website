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
        background-color: $background-color;
        
        margin: 0.7rem;
        padding: 1rem;
        
        border-radius: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: $background-color-more-lighter;
        
        box-shadow: 0 0 15px 0 $background-color;
        &__text {
            margin: 0;
        }
    }
}
</style>
