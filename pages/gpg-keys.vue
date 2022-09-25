<template>
    <div class="gpg-keys">
        <GpgKeysSlide />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GpgKeysSlide from "~/components/gpgKeys/GpgKeysSlide.vue";
export default defineComponent({
    components: {
        GpgKeysSlide,
    },
});
</script>

<style lang="scss">
div.gpg-keys {
    @include page;
}
</style>
