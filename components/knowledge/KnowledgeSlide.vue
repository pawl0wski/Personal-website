<template>
    <div class="knowledge">
        <TitleText :content="$locale('knowledgeTitle')" />
        <div class="knowledge__columns">
            <KnowledgeList :title="$locale('languages')" />
            <KnowledgeList :title="$locale('technologies')" />
            <KnowledgeList :title="$locale('others')" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";
import KnowledgeList from "~/components/knowledge/components/KnowledgeList.vue";

export default Vue.extend({
    components: {
        KnowledgeList,
        TitleText,
    },
});
</script>

<style lang="scss">
div.knowledge {
    min-height: 100vh;

    &__columns {
        margin-top: 5rem;

        display: flex;
        flex-direction: row;
    }
}
</style>
