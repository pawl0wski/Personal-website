<template>
    <div class="education">
        <div class="education__content">
            <TitleText content="Kariera" style="margin-bottom: 5rem" />
            <CareerEntry v-for="c in career" :key="c.name" :career="c" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type CareerModel from "~/content/models/career";
import careerContent from "~/content/career.json";
import CareerEntry from "~/sections/career/components/CareerEntry.vue";

export default defineComponent({
    components: { CareerEntry },
    data(): { career: CareerModel[] } {
        return {
            career: careerContent["career"],
        };
    },
});
</script>

<style scoped lang="scss">
@import "assets/scss/mixins";
@import "assets/scss/variables";

div.education {
    @include section;
}
</style>
