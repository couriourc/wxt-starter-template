
import { FC, NamedExoticComponent, ReactNode, Suspense } from "react";
import { GeneralSettings } from "@/entrypoints/options/pages/GeneralSettings.tsx";
import { IoSettings } from "react-icons/io5";
import { LoadingPage } from "@/shared/components/Loading";

export const RoutesMap = Object.seal({
    'GeneralSettings': GeneralSettings,
} as const);

export const Sidebars: (IRouterView & {
    title: NamedExoticComponent<any> | ReactNode;
    tap?: () => {}
})[] = [
        {
            title: <><IoSettings />通用设置</>,
            path: "GeneralSettings"
        }
    ];
export type TRoutes = keyof typeof RoutesMap;

interface IRouterView {
    path: TRoutes;

    [k: string]: any;
}

export function RouterView({ path, ...props }: IRouterView) {
    const Component = RoutesMap[path] as FC<any>;
    if (!Component) return null;
    return <Suspense fallback={<LoadingPage />}>
        <Component {...props} />
    </Suspense>;
}
