<template>
    <div class="knowledge_entry">
        <nuxt-img
            loading="lazy"
            class="knowledge_entry__icon"
            :src="`img/devicon/${knowledge.icon}.svg`"
        />
        <span class="knowledge_entry__name">{{ knowledge.name }}</span>
        <i
            v-if="knowledge.stillLearning"
            @mouseover="showStillLearningPopover"
            @mouseleave="hideStillLearningPopover"
            class="fa-solid fa-book-open knowledge_entry__still_learning"
        ></i>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createPopper } from "@popperjs/core";
import { KnowledgeI } from "~/content/interfaces/knowledge";

export default Vue.extend({
    props: {
        knowledge: {
            type: Object as () => KnowledgeI,
            required: true,
        },
    },
    methods: {
        showStillLearningPopover(event: MouseEvent) {
            const target = event.relatedTarget as Element;
            const popover = document.querySelector(
                "#info-popover"
            ) as HTMLElement;

            popover.style.opacity = "1";

            createPopper(target, popover);
        },
        hideStillLearningPopover() {
            const popover = document.querySelector(
                "#info-popover"
            ) as HTMLElement;
            if (popover != null) popover.style.opacity = "0";
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
    background-color: $background-color-lighter;

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
