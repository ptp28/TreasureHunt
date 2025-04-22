import Body from "./Body.tsx";
import PersonIcon from '@mui/icons-material/Person';
import {Avatar, Box, Card, Typography, Stack, Divider} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../services/AuthenticationProvider.tsx";

export default function ProfileBody() {
    const title = "PROFILE";

    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const {token} = useAuth();

    useEffect(() => {
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
            fetch(`api/user_info/${username}`)
            .then(response => response.json())
            .then(data => {
                setName(data['first_name'] + " " + data['last_name']);
                setEmail(data['email']);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
        });
    }, []);

    return (
        <Body icon={<PersonIcon/>} title={title}>
            <Card
                sx={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Avatar
                    sx={{width: 80, height: 80}}
                />
                <Box>
                    <Typography variant="h5" fontWeight="bold">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {email}
                    </Typography>
                </Box>
            </Card>

            <Card sx={{padding: "20px"}}>
                <Typography variant="h6" gutterBottom>
                    Account Activity
                </Typography>
                <Stack direction="row" justifyContent="space-around" spacing={2}>
                    <Box>
                        <Typography variant="body2" color="textSecondary">
                            Score
                        </Typography>
                        <Typography variant="h6">120</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem/>
                    <Box>
                        <Typography variant="body2" color="textSecondary">
                            Last Played
                        </Typography>
                        <Typography variant="h6">01/01/2025</Typography>
                    </Box>
                </Stack>
            </Card>
        </Body>
    );
}