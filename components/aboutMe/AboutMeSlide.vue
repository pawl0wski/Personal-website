<template>
    <div class="about_me">
        <div class="about_me__left">
            <TitleText content="O mnie" />
        </div>
        <div class="about_me__right"></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleText from "~/components/TitleText.vue";

export default Vue.extend({
    components: { TitleText },
});
</script>

<style lang="scss">
div.about_me {
    width: 100vw;
    min-height: 100vh;

    margin: 0 $default-margin;
}
</style>
