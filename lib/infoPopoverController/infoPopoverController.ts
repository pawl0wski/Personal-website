/**
 * This class is designed to make the use of the InfoPopover.vue easier.
 * Thanks to it you can hide, change the text and show the InfoPopover.
 * Make sure that the content of ~/components/InfoPopover.vue is on current page
 */
export default class InfoPopoverController {
    private readonly _popover: HTMLElement;
    private readonly _popoverText: HTMLElement;

    public constructor() {
        this._popover = document.getElementsByClassName(
            "info_popover",
        )[0] as HTMLElement;

        this._popoverText = document.getElementsByClassName(
            "info_popover__content__text",
        )[0] as HTMLElement;
    }

    public hide() {
        this._popover.style.display = "hidden";
        this._popover.style.opacity = "0";
    }

    public show() {
        this._popover.style.display = "block";
        this._popover.style.opacity = "1";
    }

    public setText(text: string) {
        this._popoverText.textContent = text;
    }

    public get popover() {
        return this._popover;
    }
}
