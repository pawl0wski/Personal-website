<template>
    <div class="welcome">
        <div class="welcome__left">
            <h1 v-html="$t('message.aboutmeTitle')"></h1>
            <h3>
                {{ $t("message.aboutmeDesc") }}
            </h3>
        </div>
        <div class="welcome__right">

        </div>
    </div>
</template>

<style lang="scss">
div.welcome {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;

    &__left,
    &__right {
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    &__left {
        align-items: center;
        justify-content: center;

        h1:first-child {
            margin-bottom: 0rem;
        }
    }
}
</style>