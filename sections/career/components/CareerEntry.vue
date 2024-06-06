<template>
    <div class="education-section">
        <NuxtImg :src="career.image" format="webp" />
        <div class="education-section__content">
            <h3 class="education-section__content__title">{{ career.name }}</h3>
            <p class="education-section__content__date">{{ career.date }}</p>
            <p class="education-section__content__description">
                {{ career.description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type CareerModel from "~/content/models/career";
import type { PropType } from "vue";

export default defineComponent({
    name: "EducationEntry",
    props: {
        career: {
            type: Object as PropType<CareerModel>,
            required: true,
        },
    },
});
</script>

<style scoped lang="scss">
@import "assets/scss/variables";
.education-section {
    width: fit-content;
    padding: 0 0.5rem;
    display: flex;
    align-content: center;
    flex-direction: row;

    img {
        height: 5rem;
    }

    &__content {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &__title {
            margin: 0 0 0.5rem;
        }

        p {
            margin: 0;
        }

        &__date {
            color: $text-color-muted;
        }
    }
}
</style>
