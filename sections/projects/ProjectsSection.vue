<template>
    <div id="projects" class="projects">
        <div class="projects__content">
            <TitleText :content="$locale('projectsTitle')" />
            <div class="projects__content__list">
                <ProjectEntry
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"
                    :content="$localeProject(project.id)"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectEntry from "./components/ProjectEntry.vue";
import TitleText from "~/components/TitleText.vue";
import projectsContent from "~/content/projects.json";
import type { ProjectModel } from "~/content/models/project";

interface ProjectsSectionData {
    projects: ProjectModel[];
}

export default defineComponent({
    components: {
        TitleText,
        ProjectEntry,
    },
    data(): ProjectsSectionData {
        const { projects } = projectsContent;
        return {
            projects: projects[0].id === 1 ? projects.reverse() : projects,
        };
    },
});
</script>

<style lang="scss" scoped>
@use "assets/scss/mixins";

div.projects {
    display: flex;
    flex-direction: column;
    gap: 0;
    justify-content: center;

    @include mixins.section;

    &__content {
        &__list {
            margin-top: 3rem;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 3rem;
        }
    }
}

@media only screen and (max-width: 800px) {
    div.projects {
        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;

            &__list {
                justify-content: center;
            }
        }
    }
}

@media only screen and (max-width: 1220px) {
    div.projects {
        &__content {
            &__list {
                justify-content: flex-start;
            }
        }
    }
}
</style>
