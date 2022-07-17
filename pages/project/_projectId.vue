<template>
    <div class="project">
        <InfoPopover />
        <ProjectInfoSlide :project="getProject" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectInfoSlide from "~/components/projectInfo/ProjectInfoSlide.vue";
import projectsContent from "~/content/projects.json";
import { ProjectI } from "~/content/interfaces/project";

export default defineComponent({
    components: { ProjectInfoSlide },
    computed: {
        getProject(): ProjectI {
            // This is a hotfix because TypeScript cannot detect route in this.
            // This should be fixed in the future.
            const route = this.$route as { params: { [key: string]: any } };
            return projectsContent.projects.find((e: ProjectI) => {
                // eslint-disable-next-line eqeqeq
                return e.id == route.params.projectId;
            }) as ProjectI;
        },
    },
    created() {},
});
</script>

<style lang="scss" scoped>
.project {
    @include page;

    margin-top: 3rem;
}
</style>
