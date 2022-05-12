<template>
    <a :href="href" target="__blank">
        <i :class="icon"></i>
    </a>
</template>

<script lang="ts">
export default {
    props: {
        icon: Object as () => Array<String>,
        href: String
    }
}
</script>

<style scoped>
i {
    font-size: 1.6em;
}
</style>