<template>
    <div class="project_info_slide">
        <nuxt-link to="/" class="project_info_slide__back">
            {{ $locale("backToHomePage") }}
        </nuxt-link>
        <div class="project_info_slide__main">
            <div class="project_info_slide__main__left">
                <ProjectInfoImages :project="project" />
                <div class="project_info_slide__main__left__description">
                    <p>
                        {{ $localProject(project.id) }}
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
});
</script>

<style lang="scss" scoped>
.project_info_slide {
    &__back {
        color: $text-color;

        text-decoration: none;
        font-size: x-large;

        &:hover {
            color: $primary-color;
            text-decoration: underline;
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
        &__main {
            flex-direction: column-reverse;

            &__images {
                width: 100%;
            }

            &__details {
                width: 100%;
            }
        }
    }
}
</style>
