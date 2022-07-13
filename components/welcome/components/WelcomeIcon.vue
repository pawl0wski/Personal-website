<template>
    <div class="welcome__icon">
        <a :href="href" target="_blank">
            <i :class="icon"></i>
        </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        icon: {
            type: Array,
            required: true,
        },
        href: {
            type: String,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
div.welcome__icon {
    a {
        text-decoration: none;
        color: $text-color;

        transition: 0.1s color;

        &:hover {
            color: $primary-color;
        }

        i {
            font-size: 1.8rem;
        }
    }
}
</style>
