<template>
    <div class="project_info_slide">
        <a href="/" class="project_info_slide__back">
            {{ $locale("backToHomePage") }}
        </a>
        <div class="project_info_slide__main">
            <div class="project_info_slide__main__images">
                <ProjectInfoImages :project="project" />
            </div>
            <div class="project_info_slide__main__details">
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

        &__images {
            width: 80%;
        }

        &__details {
            width: 30%;
        }
    }
}

@media only screen and (max-width: 800px) {
    .project_info_slide__main {
        flex-direction: column-reverse;

        &__images {
            width: 100%;
        }

        &__details {
            width: 100%;
        }
    }
}
</style>
