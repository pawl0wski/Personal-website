<template>
    <div class="about_me">
        <div class="about_me__left">
            <TitleText :content="title" />
            <AboutMeContent :content="content" />
        </div>
        <div class="about_me__right"></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";
import AboutMeContent from "~/components/aboutMe/components/AboutMeContent.vue";

export default Vue.extend({
    components: { AboutMeContent, TitleText },
    computed: {
        title(): string {
            return this.$locale("aboutMeTitle");
        },
        content(): string {
            return this.$locale("aboutMeContent");
        },
    },
});
</script>

<style lang="scss">
div.about_me {
    width: 100vw;

    display: flex;
    flex-direction: row;

    margin: 0 $default-margin;

    &__left,
    &__right {
        width: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
