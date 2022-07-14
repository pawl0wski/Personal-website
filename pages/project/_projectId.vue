<template>
    <div class="project">
        <ProjectInfoSlide />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectInfoSlide from "~/components/projectInfo/ProjectInfoSlide.vue";

export default defineComponent({
    components: { ProjectInfoSlide },
});
</script>

<style lang="scss" scoped>
.project {
    @include page;

    margin-top: 3rem;
}
</style>
