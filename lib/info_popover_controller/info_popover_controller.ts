/**
 * This class is designed to make the use of the InfoPopover.vue easier.
 * Thanks to it, you can hide, change the text and show the InfoPopover.
 * Make sure that the content of ~/components/InfoPopover.vue is on current page
 */
export default class InfoPopoverController {
    public hide() {
        const popover = this.getPopoverElement()

        if (popover) {
            popover.style.display = "hidden";
            popover.style.opacity = "0";
        }
    }

    public show() {
        const popover = this.getPopoverElement()

        if (popover) {
            popover.style.display = "block";
            popover.style.opacity = "1";
        }
    }

    public setText(text: string) {
        const popoverContent = this.getPopoverTextElement()

        if (popoverContent) {
            popoverContent.textContent = text;
        }
    }

    public getPopoverTextElement(): HTMLElement | null {
        return document.getElementById("info_popover__content__text");
    }

    public getPopoverElement(): HTMLElement | null {
        return document.getElementById("info_popover")!;
    }
}
