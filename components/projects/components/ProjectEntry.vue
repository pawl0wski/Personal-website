<template>
    <div class="projects__project_entry">
        <nuxt-img :src="img" />
        <h3 class="projects__project_entry__title">
            {{ title }}
        </h3>
        <p>
            {{ content }}
        </p>
        <a>{{ $locale("readMore") }} →</a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        id: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
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
});
</script>
