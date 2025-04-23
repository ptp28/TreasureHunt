import { useEffect } from "react";
import Body from "./Body.tsx";
import LogoutIcon from '@mui/icons-material/Logout';
import {Card, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/AuthenticationProvider.tsx";

export default function LogoutBody() {

    const title = "LOGOUT";
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const resetAuthentication = () => {
        setTimeout(() => {
            logout();
        }, 1000);
    };

    useEffect(() => {
        resetAuthentication();
    }, []);

    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/');
        }
      }, [isAuthenticated]);
    
    return (
        <Body icon={<LogoutIcon/>} title={title}>
            <Card
                sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Logging you out...
                </Typography>      
            </Card>
        </Body>
    );
}
