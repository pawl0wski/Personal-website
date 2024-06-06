<template>
    <div class="project_info_details_link">
        <a
            :href="link.href"
            target="_blank"
            class="project_info_details_link__link"
        >
            <div class="project_info_details_link__link__icon">
                <i :class="link.icons"></i>
            </div>
            <span class="project_info_details_link__link__name">
                {{ $locale(link.name) }}
            </span>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type LinkModel from "~/content/models/link";

export default defineComponent({
    props: {
        link: {
            type: Object as PropType<LinkModel>,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.project_info_details_link {
    &__link {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;

        background-color: $background-color;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        text-decoration: none;

        color: $text-color;
        transition: 0.2s background-color;

        border-style: solid;
        border-width: 1px;
        border-color: $background-color-more-darker;
        border-radius: $small-margin;

        &:hover {
            background-color: $even-section-color;
        }

        &__icon {
            font-size: 1.3rem;
        }
    }
}
</style>
