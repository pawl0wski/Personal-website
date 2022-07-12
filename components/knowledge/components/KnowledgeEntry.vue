<template>
    <div class="knowledge_entry"></div>
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
