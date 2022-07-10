<template>
    <div class="projects">
        <TitleText :content="$locale('projectsTitle')" />
        <div class="projects__list">
            <ProjectEntry
                v-for="project in projects"
                :key="project.id"
                :project-id="project.id"
                :title="project.name"
                content="LoremIpsum"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";
import ProjectEntry from "~/components/projects/components/ProjectEntry.vue";
import projectsContent from "~/content/projects.json";
import ProjectI from "~/content/interfaces/project";

export default Vue.extend({
    components: {
        TitleText,
        ProjectEntry,
    },
    data(): { projects: ProjectI[] } {
        const { projects } = projectsContent;
        return {
            projects: projects.reverse(),
        };
    },
});
</script>

<style lang="scss">
div.projects {
    @include slide;

    &__list {
        margin-top: 3rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 4rem;
    }
}
</style>
