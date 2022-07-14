<template>
    <div class="projects">
        <TitleText :content="$locale('projectsTitle')" />
        <div class="projects__list">
            <ProjectEntry
                v-for="project in projects"
                :key="project.id"
                :project="project"
                :content="$localProject(project.id)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";
import ProjectEntry from "~/components/projects/components/ProjectEntry.vue";
import projectsContent from "~/content/projects.json";
import { ProjectI } from "~/content/interfaces/project";

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

<style lang="scss" scoped>
div.projects {
    min-height: 100vh;

    &__list {
        margin-top: 3rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 3rem;
    }
}

@media only screen and (max-width: 800px) {
    div.projects {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__list {
            justify-content: center;
        }
    }
}
</style>
