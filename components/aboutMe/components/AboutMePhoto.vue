<template>
    <div class="about_me__photo">
        <nuxt-img format="webp" loading="lazy" src="/img/me.jpg" />
    </div>
</template>

<style lang="scss" scoped>
div.about_me__photo {
    border-width: 2px;
    border-color: $primary-color;
    border-style: solid;
    border-radius: 1rem;

    overflow: hidden;

    width: fit-content;

    img {
        width: 20vw;
        height: auto;
    }
}
</style>
