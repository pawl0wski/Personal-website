<template>
    <div class="knowledge">
        <TitleText :content="$locale('knowledgeTitle')" />
        <div class="knowledge__columns">
            <KnowledgeList
                :title="$locale('languages')"
                :knowledge-array="knowledgeContent['languages']"
            />
            <KnowledgeList
                :title="$locale('technologies')"
                :knowledge-array="knowledgeContent['technologies']"
            />
            <KnowledgeList
                :title="$locale('others')"
                :knowledge-array="knowledgeContent['others']"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";
import KnowledgeList from "~/components/knowledge/components/KnowledgeList.vue";
import { KnowledgeContentI } from "~/content/interfaces/knowledge";
import knowledgeContent from "~/content/knowledge.json";

export default Vue.extend({
    components: {
        KnowledgeList,
        TitleText,
    },
    data(): {
        knowledgeContent: KnowledgeContentI;
    } {
        return {
            knowledgeContent,
        };
    },
});
</script>

<style lang="scss" scoped>
div.knowledge {
    min-height: 100vh;

    &__columns {
        margin-top: 5rem;

        display: flex;
        flex-direction: row;
    }
}
</style>
