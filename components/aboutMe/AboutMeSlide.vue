<template>
    <div class="about_me">
        <div class="about_me__left">
            <TitleText :content="$locale('aboutMeTitle')" />
            <AboutMeContent :content="$locale('aboutMeContent')" />
        </div>
        <div class="about_me__right">
            <AboutMePhoto />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleText from "~/components/TitleText.vue";
import AboutMeContent from "~/components/aboutMe/components/AboutMeContent.vue";
import AboutMePhoto from "~/components/aboutMe/components/AboutMePhoto.vue";

export default defineComponent({
    components: { AboutMeContent, TitleText, AboutMePhoto },
});
</script>

<style lang="scss">
div.about_me {
    min-height: 100vh;
    display: flex;
    flex-direction: row;

    gap: 3rem;

    &__left,
    &__right {
        width: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__right {
        align-items: center;
    }
}

@media only screen and (max-width: 800px) {
    div.about_me {
        flex-direction: column-reverse;

        gap: 4rem;
        &__left,
        &__right {
            width: 100%;

            align-items: center;
            text-align: justify;
        }
    }
}
</style>
