<template>
    <div class="project_info_slide">
        <a href="/" class="project_info_slide__back">
            {{ $locale("backToHomePage") }}
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.project_info_slide {
    &__back {
        color: $text-color;

        text-decoration: none;
        font-size: x-large;

        &:hover {
            color: $primary-color;
            text-decoration: underline;
        }
    }
}
</style>
