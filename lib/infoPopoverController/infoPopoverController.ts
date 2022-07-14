export default class InfoPopoverController {
    private readonly _popover: HTMLElement;
    private readonly _popoverText: HTMLElement;

    public constructor() {
        this._popover = document.getElementsByClassName(
            "info_popover"
        )[0] as HTMLElement;

        this._popoverText = document.getElementsByClassName(
            "info_popover__text"
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
