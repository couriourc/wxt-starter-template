import React, { useEffect, useState } from 'react';
import './App.css';
import { TitleBarHeader } from "@/shared/components/Logo.tsx";
import { Input } from "@nextui-org/input";
import { Button, Divider } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { settingStore } from "@/shared/store";
import { useImmerAtom } from "jotai-immer";
import { } from "@/shared/config.ts";
import { ISettingsOption } from '@/shared/types';


function App() {
    return (
        <>
            <TitleBarHeader></TitleBarHeader>
            {/* 配置 OpenaiKey */}
            <Divider></Divider>
        </>
    );
}

export default App;
