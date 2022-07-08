<template>
    <h1 class="animate__animated animate__fadeInUp" v-html="content"></h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    computed: {
        content() {
            return this.$locale("welcomeTitle");
        },
    },
});
</script>

<style scoped lang="scss">
h1 {
    line-height: 2.5rem;
    letter-spacing: 0.05rem;
}
</style>
