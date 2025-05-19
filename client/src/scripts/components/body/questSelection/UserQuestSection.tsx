import {Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../services/AuthenticationProvider";

type Quest = {
    id: number;
    name: string;
    description: string;
    image: string;
};

export default function QuestSelectionBody() {

    const [quests, setQuests] = useState<Quest[]>([]);
    const navigate = useNavigate();
    const {token} = useAuth();

    const fetchUserQuests = () => {
        fetch(`api/get_username/`, {
                method: 'GET',
                redirect: "follow",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }
        )
        .then(response => response.json())
        .then(data => data['username'])
        .then(username => {
            fetch(`/api/user/${username}/quests/`, {
                method: 'GET',
            }
            )
            .then(response => response.json())
            .then(data => setQuests(data))
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleQuestClick = (questId: number) => {
        navigate('/quest/quiz/' + questId);
    }


    useEffect(() => {
        fetchUserQuests();
    }, []);

    return (
        <Card
            sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Stack sx={{width: '100%'}}>
                <Typography variant="h5" sx={{fontWeight: 'bold'}} gutterBottom>
                    Your Quests
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gap: 2,
                    }}
                >
                    {
                        quests.length === 0 ? (
                            <Typography variant="body1" gutterBottom sx={{width: '100%', textAlign: 'initial', justifyContent: 'center'}}>
                                Select a quest from below to start your adventure!
                            </Typography>
                        )
                        :
                        <Grid container spacing={3}>
                            {
                                quests.map((item) => 
                                    <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={item.name}>
                                    <Card sx={{ width: '100%', flexShrink: 0 }}>
                                        <CardActionArea onClick={() => handleQuestClick(item.id)}>
                                            <CardMedia
                                                component="img"
                                                width="100%"
                                                image={item.image}
                                                alt={item.name}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.description}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                )
                            }
                        </Grid>
                    }
                </Box>
            </Stack>
        </Card>
        );
}