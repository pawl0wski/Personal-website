<template>
    <div class="project_info_images">
        <img />
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            currentIndex: 0,
        };
    },
});
</script>

<style lang="scss" scoped>
.project_info_images {
    width: 100%;
    aspect-ratio: 16 / 9;

    background-color: $background-color-lighter;
}
</style>
