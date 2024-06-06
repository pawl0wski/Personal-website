<template>
    <div
        class="welcome__icon"
        @mouseover="showIconName"
        @mouseleave="hideIconName"
    >
        <a :href="href" target="_blank">
            <i :class="icon"></i>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createPopper } from "@popperjs/core";
import InfoPopoverController from "~/lib/info_popover_controller/info_popover_controller";
import Locale from "~/lib/locale/locale";
import type { LangI } from "~/lib/locale/interfaces/lang";

export default defineComponent({
    props: {
        icon: {
            type: Array,
            required: true,
        },
        href: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    methods: {
        showIconName(event: MouseEvent) {
            const popoverController = new InfoPopoverController();
            const locale = new Locale();
            popoverController.setText(locale.get(this.name as keyof LangI));
            popoverController.show();
            const popoverElement = popoverController.popover;
            const target = event.target as Element;
            createPopper(target, popoverElement, {});
        },
        hideIconName() {
            const popoverController = new InfoPopoverController();
            popoverController.hide();
        },
    },
});
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

div.welcome__icon {
    a {
        text-decoration: none;
        color: $text-color;

        transition: 0.1s color;

        &:hover {
            color: $primary-color;
        }

        i {
            font-size: 1.8rem;
        }
    }
}
</style>
