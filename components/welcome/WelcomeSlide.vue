<template>
    <div class="welcome">
        <div class="welcome__left">
            <WelcomeText />
            <div class="welcome__left__icons">
                <WelcomeIcon
                    v-for="social in socials"
                    :key="social.name"
                    :name="social.name"
                    :icon="social.icon"
                    :href="social.link"
                />
            </div>
        </div>
        <div class="welcome__right">
            <WelcomeCube />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import WelcomeText from "~/components/welcome/components/WelcomeText.vue";
import WelcomeCube from "~/components/welcome/components/WelcomeCube.vue";
import WelcomeIcon from "~/components/welcome/components/WelcomeIcon.vue";
import socialsConfig from "~/config/socials.json";
import SocialI from "~/config/interfaces/social";

export default Vue.extend({
    components: { WelcomeText, WelcomeCube, WelcomeIcon },
    data(): { socials: SocialI[] } {
        const { socials } = socialsConfig;
        return {
            socials,
        };
    },
});
</script>

<style scoped lang="scss">
div.welcome {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    &__left,
    &__right {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    &__left {
        margin: 0 10vw;

        flex-direction: column;
        justify-content: center;

        &__icons {
            margin-top: 2rem;

            width: 100%;
            display: flex;

            gap: 0.9rem;
        }
    }

    &__right {
        justify-content: end;
    }
}
</style>
