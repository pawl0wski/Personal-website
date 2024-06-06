<template>
    <div class="pulse-loader">
        <div v-for="index in 3" :key="index"
             :style="pulseLoaderCircleStyle"
             class="pulse-loader__circle"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "PulseLoader",
    props: {
        color: {
            type: String,
            required: true
        }
    },
    computed: {
        pulseLoaderCircleStyle() {
            return {"background-color": this.$props.color};
        }
    }

});
</script>

<style lang="scss">
div.pulse-loader {
    display: flex;
    align-content: center;
    gap: 0.7rem;

    &__circle {
        width: 0.7rem;
        aspect-ratio: 1/1;
        border-radius: 100%;
        background-color: white;

        animation: 1.5s infinite pulse-circle-beat running ease-in-out;


        &:nth-of-type(2) {
            animation-delay: 0.3s;
        }

        &:nth-of-type(3) {
            animation-delay: 0.6s;
        }
    }
}

@keyframes pulse-circle-beat {
    0%, 100% {
        opacity: 0.5;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.3);
    }
}
</style>
