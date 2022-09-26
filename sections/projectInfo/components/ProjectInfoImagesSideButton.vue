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
.project_info_images_side_button {
    width: fit-content;

    padding: 1rem;
    background-color: transparentize($background-color, 0.7);

    user-select: none;

    cursor: pointer;
}
</style>
