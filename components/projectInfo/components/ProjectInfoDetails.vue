<template>
    <div class="project_info_details">
        <h1 class="project_info_details__title">{{ project.name }}</h1>
        <p class="project_info_details__technologies">
            {{ $locale("technologies") }}:
        </p>
        <div class="project_info_details__technologies__list">
            <nuxt-img
                v-for="technology in project.technologies"
                :key="technology"
                :src="`/img/devicon/${technology.icon}.svg`"
            />
        </div>
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
});
</script>

<style lang="scss" scoped>
.project_info_details {
    width: 100%;
    height: 300px;

    padding-left: 1.5rem;

    display: flex;
    flex-direction: column;

    &__title {
        margin: 1rem 0;
    }

    &__technologies {
        &__list {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            flex-wrap: wrap;
            img {
                width: 1.8rem;
                aspect-ratio: 1 / 1;
            }
        }
    }
}
</style>
