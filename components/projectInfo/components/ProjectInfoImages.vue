<template>
    <div class="project_info_images">
        <div
            class="project_info_images__main"
            :style="{ 'background-color': $props.project.color }"
        >
            <nuxt-img
                :src="currentImage"
                class="project_info_images__main__image"
                @load="imageLoaded"
            />
            <PulseLoader
                class="project_info_images__main__loader"
                :loading="loading"
                color="#fff01f"
                :size="0.5"
                sizeUnit="rem"
            ></PulseLoader>
        </div>
        <div class="project_info_images__controls">
            <ProjectInfoImagesControls
                :project="project"
                :current-index="currentIndex"
                @changeIndex="changeIndex"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PulseLoader } from "@saeris/vue-spinners";
import { ProjectI } from "~/content/interfaces/project";
import ProjectInfoImagesControls from "~/components/projectInfo/components/ProjectInfoImagesControls.vue";

export default defineComponent({
    components: { ProjectInfoImagesControls, PulseLoader },
    props: {
        project: {
            type: Object as PropType<ProjectI>,
            required: true,
        },
    },
    data(): { currentIndex: number; loading: boolean } {
        return {
            currentIndex: 0,
            loading: true,
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
            this.loading = true;
        },
        prevImage() {
            if (this.currentIndex > 0) this.currentIndex--;
            this.loading = true;
        },
        changeIndex(i: number) {
            if (i >= 0 && i < this.$props.project.images.length)
                this.currentIndex = i;
            this.loading = true;
        },
        imageLoaded() {
            this.loading = false;
        },
    },
});
</script>

<style lang="scss" scoped>
.project_info_images {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__main {
        width: 100%;
        max-height: 576px;
        aspect-ratio: 16 / 9;
        border-radius: 1rem;
        overflow: hidden;

        &__image {
            height: 100%;

            @include relativeCenter;
            z-index: 0;
        }

        &__loader {
            text-align: center;

            @include relativeCenter;
            z-index: 1;
        }
    }
}
</style>
