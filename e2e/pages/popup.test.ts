import { describe, expect, test, vi } from "vitest";
import pkg from "../../package.json";
import path from "node:path";
import { defaultSettings } from "../../shared/config";

describe("Popup 相关测试", async () => {
    const env = await browser.version();
    /*应该把基本数据存储进去*/
    test("store settings", async () => {
    });
});
