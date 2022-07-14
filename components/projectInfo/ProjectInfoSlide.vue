<template>
    <div class="project_info_slide">
        <a href="/" class="project_info_slide__back">
            {{ $locale("backToHomePage") }}
        </a>
        <div class="project_info_slide__main">
            <div class="project_info_slide__main__images">
                <ProjectInfoImages />
            </div>
            <div class="project_info_slide__main__details">
                <ProjectInfoDetails />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectInfoImages from "~/components/projectInfo/components/ProjectInfoImages.vue";
import ProjectInfoDetails from "~/components/projectInfo/components/ProjectInfoDetails.vue";

export default defineComponent({
    components: { ProjectInfoDetails, ProjectInfoImages },
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
</style>
