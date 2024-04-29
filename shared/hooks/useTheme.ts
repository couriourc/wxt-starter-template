import {useTheme as useNextTheme} from "next-themes";
import {UseThemeProps} from "next-themes/dist/types";

export const useTheme = () => {
    return useNextTheme();
};

export const isDarkMode = (theme: UseThemeProps['systemTheme']) => {
    return theme === 'dark';
};
