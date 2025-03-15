<template>
    <div class="gpg-keys-section">
        <div class="gpg-keys-section__content">
            <TitleText :content="$locale('gpgKeys')" :use-h1="true" />
            <div class="gpg-keys-section__content__list">
                <GpgKeyEntry
                    v-for="gpgKey in gpgKeys"
                    :key="gpgKey.id"
                    :gpg-key="gpgKey"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GpgKeyEntry from "./components/GPGKeyEntry.vue";
import keysContent from "~/content/keys.json";
import type { GpgKeyModel } from "~/content/models/gpg_key";
import TitleText from "~/components/TitleText.vue";

export default defineComponent({
    components: { GpgKeyEntry, TitleText },
    data(): { gpgKeys: GpgKeyModel[] } {
        return {
            gpgKeys: keysContent.keys as GpgKeyModel[],
        };
    },
});
</script>

<style lang="scss" scoped>
@use "assets/scss/variables";
@use "assets/scss/mixins";

div.gpg-keys-section {
    @include mixins.section;

    &__content {
        padding-top: variables.$medium-margin;
        padding-bottom: variables.$medium-margin;

        &__list {
            margin-top: variables.$medium-margin;
        }
    }
}
</style>
