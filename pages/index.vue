<template>
    <div class="index">
        <WelcomeSlide />
        <AboutMeSlide />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import WelcomeSlide from "~/components/welcome/WelcomeSlide.vue";
import AboutMeSlide from "~/components/aboutMe/AboutMeSlide.vue";

export default Vue.extend({
    name: "IndexPage",
    components: { AboutMeSlide, WelcomeSlide },
});
</script>

<style lang="scss">
body {
    background-color: $background-color;
    color: $text-color;
    font-family: $font-family;
}
</style>
