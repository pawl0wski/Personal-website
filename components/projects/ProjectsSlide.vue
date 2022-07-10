<template>
    <div class="projects">
        <TitleText :content="$locale('projectsTitle')" />
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
