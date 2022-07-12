<template>
    <div class="knowledge_entry">
        <i :class="[knowledge.icon, 'knowledge_entry__icon', 'colored']" />
        <span class="knowledge_entry__name">{{ knowledge.name }}</span>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { KnowledgeI } from "~/content/interfaces/knowledge";

export default Vue.extend({
    props: {
        knowledge: {
            type: Object as () => KnowledgeI,
            required: true,
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
        font-size: 1.7rem;
    }

    &__name {
        padding-left: 1rem;
    }
}
</style>
