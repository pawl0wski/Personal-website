<template>
    <div class="gpg-keys">
        <GPGKeysSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GPGKeysSection from "~/sections/gpgKeys/GPGKeysSection.vue";
export default defineComponent({
    components: {
        GPGKeysSection,
    },
});
</script>

<style lang="scss">
div.gpg-keys {
    @include page;
}
</style>
