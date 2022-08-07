<template>
    <div class="knowledge">
        <TitleText :content="$locale('knowledgeTitle')" />
        <div class="knowledge__columns">
            <KnowledgeList
                :title="$locale('languages')"
                :knowledge-array="knowledgeContent['languages']"
            />
            <ColumnDivider />
            <KnowledgeList
                :title="$locale('technologies')"
                :knowledge-array="knowledgeContent['technologies']"
            />
            <ColumnDivider />
            <KnowledgeList
                :title="$locale('appsServices')"
                :knowledge-array="knowledgeContent['appsServices']"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleText from "~/components/TitleText.vue";
import KnowledgeList from "~/components/knowledge/components/KnowledgeList.vue";
import ColumnDivider from "~/components/knowledge/components/ColumnDivider.vue";
import { KnowledgeContentI } from "~/content/interfaces/knowledge";
import knowledgeContent from "~/content/knowledge.json";

export default defineComponent({
    components: {
        KnowledgeList,
        TitleText,
        ColumnDivider,
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
    @include slide;

    display: flex;
    flex-direction: column;

    &__columns {
        margin-top: 2rem;

        display: flex;
        flex-direction: row;
    }
}

@media only screen and (max-width: 800px) {
    div.knowledge {
        align-items: center;
        &__columns {
            flex-direction: column;
            width: 100%;
        }
    }
}
</style>
