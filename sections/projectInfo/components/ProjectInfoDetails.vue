<template>
    <div class="project_info_details">
        <h1 class="project_info_details__title">{{ project.name }}</h1>
        <p class="project_info_details__technologies">
            {{ $locale("technologies") }}:
        </p>
        <div class="project_info_details__technologies_list">
            <nuxt-img
                v-for="technology in project.technologies"
                :key="technology.name"
                :alt="technology.name"
                :src="`/img/devicon/${technology.icon}.svg`"
                @mouseover="showStillLearningPopover"
                @mouseleave="hideStillLearningPopover"
                @click="showStillLearningPopover"
            />
        </div>
        <p class="project_info_details__links">{{ $locale("links") }}:</p>
        <div class="project_info_details__links_list">
            <ProjectInfoDetailsLink
                v-for="link in project.links"
                :key="link.name"
                :link="link"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { createPopper } from "@popperjs/core";
import ProjectInfoDetailsLink from "./ProjectInfoDetailsLink.vue";
import { ProjectI } from "~/content/interfaces/project";
import InfoPopoverController from "~/lib/infoPopoverController/infoPopoverController";

export default defineComponent({
    components: { ProjectInfoDetailsLink },
    props: {
        project: {
            type: Object as PropType<ProjectI>,
            required: true,
        },
    },
    methods: {
        showStillLearningPopover(event: MouseEvent) {
            const popoverController = new InfoPopoverController();

            const target = event.target as HTMLImageElement;
            const popover = popoverController.popover;

            popoverController.setText(target.alt);
            popoverController.show();

            createPopper(target, popover, {
                placement: "bottom",
            });
        },
        hideStillLearningPopover() {
            const popoverController = new InfoPopoverController();
            popoverController.hide();
        },
    },
});
</script>

<style lang="scss" scoped>
.project_info_details {
    width: 100%;

    padding-left: 1.5rem;

    display: flex;
    flex-direction: column;

    p {
        margin-top: 2rem;
    }

    &__title {
        margin-top: 1rem;
        margin-bottom: 0;
    }

    &__technologies_list {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
        img {
            width: 1.8rem;
            aspect-ratio: 1 / 1;
        }
    }

    &__links_list {
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
    }
}

@media only screen and (max-width: 800px) {
    .project_info_details {
        padding-left: 0;
    }
}
</style>
