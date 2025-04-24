import { useEffect } from "react";
import Body from "./Body.tsx";
import LogoutIcon from '@mui/icons-material/Logout';
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/AuthenticationProvider.tsx";
import LogoutImage from '../../../assets/logout.svg';

export default function LogoutBody() {

    const title = "LOGOUT";
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const resetAuthentication = () => {
        setTimeout(() => {
            logout();
        }, 1500);
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
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                }}
            >
                <CardHeader title="Logging out..." sx={{pb: 0}}/>
                <Grid container spacing={2} justifyContent="center">
                    <Grid size={{ xs: 12, sm: 8 }} order={{ xs: 2, sm: 1 }}>
                        <CardContent>
                            <Typography variant="body1">
                                Hope you had a great time! We look forward to seeing you again soon.
                            </Typography>      
                        </CardContent>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }} order={{ xs: 1, sm: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{ 
                            width: {xs: '30%', sm: '80%'}, 
                            objectFit: 'contain', 
                            margin: 'auto'
                            }}
                            image={LogoutImage}
                            alt="Logout image"
                        />
                    </Grid>
                </Grid>
            </Card>
        </Body>
    );
}
