<template>
    <div class="title">
        <div class="title__box">
            <h1>{{ content }}</h1>
        </div>
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
div.title {
    margin-top: 0.5rem;
    &__box {
        width: fit-content;

        border-top-style: solid;
        border-top-color: $primary-color;
        border-top-width: 3px;

        h1 {
            margin-top: 0.5rem;
        }
    }
}
</style>
