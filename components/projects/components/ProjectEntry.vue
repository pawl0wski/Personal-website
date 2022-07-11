<template>
    <div class="projects__project_entry">
        <nuxt-img
            :src="thumbnail"
            format="webp"
            class="projects__project_entry__thumbnail"
        />
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
    },
    computed: {
        thumbnail() {
            return `/img/projects/${this.projectId}_thumbnail.jpg`;
        },
        shortContent() {
            return this.content.split(" ").slice(0, 15).join(" ") + "...";
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

    img:first-child {
        border-radius: 1rem;
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
