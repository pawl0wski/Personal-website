<template>
    <div
        class="projects__project_entry"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
    >
        <NuxtLink
            :to="`project/${projectId}`"
            class="projects__project_entry__link"
        >
            <div
                class="projects__project_entry__link__thumbnail"
                :style="{ backgroundColor: color }"
            >
                <nuxt-img
                    :src="icon"
                    format="webp"
                    :class="`projects__project_entry__link__thumbnail__logo${
                        hovered ? '--hovered' : ''
                    }`"
                />
            </div>

            <h3 class="projects__project_entry__link__title">
                {{ title }}
            </h3>
            <p class="projects__project_entry__link__content">
                {{ shortContent }}
            </p>
            <a
                :class="`projects__project_entry__link__read_more${
                    hovered ? '--hovered' : ''
                }`"
                >{{ $locale("readMore") }} →</a
            >
        </NuxtLink>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        projectId: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    data(): { hovered: boolean } {
        return {
            hovered: false,
        };
    },
    computed: {
        icon() {
            return `/img/projects/icons/${this.projectId}.png`;
        },
        shortContent() {
            return this.content.slice(0, 100) + "...";
        },
    },
});
</script>

<style lang="scss">
.projects__project_entry {
    width: 300px;
    user-select: none;
    &__link {
        text-decoration: none;
        color: $text-color;

        &:hover {
            cursor: pointer;
        }

        &__thumbnail {
            width: 300px;
            height: 200px;

            border-radius: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;

            &__logo {
                height: 4.5rem;
                aspect-ratio: 1/1;
                transition: 0.5s height;

                &--hovered {
                    height: 6rem;
                    transition: 0.5s height;
                }
            }
        }

        &__title {
            font-size: 1.4rem;
            margin: 0.7rem 0;
        }

        &__content {
            color: $text-color-muted;
        }

        &__read_more {
            &--hovered {
                text-decoration: underline;
            }
        }
    }
}
</style>
