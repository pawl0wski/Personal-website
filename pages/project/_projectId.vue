<template>
    <div class="project">
        <InfoPopover />
        <ProjectInfoSection :project="project" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectInfoSection from "~/sections/projectInfo/ProjectInfoSection.vue";
import projectsContent from "~/content/projects.json";
import { ProjectI } from "~/content/interfaces/project";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    components: { ProjectInfoSection },
    data(): { project: ProjectI } {
        const project = projectsContent.projects.find((e: ProjectI) => {
            return e.id.toString() === this.$route.params.projectId;
        }) as ProjectI;
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
.project {
    @include page;

    margin-top: 3rem;
}
</style>
