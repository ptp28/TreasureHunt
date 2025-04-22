import {Box, Button, Card, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import AboutImage from "../../../../assets/quest.svg";

export default function AboutSection() {

    const navigate = useNavigate();
    
    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <Box>
            <Card
                sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, sm: 9}} order={{xs: 2, sm: 1}}>
                        <Stack>
                            <Typography variant="h5" sx={{fontWeight: 'bold'}} gutterBottom>
                                Welcome to the TreasureQuest!
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Embark on an exciting scavenger hunt adventure through historic sites and hidden gems.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Play the game, explore the sights, and experience the city in a whole new way!
                            </Typography>
                            <Button variant="contained" onClick={goToLogin} color="primary" sx={{marginTop: '10px'}}>
                                Start Your Adventure
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12, sm: 3}} order={{xs: 1, sm: 2}}>
                        <Box
                            src={AboutImage} 
                            alt="Adventure Map" 
                            component="img"
                            sx={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                width: '80%',
                                objectFit: 'fill',
                            }}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}