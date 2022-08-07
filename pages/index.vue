<template>
    <div class="index">
        <WelcomeSlide />
        <AboutMeSlide />
        <ProjectsSlide />
        <KnowledgeSlide />
        <InfoPopover />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeSlide from "~/components/welcome/WelcomeSlide.vue";
import AboutMeSlide from "~/components/aboutMe/AboutMeSlide.vue";
import ProjectsSlide from "~/components/projects/ProjectsSlide.vue";
import KnowledgeSlide from "~/components/knowledge/KnowledgeSlide.vue";

export default defineComponent({
    name: "IndexPage",
    components: { ProjectsSlide, AboutMeSlide, WelcomeSlide, KnowledgeSlide },
});
</script>

<style lang="scss">
div.index {
    @include page;
}

@media only screen and (max-width: 800px) {
    div.index {
        scroll-snap-type: none;

        > div:not(:first-child) {
            margin-top: 5rem;
        }
    }
}
</style>
