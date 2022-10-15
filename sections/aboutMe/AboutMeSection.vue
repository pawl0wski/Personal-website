<template>
    <div id="about_me" class="about_me">
        <div class="about_me__content">
            <div class="about_me__content__left">
                <TitleText :content="$locale('aboutMeTitle')" />
                <AboutMeContent :content="$locale('aboutMeContent')" />
            </div>
            <div class="about_me__content__right">
                <AboutMePhoto />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMeContent from "./components/AboutMeContent.vue";
import AboutMePhoto from "./components/AboutMePhoto.vue";
import TitleText from "~/components/TitleText.vue";

export default defineComponent({
    components: { AboutMeContent, TitleText, AboutMePhoto },
});
</script>

<style lang="scss" scoped>
div.about_me {
    @include section;

    &__content {
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
}

@media only screen and (max-width: 800px) {
    div.about_me {
        &__content {
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
}
</style>
