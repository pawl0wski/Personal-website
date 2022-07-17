<template>
    <div class="project_info_images_side_button" @click="$emit('click')">
        <i
            :class="[
                'fa-solid',
                side === 'right' ? 'fa-arrow-right' : 'fa-arrow-left',
            ]"
        ></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum ProjectInfoButtonSide {
    left = "left",
    right = "right",
}

export default defineComponent({
    props: {
        side: {
            type: Object as PropType<ProjectInfoButtonSide>,
            default: ProjectInfoButtonSide.left,
        },
    },
});
</script>

<style lang="scss">
.project_info_images_side_button {
    width: fit-content;

    padding: 1rem;
    background-color: transparentize($background-color, 0.7);

    cursor: pointer;
}
</style>
