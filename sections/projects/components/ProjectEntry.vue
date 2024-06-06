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
                :style="{ backgroundColor: project.mutedColor }"
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
                <button
                    :class="`projects__project_entry__link__text__read_more ${
                        hovered
                            ? 'projects__project_entry__link__text__read_more--hovered'
                            : ''
                    }`"
                >
                    {{ $locale("readMore") }}
                </button>
            </div>
        </NuxtLink>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { ProjectModel } from "~/content/models/project";

export default defineComponent({
    props: {
        project: {
            type: Object as PropType<ProjectModel>,
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
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

$project-width: 20rem;

.projects__project_entry {
    width: $project-width;
    min-width: $project-width;
    user-select: none;
    background-color: $background-color;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

    border-style: none;
    border-radius: $small-margin;
    border-width: 1px;
    border-color: $background-color-darker;

    &__link {
        text-decoration: none;
        color: $text-color;

        &:hover {
            cursor: pointer;
        }

        &__thumbnail {
            height: 12rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-top-right-radius: $small-margin;
            border-top-left-radius: $small-margin;

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
                font-weight: 600;
                font-size: 1.35rem;
                margin: 0.7rem 0;
            }

            &__content {
                line-height: 1.35rem;
            }

            &__read_more {
                width: 100%;
                background-color: transparentize($primary-color, 0);
                color: white;
                font-weight: bold;
                padding: 0.5rem 1rem;
                border-style: none;

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
