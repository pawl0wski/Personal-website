<template>
    <div class="welcome_text animate__animated animate__fadeInUp">
        <p class="welcome_text__title">
            {{ $locale("welcomeTitle") }}
            <span class="primary-color">{{ $locale("firstname") }}</span>
        </p>
        <p class="welcome_text__continuation">
            <span class="primary-color">{{
                $locale("welcomeContinuationProfession")
            }}</span>
            {{ $locale("welcomeContinuationProfessionLocalization") }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.welcome_text {
    letter-spacing: 0.05rem;

    &__title {
        font-size: 3.5rem;
        font-weight: bold;
        margin-bottom: 0;
    }

    &__continuation {
        margin-top: 1rem;
        font-size: x-large;
    }
}

@media only screen and (max-width: 800px) {
    .welcome_text {
        &__title {
            font-size: xx-large;
        }

        &__continuation {
            font-size: large;
        }
    }
}
</style>
<script setup lang="ts"></script>
