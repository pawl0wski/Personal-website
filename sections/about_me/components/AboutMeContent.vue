<template>
    <div class="about_me__text">
        <p>{{ $locale("aboutMeContentIntro") }}</p>
        <p>{{ $locale("aboutMeContentInterests") }}</p>
        <p>{{ $locale("aboutMeContentContact") }}</p>
    </div>
</template>

<style lang="scss" scoped>
div.about_me__text {
    max-width: 30rem;

    font-size: large;

    line-height: 2rem;
    word-spacing: 0.1rem;
}
</style>
