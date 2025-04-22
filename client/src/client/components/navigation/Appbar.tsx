import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {MenuItemType} from "./MenuItems.tsx";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

interface AppbarProps {
    title: string;
    menuItems: MenuItemType[];
}

export default function Appbar(props: AppbarProps) {

    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6" 
                        noWrap 
                        component="div"
                        onClick={goToHome} 
                        sx={{ flexGrow: 1, paddingRight: '20px' }}
                    >
                        {props.title}
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            {props.menuItems.map((menuItem) => (
                                <Button
                                    startIcon={menuItem.icon}
                                    key={menuItem.name}
                                    onClick={() => navigate(menuItem.href)}
                                    sx={{ color: 'white', mx: 1 }}
                                >
                                    {menuItem.name}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}