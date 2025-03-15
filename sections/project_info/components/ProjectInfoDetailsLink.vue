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
@use "assets/scss/variables";

.project_info_details_link {
    &__link {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;

        background-color: variables.$background-color;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        text-decoration: none;

        color: variables.$text-color;
        transition: 0.2s background-color;

        border-style: none;
        border-width: 1px;
        border-color: variables.$background-color-more-darker;
        border-radius: variables.$small-margin;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: variables.$even-section-color;
        }

        &__icon {
            font-size: 1.3rem;
        }
    }
}
</style>
