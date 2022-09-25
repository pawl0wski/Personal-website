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
import { defineComponent, PropType } from "vue";
import LinkI from "~/content/interfaces/link";

export default defineComponent({
    props: {
        link: {
            type: Object as PropType<LinkI>,
            required: true,
        },
    },
});
</script>

<style lang="scss">
.project_info_details_link {
    &__link {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
        border-radius: 7px;

        background-color: $background-color-lighter;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        text-decoration: none;

        color: $text-color;
        transition: 0.2s background-color;

        &:hover {
            background-color: $background-color-more-lighter;
        }

        &__icon {
            font-size: 1.3rem;
        }
    }
}
</style>
