<template>
    <Welcome/>
</template>

<script lang="ts">
import Vue from "vue";
import Welcome from "~/components/welcome/Welcome.vue";

export default Vue.extend({
    name: "IndexPage",
    components: { Welcome },
});
</script>

<style lang="scss">
body {
    background-color: $background-color;
    color: $text-color;
    font-family: $font-family;
}
</style>
