import {PropsWithChildren} from "react";
import {notify_unlocked} from "@/shared/notifications";

export function Unlocked({children}: PropsWithChildren) {
    function handleUnlocked() {
        notify_unlocked();
    }

    return <div onClickCapture={handleUnlocked}>
        {children}
    </div>;
}
