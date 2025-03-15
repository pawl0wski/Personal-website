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
import InfoPopoverController from "~/lib/infoPopoverController/infoPopoverController";
import Locale from "~/lib/locale/locale";
import type { LangI } from "~/lib/locale/interfaces/lang";

interface WelcomeIconData {
    popoverController: InfoPopoverController;
}

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
    data: (): WelcomeIconData => ({
        popoverController: new InfoPopoverController(),
    }),
    methods: {
        showIconName(event: MouseEvent) {
            const locale = new Locale();
            const popover = this.popoverController.getPopoverElement();
            const target = event.target;

            if (!popover || !target) {
                return;
            }

            this.popoverController.setText(
                locale.get(this.name as keyof LangI),
            );
            this.popoverController.show();

            createPopper(target as Element, popover, {});
        },
        hideIconName() {
            const popoverController = new InfoPopoverController();
            popoverController.hide();
        },
    },
});
</script>

<style lang="scss" scoped>
@use "assets/scss/variables";

div.welcome__icon {
    a {
        text-decoration: none;
        color: variables.$text-color;

        transition: 0.1s color;

        &:hover {
            color: variables.$primary-color;
        }

        i {
            font-size: 1.8rem;
        }
    }
}
</style>
