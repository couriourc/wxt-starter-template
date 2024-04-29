import { Singleton } from "@couriourc/design-patterns";

export { Singleton } from "@couriourc/design-patterns";


export const WrapperHelper = new Singleton<{
    $ui: JQuery,
    dom: HTMLElement
}>();

