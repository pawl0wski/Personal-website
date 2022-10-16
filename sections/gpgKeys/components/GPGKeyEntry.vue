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
                    <span
                        v-if="!emailShowed"
                        class="clickable-text"
                        @click="showEmail"
                    >{{ $locale("clickToShowEmail") }}</span
                    >
                    <span v-if="emailShowed">{{ gpgKey.email }}</span>
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
                <pre :id="'publicKey' + gpgKey.id" @click="selectAndCopyPublicKey">{{ gpgKey.publicKey }}</pre>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GpgKeyI } from "~/content/interfaces/key";
import Locale from "~/lib/locale/locale";
import copy from "copy-to-clipboard";

export default defineComponent({
    props: {
        gpgKey: {
            type: Object as PropType<GpgKeyI>,
            required: true
        }
    },
    data(): { armoredPublicKeyShowed: boolean; emailShowed: boolean } {
        return { armoredPublicKeyShowed: false, emailShowed: false };
    },
    computed: {
        armoredPublicKeyListText() {
            const locale = new Locale();
            if (this.armoredPublicKeyShowed) {
                return locale.get("clickHereToHidePublicKey");
            }
            return locale.get("clickHereToShowPublicKey");
        }
    },
    methods: {
        toggleShowArmoredPublicKey() {
            this.armoredPublicKeyShowed = !this.armoredPublicKeyShowed;
        },
        showEmail() {
            this.emailShowed = true;
        },
        selectAndCopyPublicKey() {
            const selection = window.getSelection()!;
            const keyDOMElement = document.querySelector(`#publicKey${this.gpgKey.id}`)!;
            selection.selectAllChildren(keyDOMElement);
            copy(this.gpgKey.publicKey);
        }
    }
});
</script>

<style lang="scss" scoped>
div.gpg-key-entry {
    &__content {
        margin: 1.5rem 0;
        width: 50vw;
        min-width: 300px;
        min-height: 50px;

        border-radius: 0.5rem;
        border-width: 1px;
        border-style: solid;
        border-color: $background-color-more-lighter;

        ul {
            margin: 0;
            display: flex;
            flex-direction: column;
            padding-left: 0;
            list-style-type: none;

            li {
                color: $text-color-muted;
                padding: 0.8rem 1rem;
                display: flex;
                align-items: center;
                min-height: 3rem;

                i {
                    color: $text-color;
                    font-size: 1.5rem;
                    margin-right: 1rem;
                }
            }

            hr {
                width: 100%;
                margin: 0 auto;
                border-color: $background-color-more-lighter;
                border-bottom-style: none;
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
    text-decoration: underline;

    &:hover {
        color: $text-color;
    }
}

@media only screen and (max-width: 1000px) {
    div.gpg-key-entry__content {
        width: auto;
    }
}
</style>
