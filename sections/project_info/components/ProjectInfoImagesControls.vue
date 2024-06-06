<template>
    <div class="project_info__images__controls">
        <div
            v-for="(image, i) in project.images"
            :key="image"
            class="project_info__images__controls__control"
            @click="changeIndex(i)"
        >
            <div
                v-if="i === currentIndex"
                :style="{ 'background-color': color }"
                class="project_info__images__controls__control__dot"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { ProjectModel } from "~/content/models/project";

export default defineComponent({
    props: {
        currentIndex: {
            type: Number,
            required: true,
        },
        project: {
            type: Object as PropType<ProjectModel>,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    methods: {
        changeIndex(i: number) {
            this.$emit("changeIndex", i);
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.project_info__images__controls {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    &__control {
        height: 0.3rem;
        width: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        background-color: $background-color-darker !important;

        cursor: pointer;

        &__dot {
            width: 100%;
            aspect-ratio: 1 / 1;
        }
    }
}
</style>
