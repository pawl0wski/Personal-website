<template>
    <div class="index">
        <InfoPopover />
        <WelcomeSlide />
        <AboutMeSlide />
        <hr class="index__divider" />
        <ProjectsSlide />
        <hr class="index__divider" />
        <KnowledgeSlide />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import WelcomeSlide from "~/components/welcome/WelcomeSlide.vue";
import AboutMeSlide from "~/components/aboutMe/AboutMeSlide.vue";
import ProjectsSlide from "~/components/projects/ProjectsSlide.vue";
import KnowledgeSlide from "~/components/knowledge/KnowledgeSlide.vue";

export default Vue.extend({
    name: "IndexPage",
    components: { ProjectsSlide, AboutMeSlide, WelcomeSlide, KnowledgeSlide },
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
    padding: 0 $small-margin;
    max-width: 90rem;

    hr.index__divider {
        height: $medium-margin;
        border-style: none;
    }
}
</style>
