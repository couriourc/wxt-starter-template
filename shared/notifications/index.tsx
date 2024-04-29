import { notifications } from "@mantine/notifications";
import React from "react";
import { $t } from "@/shared/utils.ts";

interface NotificationData {
    message?: React.ReactNode;
}

export const notify_copy_fail = (options: Partial<NotificationData> = {}) =>
    notifications.show({
        message: $t("notify_copy_fail"),
        ...options
    });
export const notify_copy_success = (options: Partial<NotificationData> = {}) =>
    notifications.show({
        message: $t("notify_copy_success"),
        ...options
    });

export const notify_delete_word_success = (options: Partial<NotificationData> = {}) =>
    notifications.show({
        message: $t("notify_delete_word_success"),
        ...options
    });

export const notify_unlocked = (options: Partial<NotificationData> = {}) =>
    notifications.show({
        message: $t("notify_unlocked"),
        ...options
    });
