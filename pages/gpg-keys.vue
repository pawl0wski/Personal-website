<template>
    <div class="gpg-keys">
        <GPGKeysSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GPGKeysSection from "~/sections/gpg_keys/GPGKeysSection.vue";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    components: {
        GPGKeysSection,
    },
    head() {
        const locale = new Locale();
        return {
            title: `Jakub Pawłowski | ${locale.get("gpgKeys")}`,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: locale.get("gpgKeysDescription"),
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
@use "assets/scss/mixins";

div.gpg-keys {
    @include mixins.page;
}
</style>
