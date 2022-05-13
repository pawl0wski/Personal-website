<template>
    <div class="welcome">
        <div class="welcome__left">
            <h1 class="welcome__left__title" v-html="$t('message.aboutmeTitle')"></h1>
            <p class="welcome__left__extra">
                {{ $t("message.aboutmeDesc") }}
            </p>
            <p class="welcome__left__content" v-html="$t('message.aboutmeContent')"></p>
            <div class="welcome__left__icons">
                <IconLink :icon="['fa-brands', 'fa-github']" href="https://github.com/pawl0wski" />
                <IconLink :icon="['fa-solid', 'fa-envelope']" href="mailto:jakub@jpawlowski.me" />
                <IconLink :icon="['fa-solid', 'fa-code-branch']" href="https://github.com/pawl0wski/Personal-website" />
            </div>

        </div>
        <div class="welcome__right">
            <img src="../assets/avatar.webp" class="welcome__right__avatar animate__animated animate__fadeInDown">
        </div>
    </div>
</template>

<script lang="ts" setup>
import IconLink from "../components/IconLink/IconLink.vue"
</script>

<style lang="scss">
.welcome {
    width: 100%;
    height: 100vh;

    padding: 0 2rem;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;


    &__left,
    &__right {
        width: 50%;
        min-width: 300px;
        display: flex;
        flex-direction: column;
    }

    &__right {
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        &__avatar {
            width: 30%;
            max-width: 150px;

            height: auto;
            border-radius: 100%;

        }
    }

    &__left {
        align-items: center;
        justify-content: center;
        text-align: center;

        h1:first-child {
            margin-bottom: 0rem;
        }

        &__extra {
            font-weight: 600;
            margin-bottom: 0;
        }

        &__content {
            max-width: 25rem;
        }

        &__icons {
            a:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }
}

@media only screen and (max-width: 700px) {
    .welcome {
        flex-direction: column-reverse;

        &__left,
        &__right {
            width: 100%;
            height: fit-content;
        }
    }
}
</style>