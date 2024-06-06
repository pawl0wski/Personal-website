<template>
    <div class="project_info_images_side_button">
        <i
            :class="[
                'fa-solid',
                side === 'right' ? 'fa-arrow-right' : 'fa-arrow-left',
            ]"
        ></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export type ProjectInfoButtonSide = "left" | "right";

export default defineComponent({
    props: {
        side: {
            type: String as PropType<ProjectInfoButtonSide>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.project_info_images_side_button {
    width: fit-content;
    height: 100%;

    display: flex;
    align-items: center;

    padding: 1rem;
    background-color: transparentize($background-color, 0.95);

    user-select: none;

    cursor: pointer;
}
</style>
