<template>
    <div class="project">
        <InfoPopover />
        <ProjectInfoSection :project="project" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectInfoSection from "~/sections/project_info/ProjectInfoSection.vue";
import projectsContent from "~/content/projects.json";
import type { ProjectModel } from "~/content/models/project";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    components: { ProjectInfoSection },
    data(): { project: ProjectModel } {
        const project = projectsContent.projects.find((e: ProjectModel) => {
            return e.id.toString() === this.$route.params.id;
        }) as ProjectModel;
        return {
            project,
        };
    },
    head() {
        const locale = new Locale();
        return {
            title: `Jakub Pawłowski | ${this.project.name}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        locale
                            .getProjectDescription(this.project.id)
                            .slice(0, 150) + "...",
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/mixins";

.project {
    @include page;

    padding-top: 3rem;
}
</style>
