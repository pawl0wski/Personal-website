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
            {{ content }}
        </p>
        <a>{{ $locale("readMore") }} →</a>
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
    },
});
</script>

<style lang="scss">
div.projects__project_entry {
    width: 300px;

    user-select: none;

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
}
</style>
