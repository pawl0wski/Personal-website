<template>
    <a class="iconlink__link" :href="href"
       target="__blank" v-if="!!icon"
       @mouseover="isHovering = true" @mouseout="isHovering = false">
        <i :class="['animate__animated', 'iconlink__link__icon', icon, isHovering ? 'animate__heartBeat' : '']"
        ></i>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            isHovering: false
        };
    },
    props: {
        icon: Object as () => Array<String>,
        href: String
    }
});
</script>

<style lang="scss" scoped>
.iconlink__link {
    &__icon {
        font-size: 1.6em;
    }
}

</style>