<template>
    <div class="gpg-keys-slide">
        <TitleText :content="$locale('gpgKeys')" />
        <div class="gpg-keys-slide__list">
            <GpgKeyEntry
                v-for="gpgKey in gpgKeys"
                :key="gpgKey.id"
                :gpg-key="gpgKey"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import keysContent from "~/content/keys.json";
import { GpgKeyI } from "~/content/interfaces/key";
import GpgKeyEntry from "~/components/gpgKeys/components/GpgKeyEntry.vue";
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

<style lang="scss">
div.gpg-keys-slide {
    @include slide;
    padding-top: $medium-margin;
    padding-bottom: $medium-margin;

    &__list {
        margin-top: $medium-margin;
    }
}
</style>
