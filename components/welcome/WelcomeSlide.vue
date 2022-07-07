<template>
    <div class="welcome">
        <div class="welcome__left">
            <WelcomeText />
            <div class="welcome__left__icons">
                <WelcomeIcon
                    icon="devicon-github-original"
                    href="https://github.com/pawl0wski"
                />
            </div>
        </div>
        <div class="welcome__right">
            <WelcomeCube />
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import WelcomeText from "~/components/welcome/components/WelcomeText";
import WelcomeCube from "~/components/welcome/components/WelcomeCube";
import WelcomeIcon from "~/components/welcome/components/WelcomeIcon";

export default Vue.extend({
    components: { WelcomeText, WelcomeCube, WelcomeIcon },
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
            width: 100%;
            display: flex;
        }
    }

    &__right {
        justify-content: end;
    }
}
</style>
