<template>
    <div id="knowledge" class="knowledge">
        <div class="knowledge__content">
            <TitleText :content="$locale('knowledgeTitle')" />
            <div class="knowledge__content__columns">
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KnowledgeList from "./components/KnowledgeList.vue";
import ColumnDivider from "./components/ColumnDivider.vue";
import TitleText from "~/components/TitleText.vue";
import type { KnowledgeContentI } from "~/content/interfaces/knowledge";
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
@import "assets/scss/mixins";
@import "assets/scss/variables";

div.knowledge {
    @include section;

    &__content {
        padding-bottom: 3rem;

        display: flex;
        flex-direction: column;
        width: 100%;
        &__columns {
            display: flex;
            flex-direction: row;
        }
    }
}

@media only screen and (max-width: 800px) {
    div.knowledge {
        &__content {
            align-items: center;
            &__columns {
                flex-direction: column;
                width: 100%;
            }
        }
    }
}
</style>
