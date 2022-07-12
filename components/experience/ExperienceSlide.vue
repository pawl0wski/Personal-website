<template>
    <div class="experience_slide">
        <TitleText :content="$locale('experienceTitle')" />
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
div.experience_slide {
    min-height: 100vh;
}
</style>
