<template>
    <div id="info-popover">
        <p class="info-popover__text">{{ content }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        content: {
            type: String,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
#info-popover {
    padding: 2rem;
    background-color: $background-color-lighter;
}
</style>
