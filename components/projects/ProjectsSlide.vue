<template>
    <div class="projects">
        <TitleText :content="$locale('projectsTitle')" />
        <div class="projects__list">
            <ProjectEntry
                v-for="project in projects"
                :key="project.id"
                :project="project"
                :content="$localeProject(project.id)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleText from "~/components/TitleText.vue";
import ProjectEntry from "~/components/projects/components/ProjectEntry.vue";
import projectsContent from "~/content/projects.json";
import { ProjectI } from "~/content/interfaces/project";

export default defineComponent({
    components: {
        TitleText,
        ProjectEntry,
    },
    data(): { projects: ProjectI[] } {
        const { projects } = projectsContent;
        return {
            projects: projects[0].id === 1 ? projects.reverse() : projects,
        };
    },
});
</script>

<style lang="scss" scoped>
div.projects {
    @include slide;

    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;

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
