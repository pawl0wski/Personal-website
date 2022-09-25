<template>
    <div class="index">
        <WelcomeSection />
        <AboutMeSection />
        <ProjectsSection />
        <KnowledgeSection />
        <InfoPopover />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeSection from "~/sections/welcome/WelcomeSection.vue";
import AboutMeSection from "~/sections/aboutMe/AboutMeSection.vue";
import ProjectsSection from "~/sections/projects/ProjectsSection.vue";
import KnowledgeSection from "~/sections/knowledge/KnowledgeSection.vue";
import InfoPopover from "~/components/InfoPopover.vue";

export default defineComponent({
    name: "IndexPage",
    components: {
        ProjectsSection,
        AboutMeSection,
        WelcomeSection,
        KnowledgeSection,
        InfoPopover,
    },
});
</script>

<style lang="scss">
div.index {
    @include page;
}

@media only screen and (max-width: 800px) {
    div.index {
        > div:not(:first-child) {
            margin-top: 5rem;
        }
    }
}
</style>
