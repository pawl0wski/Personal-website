<template>
    <div class="project_info_images">
        <img />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProjectI } from "~/content/interfaces/project";

export default defineComponent({
    props: {
        project: {
            type: Object as PropType<ProjectI>,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
});
</script>

<style lang="scss" scoped>
.project_info_images {
    width: 100%;
    aspect-ratio: 16 / 9;

    background-color: $background-color-lighter;
}
</style>
