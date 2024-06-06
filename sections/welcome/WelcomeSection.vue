<template>
    <div class="welcome">
        <div class="welcome__content">
            <div class="welcome__content__left">
                <WelcomeText />
                <div
                    class="welcome__content__left__icons animate__animated animate__fadeIn animate__delay-1s"
                >
                    <WelcomeIcon
                        v-for="social in socials"
                        :key="social.name"
                        :name="social.name"
                        :icon="social.icon"
                        :href="social.link"
                    />
                </div>
            </div>
            <div class="welcome__content__right">
                <WelcomeCube />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import WelcomeText from "./components/WelcomeText.vue";
import WelcomeCube from "./components/WelcomeCube.vue";
import WelcomeIcon from "./components/WelcomeIcon.vue";
import socialsContent from "~/content/socials.json";
import type { SocialModel } from "~/content/models/social";

export default defineComponent({
    components: { WelcomeText, WelcomeCube, WelcomeIcon },
    data(): { socials: SocialModel[] } {
        const { socials } = socialsContent;
        return {
            socials,
        };
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/mixins";
@import "assets/scss/variables";

div.welcome {
    @include section;

    &__content {
        height: 100vh;
        display: flex;

        &__left,
        &__right {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
        }

        &__left {
            flex-direction: column;
            justify-content: center;

            align-items: start;

            &__icons {
                margin-top: 2rem;

                width: 100%;
                display: flex;

                gap: 1.5rem;
            }
        }

        &__right {
            justify-content: end;
        }
    }
}

@media only screen and (max-width: 800px) {
    div.welcome {
        &__content {
            &__left {
                text-align: center;
                width: 100%;
                align-items: center;
                margin: 0 $small-margin;

                &__icons {
                    justify-content: center;
                }
            }

            &__right {
                display: none;
            }
        }
    }
}
</style>
