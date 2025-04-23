import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from "./Appbar.tsx";
import HomeBody from "../body/HomeBody.tsx";
import {LoggedOutMenuItems, LoggedInMenuItems} from "./MenuItems.tsx";
import QuizBody from '../body/QuizBody.tsx';
import LogoutBody from '../body/LogoutBody.tsx';
import LoginBody from '../body/LoginBody.tsx';
import SettingsBody from '../body/SettingsBody.tsx';
import { Route, Routes } from 'react-router-dom';
import ProfileBody from '../body/ProfileBody.tsx';
import RegisterBody from '../body/RegisterBody.tsx';
import { useAuth } from '../../../services/AuthenticationProvider.tsx';

interface NavigationAreaProps {
    title: string;
}

export default function NavigationArea(props: NavigationAreaProps): JSX.Element {

    const { isAuthenticated } = useAuth();
    
    return (
        <>
            <CssBaseline/>
            <Appbar 
                title={props.title} 
                menuItems={isAuthenticated ? LoggedInMenuItems : LoggedOutMenuItems} 
            />
            
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3}}
            >
                <Routes>
                    <Route path="/" element={<HomeBody />} />
                    <Route path="/quiz" element={<QuizBody />} />
                    <Route path="/profile" element={<ProfileBody />} />
                    <Route path="/logout" element={<LogoutBody />} />
                    <Route path="/login" element={<LoginBody />} />
                    <Route path="/register" element={<RegisterBody />} />
                    <Route path="/settings" element={<SettingsBody />} />
                </Routes>
            </Box>
        </>
    );
}