<template>
    <div class="project_info_images">
        <div class="project_info_images__main">
            <nuxt-img
                :src="currentImage"
                format="webp"
                v-show="!loading"
                :class="['project_info_images__main__image']"
                @load="imageLoaded"
            />
            <PulseLoader
                v-if="loading"
                :color="color"
                class="project_info_images__main__loader"
            />
            <div class="project_info_images__main__left_button">
                <ProjectInfoImagesSideButton side="left" @click="prevImage" />
            </div>
            <div class="project_info_images__main__right_button">
                <ProjectInfoImagesSideButton side="right" @click="nextImage" />
            </div>
        </div>
        <div class="project_info_images__controls">
            <ProjectInfoImagesControls
                :color="color"
                :project="project"
                :current-index="currentIndex"
                @changeIndex="changeIndex"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Color from "color";
import ProjectInfoImagesControls from "./ProjectInfoImagesControls.vue";
import ProjectInfoImagesSideButton from "./ProjectInfoImagesSideButton.vue";
import type { ProjectModel } from "~/content/models/project";
import PulseLoader from "~/components/PulseLoader.vue";

export default defineComponent({
    components: {
        ProjectInfoImagesControls,
        PulseLoader,
        ProjectInfoImagesSideButton,
    },
    props: {
        project: {
            type: Object as PropType<ProjectModel>,
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
        overflow: hidden;
        position: relative;

        background-color: $even-section-color;

        &__left_button,
        &__right_button {
            position: absolute;
            height: 100%;
            transform: translateY(50%);

            width: fit-content;

            z-index: 2;
        }

        &__left_button {
            left: 0;
            bottom: 50%;
        }

        &__right_button {
            left: 100%;
            bottom: 50%;
            transform: translate(-100%, 50%);
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
