<template>
    <div class="about_me__photo">
        <nuxt-img format="webp" src="/img/me.jpg" />
    </div>
</template>

<style lang="scss" scoped>
div.about_me__photo {
    width: auto;
    max-height: 600px;

    overflow: hidden;

    aspect-ratio: 9 / 16;

    img {
        width: 100%;
    }
}
</style>
