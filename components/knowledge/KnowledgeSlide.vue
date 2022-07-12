<template>
    <div class="knowledge">
        <TitleText :content="$locale('knowledgeTitle')" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";

export default Vue.extend({
    components: {
        TitleText,
    },
});
</script>

<style lang="scss">
div.knowledge {
    min-height: 100vh;
}
</style>
