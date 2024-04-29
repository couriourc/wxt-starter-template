import { ISettingsOption } from "./types";

export const defaultSettings: ISettingsOption = {
    theme: "auto"
} as const;
export const settingsStorage = (() => {
    try {
        return storage?.defineItem<ISettingsOption>("local:settings", {
            defaultValue: defaultSettings,
        });
    } catch (e) {
        return null;
    }
})()!;
export const getSettings: () => Promise<ISettingsOption> = async () => {
    return {
        ...defaultSettings,
        ...((await settingsStorage.getValue()) as ISettingsOption),
    };
};


export const saveSettings: (settings: Partial<ISettingsOption>) => Promise<ISettingsOption> =
    async (settings) => {
        const savedSettings = {
            ...defaultSettings,
            ...settings,
        };
        await settingsStorage.setValue(savedSettings);
        return savedSettings;
    };
