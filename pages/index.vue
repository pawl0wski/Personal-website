<template>
    <div class="index">
        <div class="index__content">
            <WelcomeSection />
            <AboutMeSection />
            <ProjectsSection />
            <KnowledgeSection />
        </div>
        <InfoPopover />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeSection from "~/sections/welcome/WelcomeSection.vue";
import AboutMeSection from "~/sections/aboutMe/AboutMeSection.vue";
import ProjectsSection from "~/sections/projects/ProjectsSection.vue";
import KnowledgeSection from "~/sections/knowledge/KnowledgeSection.vue";
import InfoPopover from "~/components/InfoPopover.vue";
import Locale from "~/lib/locale/locale";

export default defineComponent({
    name: "IndexPage",
    components: {
        ProjectsSection,
        AboutMeSection,
        WelcomeSection,
        KnowledgeSection,
        InfoPopover,
    },
    head() {
        const locale = new Locale();
        return {
            title: "Jakub Pawłowski",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: locale.get("indexDescription"),
                },
            ],
        };
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
@import "assets/scss/mixins";

div.index {
    &__content {
        @include page;
        div:nth-child(even) {
            background-color: $even-section-color;

            &:not(:last-child):after {
                content: "";
                display: block;
                border-style: solid;
                border-width: 0 0 5vw 100vw;
                border-color: transparent transparent $background-color
                    transparent;
            }

            &:before {
                content: "";
                display: block;
                border-style: solid;
                border-width: 5vw 100vw 0 0;
                border-color: $background-color transparent transparent
                    transparent;
            }
        }
    }
}

@media only screen and (max-width: 800px) {
    div.index__content {
        > div:not(:first-child) {
            margin-top: 5rem;
        }
    }
}
</style>
