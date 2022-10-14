<template>
    <div class="column_divider"></div>
</template>

<style lang="scss" scoped>
div.column_divider {
    width: 1px;
    margin: 5rem 1rem 0;

    background-color: $background-color-more-lighter;
    opacity: 0.8;
}

@media only screen and (max-width: 800px) {
    div.column_divider {
        display: none;
    }
}
</style>
