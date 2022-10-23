<template>
    <div class="welcome_text animate__animated animate__fadeInUp">
        <p class="welcome_text__title" v-html="$locale('welcomeTitle')"></p>
        <p
            class="welcome_text__continuation"
            v-html="$locale('welcomeContinuation')"
        ></p>
    </div>
</template>

<style scoped lang="scss">
.welcome_text {
    letter-spacing: 0.05rem;

    &__title {
        font-size: xxx-large;
        font-weight: bold;
        margin-bottom: 0;
    }

    &__continuation {
        margin-top: 1rem;
        font-size: x-large;
    }
}
</style>
