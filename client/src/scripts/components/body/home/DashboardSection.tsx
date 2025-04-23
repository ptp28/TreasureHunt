import Grid from "@mui/material/Grid2";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../../../../assets/profile.svg";
import SettingsImage from "../../../../assets/settings.svg";
import AdventureImage from "../../../../assets/adventure_map.svg";


export default function HomeBody() {

    const navigate = useNavigate();

    const goToQuiz = () => {
        navigate('/quiz');
    }

    const goToProfile = () => {
        navigate('/profile');
    }

    const goToSettings = () => {
        navigate('/settings');
    }

    return (
        <Grid container spacing={3} sx={{ alignItems: 'stretch', marginX: {xs: 1, sm: 8} }}>
            <Grid size={{ xs: 12, sm: 12, lg: 6 }} sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', height: 'auto' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardActionArea onClick={goToQuiz}>
                        <CardMedia
                            component="img"
                            width="100%"
                            height={300}
                            sx={{
                                objectFit: 'contain'
                            }}
                            image={AdventureImage}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" sx={{textDecoration: 'underline', textUnderlineOffset: '4px'}}>
                                Start Quest
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Begin your adventure by starting a new quest. Explore the city and uncover hidden treasures!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------ */}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', height: 'auto' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardActionArea onClick={goToProfile}>
                        <CardMedia
                            component="img"
                            width="100%"
                            height={300}
                            sx={{
                                objectFit: 'contain'
                            }}
                            image={ProfileImage}
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" sx={{textDecoration: 'underline', textUnderlineOffset: '4px'}}>
                                Profile
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Access your profile to view your quests, achievements, and personal stats.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>
            {/* ------------------ */}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', height: 'auto' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardActionArea onClick={goToSettings}>
                        <CardMedia
                            component="img"
                            width="100%"
                            height={300}
                            sx={{
                                objectFit: 'contain'
                            }}
                            image={SettingsImage}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" sx={{textDecoration: 'underline', textUnderlineOffset: '4px'}}>
                                Settings
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Change settings.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}