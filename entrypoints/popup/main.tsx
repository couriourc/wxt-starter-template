import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/assets/styles/style.less';
import { AppWrapper } from "@/shared/components/App.tsx";
import 'uno.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppWrapper>
        <App></App>
    </AppWrapper>
);
