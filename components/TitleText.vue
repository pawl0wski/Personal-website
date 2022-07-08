<template>
    <div class="title">
        <div class="title__box">
            <h1>{{ content }}</h1>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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
    &__box {
        width: fit-content;

        border-top-style: solid;
        border-top-color: $primary-color;

        h1 {
            margin-top: 0.2rem;
        }
    }
}
</style>
