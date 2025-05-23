import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {AppStateProvider} from "./context.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from '../services/AuthenticationProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppStateProvider>
            <AuthProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthProvider>
        </AppStateProvider>
    </React.StrictMode>
)
