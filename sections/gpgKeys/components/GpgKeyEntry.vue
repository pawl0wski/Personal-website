<template>
    <div class="gpg-key-entry">
        <h2>{{ gpgKey.label }}</h2>
        <div class="gpg-key-entry__content">
            <ul class="gpg-key-entry__content__list">
                <li style="line-break: anywhere">
                    <i class="fa-solid fa-key"></i>
                    {{ gpgKey.id }}
                </li>
                <hr />
                <li>
                    <i class="fa-solid fa-user"></i>
                    {{ gpgKey.name }}
                </li>
                <hr />
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    {{ gpgKey.email }}
                </li>
                <hr />
                <li>
                    <i class="fa-solid fa-shield"></i>
                    <span
                        class="clickable-text"
                        @click="toggleShowArmoredPublicKey"
                    >
                        {{ armoredPublicKeyListText }}
                    </span>
                </li>
            </ul>
            <div
                :style="{
                    'max-height': armoredPublicKeyShowed ? '1000px' : '0',
                }"
                class="gpg-key-entry__content__armored-key"
            >
                <pre>{{ gpgKey.armoredPublicKey }}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GpgKeyI } from "~/content/interfaces/key";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    props: {
        gpgKey: {
            type: Object as PropType<GpgKeyI>,
            required: true,
        },
    },
    data(): { armoredPublicKeyShowed: boolean } {
        return { armoredPublicKeyShowed: false };
    },
    computed: {
        armoredPublicKeyListText() {
            const locale = new Locale();
            if (this.armoredPublicKeyShowed) {
                return locale.get("clickHereToHideArmoredPublicKey");
            }
            return locale.get("clickHereToShowArmoredPublicKey");
        },
    },
    methods: {
        toggleShowArmoredPublicKey() {
            this.armoredPublicKeyShowed = !this.armoredPublicKeyShowed;
        },
    },
});
</script>

<style lang="scss">
div.gpg-key-entry {
    &__content {
        margin: 1.5rem 0;
        width: 50vw;
        min-width: 300px;
        min-height: 50px;
        background-color: $background-color-lighter;
        border-radius: 0.5rem;

        ul {
            margin: 0;
            display: flex;
            flex-direction: column;
            padding-left: 0;
            list-style-type: none;
            li {
                padding: 0.8rem 1rem;
                display: flex;
                align-items: center;
                min-height: 3rem;
                i {
                    font-size: 1.5rem;
                    margin-right: 1rem;
                }
            }
            hr {
                width: 97%;
                margin: 0 auto;
                border-color: $background-color-more-lighter;
            }
        }

        &__armored-key {
            padding-left: 4rem;
            overflow-y: hidden;
            transition: max-height 0.15s ease-out;
        }
    }
}

span.clickable-text {
    cursor: pointer;
    user-select: none;
    &:hover {
        text-decoration: underline;
    }
}

@media only screen and (max-width: 1000px) {
    div.gpg-key-entry__content {
        width: auto;
    }
}
</style>
