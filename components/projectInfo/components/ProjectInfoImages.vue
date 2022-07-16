<template>
    <div
        class="project_info_images"
        :style="{ 'background-color': $props.project.color }"
    >
        <nuxt-img :src="currentImage" class="project_info_images__image" />
        <ProjectInfoImagesControls
            :project="project"
            :current-index="currentIndex"
            @changeIndex="changeIndex"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProjectI } from "~/content/interfaces/project";
import ProjectInfoImagesControls from "~/components/projectInfo/components/ProjectInfoImagesControls.vue";

export default defineComponent({
    components: { ProjectInfoImagesControls },
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
            return `/img/projects/${
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
        changeIndex(i: number) {
            if (i >= 0 && i < this.$props.project.images.length)
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

    &__image {
        height: 100%;

        position: relative;
        left: 50%;
        bottom: 50%;
        z-index: 0;

        transform: translate(-50%, 50%);
    }
}
</style>
