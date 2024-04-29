import React, {ReactElement, useEffect, useRef} from "react";
import {createPortal} from "react-dom";


interface IPopoverCache {
    visible: boolean;
    pinned: boolean;
}

export const usePopover = (() => {
    type TPopoverDom = HTMLElement;
    const _popovers = new Set<TPopoverDom>();
    const _weak_map = new WeakMap<TPopoverDom, Partial<IPopoverCache>>();
    let _is_loaded = false;

    function preload() {
        setTimeout(() => {
            window.addEventListener("scroll", () => {
                console.log(_popovers);
            });
        });
    }

    function destroy() {
        _popovers.clear();
    }

    function action<T extends keyof IPopoverCache>(ref: TPopoverDom, key: T, info: IPopoverCache[T]) {
        switch (key) {
            case "pinned":
                break;
        }
    }

    function update(ref: TPopoverDom, info: IPopoverCache) {
        const old = _weak_map.get(ref) ?? {};
        if (old) {
            Object.keys(info).forEach((key) => {
                let _key = key as keyof IPopoverCache;
                if (info[_key] !== old[_key]) {
                    action(ref, _key, info[_key]);
                }
            });
        }
        _weak_map.set(ref, {
            ...(_weak_map.get(ref)!),
            ...info,
        });

    }

    return () => {
        if (!_is_loaded) {
            preload();
        }
        _is_loaded = true;
        useEffect(() => {
            return () => {
                // 整个 Popover 被销毁掉
                destroy();
            };
        }, []);
        return {
            Popover({
                        wrapper,
                        children,
                        visible = true,
                        pinned = true,
                        ...props
                    }: {
                wrapper: TPopoverDom,
                children: ReactElement[] | ReactElement,
            } & Partial<IPopoverCache>) {
                const ref = useRef<HTMLElement>();
                useEffect(() => {
                    if (!ref.current) return;
                    _popovers.add(ref.current!);
                    update(ref.current!, {
                        visible,
                        pinned,
                    });
                }, []);
                useEffect(() => {
                    if (!ref.current) return;
                    update(ref.current!, {
                        visible,
                        pinned,
                    });
                }, [visible, pinned]);

                const popover = <div ref={(r) => ref.current = r!}>{children}</div>;
                return createPortal(popover, wrapper);
            },
            getAllPopover() {

            },
            getPopoverState(ref: TPopoverDom) {
                return _weak_map.get(ref);
            }

        };
    };
})();
