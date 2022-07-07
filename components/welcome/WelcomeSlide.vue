<template>
    <div class="welcome">
        <div class="welcome__left">
            <WelcomeText />
        </div>
        <div class="welcome__right">

        </div>
    </div>

</template>
<script>
import WelcomeText from "~/components/welcome/components/WelcomeText";
import Vue from "vue";

export default Vue.extend({
    components: {WelcomeText}
})
</script>

<style scoped lang="scss">

    div.welcome {
        display: flex;
        width: 100vw;
        height: 100vh;

        &__left, &__right {
            width: 50%;
            height: 100%;
        }

}
</style>
