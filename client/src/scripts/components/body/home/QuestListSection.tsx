import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import { useEffect, useState } from "react";

type Quest = {
    id: number;
    name: string;
    description: string;
    image: string;
};

export default function QuestListSection() {

    const [quests, setQuests] = useState<Quest[]>([]);

    useEffect(() => {
            fetch(`api/quests/all/`, {
                    method: 'GET',
                }
            )
            .then(response => response.json())
            .then(data => setQuests(data))
            .catch(error => {
                console.error('Error:', error);
            })
        }, []);

    return (
            <Box sx={{display: quests.length ? 'block' : 'none'}}>
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
                            Quests
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                overflowX: "auto",
                                gap: 2,
                                p: 1,
                            }}
                        >
                            {
                                quests.length === 0 ? (
                                    <Typography variant="body1" gutterBottom>
                                        New quests will be available soon!
                                    </Typography>
                                ) 
                                :
                                quests.map((item) => 
                                    <Card sx={{ maxWidth: 300, flexShrink: 0 }} key={item.name}>
                                        <CardMedia
                                            component="img"
                                            height="150"
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
                                    </Card>
                                )
                            }
                        </Box>
                    </Stack>
                </Card>
            </Box>
        );
}