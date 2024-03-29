<template>
    <div
        :class="[
            'knowledge_entry',
            'animate__animated',
            hovered ? 'animate__pulse' : '',
        ]"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
    >
        <nuxt-img
            loading="lazy"
            class="knowledge_entry__icon"
            :alt="knowledge.technology.name"
            :src="`img/devicon/${knowledge.technology.icon}.svg`"
        />
        <span class="knowledge_entry__name">{{
            knowledge.technology.name
        }}</span>
        <i
            v-if="knowledge.stillLearning"
            class="fa-solid fa-book-open knowledge_entry__still_learning"
            @mouseover="showStillLearningPopover"
            @mouseleave="hideStillLearningPopover"
            @click="showStillLearningPopover"
        ></i>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { createPopper } from "@popperjs/core";
import { KnowledgeI } from "~/content/interfaces/knowledge";
import InfoPopoverController from "~/lib/infoPopoverController/infoPopoverController";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    props: {
        knowledge: {
            type: Object as PropType<KnowledgeI>,
            required: true,
        },
    },
    data(): { hovered: boolean } {
        return { hovered: false };
    },
    methods: {
        showStillLearningPopover(event: MouseEvent) {
            const popoverController = new InfoPopoverController();
            const locale = new Locale();

            const target = event.target as Element;
            const popover = popoverController.popover;

            popoverController.setText(locale.get("stillLearningInfo"));
            popoverController.show();

            createPopper(target, popover, {
                placement: "bottom-end",
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
.knowledge_entry {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;

    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: $background-color-more-lighter;

    display: flex;
    align-items: center;

    &__icon {
        height: 55%;
        aspect-ratio: 1 / 1;
    }

    &__name {
        padding-left: 1rem;
    }

    &__still_learning {
        margin-left: auto;
        color: $text-color;
        cursor: help;
    }
}
</style>
