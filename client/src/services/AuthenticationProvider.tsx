import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useAppState } from '../client/context';

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (username: string, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const TOKEN_STORAGE_KEY = 'auth_token';

export function AuthProvider({ children }: { children: ReactNode }) {
    const {dispatch} = useAppState();

    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem(TOKEN_STORAGE_KEY);
    });

    const login = useCallback((username: string, token: string) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        dispatch({ type: 'SET_USERNAME', payload: username });
        setToken(token);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        dispatch({ type: 'SET_USERNAME', payload: null });
        setToken(null);
    }, []);

    const value = {
        token,
        isAuthenticated: !!token,
        login,
        logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}