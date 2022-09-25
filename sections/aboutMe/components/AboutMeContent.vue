<template>
    <div class="about_me__content">
        <p v-html="content"></p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        content: {
            type: String,
            required: true,
            default: "",
        },
    },
});
</script>

<style lang="scss" scoped>
div.about_me__content {
    color: $text-color-muted;
    max-width: 30rem;

    font-size: large;

    line-height: 2rem;
    word-spacing: 0.1rem;
}
</style>
