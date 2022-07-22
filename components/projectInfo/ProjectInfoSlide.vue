<template>
    <div class="project_info_slide">
        <span class="project_info_slide__back" @click="goToPrev">
            {{ $locale("backToHomePage") }}
        </span>
        <div class="project_info_slide__main">
            <div class="project_info_slide__main__left">
                <ProjectInfoImages :project="project" />
                <div class="project_info_slide__main__left__description">
                    <p>
                        {{ $localeProject(project.id) }}
                    </p>
                </div>
            </div>
            <div class="project_info_slide__main__right">
                <ProjectInfoDetails :project="project" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ProjectInfoImages from "~/components/projectInfo/components/ProjectInfoImages.vue";
import ProjectInfoDetails from "~/components/projectInfo/components/ProjectInfoDetails.vue";
import { ProjectI } from "~/content/interfaces/project";

export default defineComponent({
    components: { ProjectInfoDetails, ProjectInfoImages },
    props: {
        project: {
            type: Object as PropType<ProjectI>,
            required: true,
        },
    },
    methods: {
        goToPrev() {
            this.$router.go(-1);
        },
    },
});
</script>

<style lang="scss" scoped>
.project_info_slide {
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

@media only screen and (max-width: 800px) {
    .project_info_slide {
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
</style>
