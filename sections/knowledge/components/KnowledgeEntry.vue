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
import { defineComponent, type PropType } from "vue";
import { createPopper } from "@popperjs/core";
import type { KnowledgeModel } from "~/content/models/knowledge";
import InfoPopoverController from "~/lib/info_popover_controller/info_popover_controller";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    props: {
        knowledge: {
            type: Object as PropType<KnowledgeModel>,
            required: true,
        },
    },
    data(): { hovered: boolean; popoverController: InfoPopoverController } {
        return {
            hovered: false,
            popoverController: new InfoPopoverController(),
        };
    },
    methods: {
        showStillLearningPopover(event: MouseEvent) {
            const locale = new Locale();
            const target = event.target;
            const popover = this.popoverController.getPopoverElement();

            if (!target || !popover) {
                return;
            }

            this.popoverController.setText(locale.get("stillLearningInfo"));
            this.popoverController.show();

            createPopper(target as Element, popover, {
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
@import "assets/scss/variables";

.knowledge_entry {
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

    border-width: 1px;
    border-style: none;
    border-color: $background-color-darker;
    border-radius: $small-margin;

    background-color: $background-color;

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
