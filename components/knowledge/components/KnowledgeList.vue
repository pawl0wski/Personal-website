<template>
    <div class="knowledge_list">
        <p class="knowledge_list__title">{{ title }}</p>
        <div class="knowledge_list__column">
            <KnowledgeEntry
                v-for="knowledge in knowledgeArray"
                :key="knowledge.name"
                :knowledge="knowledge"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { KnowledgeI } from "~/content/interfaces/knowledge";
import KnowledgeEntry from "~/components/knowledge/components/KnowledgeEntry.vue";

export default Vue.extend({
    components: { KnowledgeEntry },

    props: {
        title: {
            type: String,
            required: true,
        },
        knowledgeArray: {
            type: Array as () => KnowledgeI[],
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.knowledge_list {
    width: calc(100% / 3);
    padding: 0 2rem;

    &__title {
        font-weight: bold;
        font-size: x-large;
        text-align: center;
    }

    &__column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
}

@media only screen and (max-width: 800px) {
    .knowledge_list {
        width: 100%;

        &__title {
            text-align: left;
        }
    }
}
</style>
