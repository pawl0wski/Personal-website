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
        width: 0.8rem;
        aspect-ratio: 1 / 1;

        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        background-color: $background-color-more-darker;

        cursor: pointer;

        &__dot {
            width: 100%;
            aspect-ratio: 1 / 1;

            background-color: $primary-color;
        }
    }
}
</style>
