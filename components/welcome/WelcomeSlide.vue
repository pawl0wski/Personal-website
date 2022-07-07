<template>
    <div class="welcome">
        <div class="welcome__left">
            <WelcomeText />
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

export default Vue.extend({
    components: { WelcomeText, WelcomeCube },
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
    }

    &__right {
        justify-content: end;
    }
}
</style>
