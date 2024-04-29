import { atomWithImmer, useImmerAtom } from "jotai-immer";
import { createStore } from 'jotai';
import { defaultSettings, getSettings, settingsStorage } from "@/shared/config.ts";
import _ from "underscore";
import { ISettingsOption } from "../types";

export interface IPanelStore {
    isOpen: boolean;
    isClose: boolean;
}

export const PanelStore = atomWithImmer<IPanelStore>({
    isOpen: false,
    isClose: false,
});
export const usePanelStore = () => useImmerAtom(PanelStore);
export const appStore = createStore();

/*暂时不需要在设置的Store的时候也把Storage同步了，需要手动同步一次*/
function registerBrowserContextStore<T>(
    store: ReturnType<typeof createStore>,
    syncer: {
        get(): PromiseLike<T>;
        watch: Function;
    },
    initialValue: T
) {
    const _atom = atomWithImmer<T>(initialValue);
    const getStore = () => store.get(_atom);
    /*首次同步配置信息*/
    setTimeout(async () => {
        store.set(_atom, _.extend(initialValue, syncer.get()));
    }, 50);
    // 同步器发生变化
    syncer.watch(async () => {
        store.set(_atom, syncer.get);
    });
    return {
        getStore,
        atom: _atom,
    };
}

/*FIXED: Sync LocalStorage*/
/*用于设置中的消息通信*/
export const {
    atom: settingStore,
    getStore: getSettingStore
} = registerBrowserContextStore<ISettingsOption>(appStore, {
    get: getSettings,
    watch: settingsStorage.watch
}, defaultSettings);
export const useSettingStore = () => useImmerAtom(settingStore);
