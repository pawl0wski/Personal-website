<template>
    <div class="knowledge_list">
        <p class="knowledge_list__title">{{ title }}</p>
        <div class="knowledge_list__column">
            <KnowledgeEntry
                v-for="knowledge in knowledgeArray"
                :key="knowledge.technology"
                :knowledge="knowledge"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import KnowledgeEntry from "./KnowledgeEntry.vue";
import { KnowledgeI } from "~/content/interfaces/knowledge";

export default defineComponent({
    components: { KnowledgeEntry },

    props: {
        title: {
            type: String,
            required: true,
        },
        knowledgeArray: {
            type: Object as PropType<KnowledgeI[]>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
.knowledge_list {
    width: calc(100% / 3);

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
    }
}
</style>
