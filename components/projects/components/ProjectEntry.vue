<template>
    <div class="projects__project_entry">
        <div
            class="projects__project_entry__thumbnail"
            :style="{ backgroundColor: color }"
        >
            <nuxt-img
                :src="icon"
                format="webp"
                class="projects__project_entry__thumbnail__logo"
            />
        </div>

        <h3 class="projects__project_entry__title">
            {{ title }}
        </h3>
        <p class="projects__project_entry__content">
            {{ shortContent }}
        </p>
        <a class="projects__project_entry__read_more"
            >{{ $locale("readMore") }} →</a
        >
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
div.projects__project_entry {
    width: 300px;

    user-select: none;

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

        img.projects__project_entry__thumbnail__logo {
            height: 5rem;
            aspect-ratio: 1/1;
        }
    }

    h3.projects__project_entry__title {
        font-size: 1.4rem;
        margin: 0.7rem 0;
    }

    p.projects__project_entry__content {
        color: $text-color-muted;
    }

    a.projects__project_entry__read_more {
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
