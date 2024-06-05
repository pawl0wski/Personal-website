<template>
    <div
        class="projects__project_entry"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
    >
        <NuxtLink
            :to="`project/${project.id}`"
            class="projects__project_entry__link"
        >
            <div
                class="projects__project_entry__link__thumbnail"
                :style="{ backgroundColor: color }"
            >
                <nuxt-img
                    :src="icon"
                    format="webp"
                    :alt="project.name"
                    :class="`projects__project_entry__link__thumbnail__logo${
                        hovered ? '--hovered' : ''
                    }`"
                />
            </div>

            <div class="projects__project_entry__link__text">
                <h3 class="projects__project_entry__link__text__title">
                    {{ project.name }}
                </h3>
                <p class="projects__project_entry__link__text__content">
                    {{ shortContent }}
                </p>
                <span
                    :class="`projects__project_entry__link__text__read_more${
                        hovered ? '--hovered' : ''
                    }`"
                    >{{ $locale("readMore") }} →</span
                >
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Color from "color";
import { ProjectI } from "~/content/interfaces/project";

export default defineComponent({
    props: {
        project: {
            type: Object as PropType<ProjectI>,
            required: true,
        },
        content: {
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
            return `/img/projects/icons/${this.$props.project.id}.png`;
        },
        shortContent() {
            return this.$props.content.slice(0, 100) + "...";
        },
        color() {
            const color = Color(this.$props.project.color);
            if (color.hex() !== "#FFFFFF") return color.darken(0.6);
            return color;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

$project-width: 270px;

.projects__project_entry {
    width: $project-width;
    min-width: $project-width;
    user-select: none;

    border-style: solid;
    border-width: 1px;
    border-color: $background-color-more-lighter;
    border-radius: 0.6rem;

    &__link {
        text-decoration: none;
        color: $text-color;

        &:hover {
            cursor: pointer;
        }

        &__thumbnail {
            width: $project-width;
            aspect-ratio: 2/1.35;

            border-radius: 0.6rem 0.6rem 0 0;

            display: flex;
            align-items: center;
            justify-content: center;

            &__logo {
                height: 4rem;
                aspect-ratio: 1/1;
                transition: 0.2s height ease-in;

                &--hovered {
                    height: 5rem;
                    transition: 0.5s height;
                }
            }
        }

        &__text {
            padding: 0.5rem 1rem 1rem;

            &__title {
                font-weight: normal;
                font-size: 1.35rem;
                margin: 0.7rem 0;
            }

            &__content {
                color: $text-color-muted;
                line-height: 1.35rem;
            }

            &__read_more {
                &--hovered {
                    text-decoration: underline;
                }
            }
        }
    }
}

@media only screen and (max-width: 800px) {
    .projects__project_entry {
        width: 100%;

        &__link {
            &__thumbnail {
                width: 100%;

                &__logo {
                    height: 5rem;
                }
            }
        }
    }
}
</style>
