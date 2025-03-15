<template>
    <div class="education">
        <div class="education__content">
            <TitleText
                :content="$locale('carrier')"
                style="margin-bottom: 5rem"
            />
            <CareerEntry v-for="c in career" :key="c.name" :career="c" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type CareerModel from "~/content/models/career";
import careerContent from "~/content/career.json";
import CareerEntry from "~/sections/career/components/CareerEntry.vue";
import TitleText from "~/components/TitleText.vue";

export default defineComponent({
    components: { TitleText, CareerEntry },
    data(): { career: CareerModel[] } {
        return {
            career: careerContent["career"],
        };
    },
});
</script>

<style scoped lang="scss">
@use "assets/scss/mixins";

div.education {
    @include mixins.section;
}
</style>
