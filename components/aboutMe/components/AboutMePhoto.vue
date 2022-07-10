<template>
    <div class="about_me__photo">
        <nuxt-img src="/img/me.jpg" />
    </div>
</template>

<style lang="scss" scoped>
div.about_me__photo {
    border-width: 2px;
    border-color: $primary-color;
    border-style: solid;
    border-radius: 1rem;

    width: auto;
    max-height: 550px;

    overflow: hidden;

    aspect-ratio: 9 / 16;

    img {
        width: 100%;
    }
}
</style>
