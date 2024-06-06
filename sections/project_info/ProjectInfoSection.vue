<template>
    <div id="project_info" class="project_info_section">
        <div class="project_info_section__content">
            <span class="project_info_section__content__back" @click="goToPrev">
                {{ $locale("backToHomePage") }}
            </span>
            <div class="project_info_section__content__main">
                <div class="project_info_section__content__main__left">
                    <ProjectInfoImages :project="project" />
                    <div
                        class="project_info_section__content__main__left__description"
                    >
                        <p>
                            {{ $localeProject(project.id) }}
                        </p>
                    </div>
                </div>
                <div class="project_info_section__content__main__right">
                    <ProjectInfoDetails :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import ProjectInfoImages from "./components/ProjectInfoImages.vue";
import ProjectInfoDetails from "./components/ProjectInfoDetails.vue";
import type { ProjectModel } from "~/content/models/project";

export default defineComponent({
    components: { ProjectInfoDetails, ProjectInfoImages },
    props: {
        project: {
            type: Object as PropType<ProjectModel>,
            required: true,
        },
    },
    methods: {
        goToPrev() {
            this.$router.back();
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
@import "assets/scss/mixins";

.project_info_section {
    @include section;
    &__content {
        &__back {
            color: $text-color;

            text-decoration: none;
            font-size: x-large;
            user-select: none;

            &:hover {
                color: $primary-color;
                text-decoration: underline;

                cursor: pointer;
            }
        }

        &__main {
            margin-top: 2rem;
            display: flex;
            flex-direction: row;

            &__left {
                width: 80%;

                &__description {
                    padding-top: 2rem;
                    line-height: 1.7rem;
                    text-align: justify;
                }
            }

            &__right {
                width: 30%;
            }
        }
    }
}

@media only screen and (max-width: 800px) {
    .project_info_section {
        &__content {
            &__back {
                font-size: large;
            }
            &__main {
                flex-direction: column-reverse;
                gap: 2rem;

                &__left {
                    width: 100%;
                }

                &__right {
                    width: 100%;
                }
            }
        }
    }
}
</style>
