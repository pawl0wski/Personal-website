<template>
    <div class="index">
        <WelcomeSlide />
        <AboutMeSlide />
        <ProjectsSlide />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import WelcomeSlide from "~/components/welcome/WelcomeSlide.vue";
import AboutMeSlide from "~/components/aboutMe/AboutMeSlide.vue";
import ProjectsSlide from "~/components/projects/ProjectsSlide.vue";

export default Vue.extend({
    name: "IndexPage",
    components: { ProjectsSlide, AboutMeSlide, WelcomeSlide },
});
</script>

<style lang="scss">
body {
    background-color: $background-color;
    color: $text-color;
    font-family: $font-family;
}

div.index {
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 90rem;
}
</style>
