import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AppWrapper } from "@/shared/components/App.tsx";
import "uno.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppWrapper>
        <DndProvider backend={HTML5Backend}>
            <App></App>
        </DndProvider>
    </AppWrapper>
);
