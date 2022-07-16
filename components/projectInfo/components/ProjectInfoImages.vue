<template>
    <div
        class="project_info_images"
        :style="{ 'background-color': $props.project.color }"
    >
        <nuxt-img :src="currentImage" class="project_info_images__image" />
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
    data(): { currentIndex: number } {
        return {
            currentIndex: 0,
        };
    },
    computed: {
        currentImage(): string {
            return `img/projects/${
                this.$props.project.images[this.currentIndex]
            }`;
        },
    },
    methods: {
        nextImage() {
            if (this.$props.project.images.length < this.currentIndex)
                this.currentIndex++;
        },
        prevImage() {
            if (this.currentIndex > 0) this.currentIndex--;
        },
        changeImageTo(i: number) {
            if (i > 0 && i < this.$props.project.images.length)
                this.currentIndex = i;
        },
    },
});
</script>

<style lang="scss" scoped>
.project_info_images {
    width: 100%;
    aspect-ratio: 16 / 9;

    border-radius: 1rem;
    overflow: hidden;

    display: flex;
    justify-content: center;

    &__image {
        height: 100%;
    }
}
</style>
