<template>
    <div class="project_info_images">
        <div
            class="project_info_images__main"
            :style="{ 'background-color': darkenColor }"
        >
            <nuxt-img
                :src="currentImage"
                format="webp"
                :class="[
                    'project_info_images__main__image',
                    'animate__animated',
                    'animate__faster',
                    loading ? 'animate__fadeOut' : 'animate__fadeIn',
                ]"
                @load="imageLoaded"
            />
            <PulseLoader
                class="project_info_images__main__loader"
                :loading="loading"
                :color="color"
                :size="0.5"
                size-unit="rem"
            ></PulseLoader>
            <div class="project_info_images__main__left_button">
                <ProjectInfoImagesSideButton side="left" @click="prevImage" />
            </div>
            <div class="project_info_images__main__right_button">
                <ProjectInfoImagesSideButton side="right" @click="nextImage" />
            </div>
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
import Color from "color";
import ProjectInfoImagesControls from "./ProjectInfoImagesControls.vue";
import ProjectInfoImagesSideButton from "./ProjectInfoImagesSideButton.vue";
import { ProjectI } from "~/content/interfaces/project";

export default defineComponent({
    components: {
        ProjectInfoImagesControls,
        PulseLoader,
        ProjectInfoImagesSideButton,
    },
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
        color(): string {
            return this.$props.project.color;
        },
        darkenColor(): string {
            const color = Color(this.color).darken(0.7);
            return color.hex();
        },
        lastImageIndex(): number {
            return this.$props.project.images.length - 1;
        },
    },
    methods: {
        nextImage() {
            if (this.lastImageIndex > this.currentIndex) {
                this.currentIndex++;
                this.loading = true;
            } else {
                this.changeIndex(0);
            }
        },
        prevImage() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.loading = true;
            } else {
                this.changeIndex(this.lastImageIndex);
            }
        },
        changeIndex(i: number) {
            if (i >= 0 && i <= this.lastImageIndex) this.currentIndex = i;
            this.loading = true;
        },
        imageLoaded() {
            this.loading = false;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/mixins";
@import "assets/scss/variables";

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
        position: relative;

        &__left_button {
            position: absolute;
            left: 0;
            bottom: 50%;
            width: fit-content;
            transform: translateY(50%);

            z-index: 2;
        }
        &__right_button {
            position: absolute;
            left: 100%;
            bottom: 50%;
            transform: translate(-100%, 50%);

            width: fit-content;

            z-index: 3;
        }

        &__image {
            height: 100%;

            @include absoluteCenter;
            z-index: 0;
        }

        &__loader {
            text-align: center;

            @include absoluteCenter;
            z-index: 1;
        }
    }
}
</style>
