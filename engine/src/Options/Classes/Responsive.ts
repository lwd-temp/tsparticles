import type { IOptionLoader } from "../Interfaces/IOptionLoader.js";
import type { IResponsive } from "../Interfaces/IResponsive.js";
import type { ISourceOptions } from "../../Types/ISourceOptions.js";
import type { RecursivePartial } from "../../Types/RecursivePartial.js";
import { ResponsiveMode } from "../../Enums/Modes/ResponsiveMode.js";
import { deepExtend } from "../../Utils/Utils.js";

export class Responsive implements IResponsive, IOptionLoader<IResponsive> {
    maxWidth: number;
    mode: ResponsiveMode | keyof typeof ResponsiveMode;
    options: ISourceOptions;

    constructor() {
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = ResponsiveMode.canvas;
    }

    load(data?: RecursivePartial<IResponsive>): void {
        if (!data) {
            return;
        }

        if (data.maxWidth !== undefined) {
            this.maxWidth = data.maxWidth;
        }

        if (data.mode !== undefined) {
            // not enforcing an error here as this should largely be an opt-in setting
            if (data.mode === ResponsiveMode.screen) {
                this.mode = ResponsiveMode.screen;
            } else {
                this.mode = ResponsiveMode.canvas;
            }
        }

        if (data.options !== undefined) {
            this.options = deepExtend({}, data.options) as ISourceOptions;
        }
    }
}
