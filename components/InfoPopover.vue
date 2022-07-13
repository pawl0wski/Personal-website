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
    padding: 1rem;
    max-width: 18rem;
    border-radius: 10px;
    background-color: $background-color-lighter;
    opacity: 0;

    position: absolute;

    transition: 0.25s opacity;
}
.info-popover__text {
    margin: 0;
}
</style>
