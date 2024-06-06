<template>
    <div class="title">
        <div class="title__box">
            <h1 v-if="useH1">{{ content }}</h1>
            <h2 v-if="!useH1">{{ content }}</h2>
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
        useH1: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

div.title {
    margin-top: 0.5rem;

    &__box {
        width: fit-content;

        border-top-style: solid;
        border-top-color: $primary-color;
        border-top-width: 3px;

        h1,
        h2 {
            font-size: 2rem;
            margin-top: 0.5rem;
        }
    }
}
</style>
