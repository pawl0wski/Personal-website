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
import { GpgKeyI } from "~/content/interfaces/key";
import TitleText from "~/components/TitleText.vue";

export default defineComponent({
    components: { GpgKeyEntry, TitleText },
    data(): { gpgKeys: GpgKeyI[] } {
        return {
            gpgKeys: keysContent.keys as GpgKeyI[],
        };
    },
});
</script>

<style lang="scss" scoped>
div.gpg-keys-section {
    @include section;
    &__content {
        padding-top: $medium-margin;
        padding-bottom: $medium-margin;

        &__list {
            margin-top: $medium-margin;
        }
    }
}
</style>
