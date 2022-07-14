<template>
    <div class="project">
        <a href="/" class="project__back">
            {{ $locale("backToHomePage") }}
        </a>
    </div>
</template>

<style lang="scss" scoped>
.project {
    @include page;

    margin-top: 3rem;

    &__back {
        color: $text-color;

        text-decoration: none;
        font-size: x-large;

        &:hover {
            color: $primary-color;
            text-decoration: underline;
        }
    }
}
</style>
