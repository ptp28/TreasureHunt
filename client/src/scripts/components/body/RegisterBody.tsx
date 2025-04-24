import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Body from './Body';
import { useNavigate } from 'react-router-dom';
import RegisterImage from '../../../assets/register.svg';

interface RegisterBodyProps {
}

const RegisterBody: React.FC<RegisterBodyProps> = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);
    const [groupSize, setGroupSize] = useState('');
    const [error, setError] = useState('');
    const title = 'REGISTER';
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError('Please fill in all the required fields correctly.');
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('/api/register/', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                navigate('/login');
            } else {
                const data = await response.json();
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('Network error occurred');
        }
        setError('');
    }

    return (
        <Body icon={<HowToRegIcon />} title={title}>
            <Card sx={{
                width: '100%',
                display: 'flex',
                p: 1,
                flexDirection: 'column',
            }}>
                <CardHeader title="Ready to start questing?" subheader="We are glad to see you here" sx={{ pb: 0 }} />
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid size={{ xs: 12, sm: 7 }} order={{ xs: 2, sm: 1 }}>
                        <CardContent>
                            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                <FormGroup>
                                    <Typography variant="h6">
                                        Required Information
                                    </Typography>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        autoComplete='name'
                                        required
                                        fullWidth
                                        size='small'
                                        margin="normal"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoFocus
                                    />
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        type='email'
                                        autoComplete="email"
                                        fullWidth
                                        required
                                        size='small'
                                        margin="normal"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        label="Password"
                                        type="password"
                                        autoComplete='new-password'
                                        variant="outlined"
                                        fullWidth
                                        required
                                        size='small'
                                        margin="normal"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Typography variant="h6">
                                        Additional Information
                                    </Typography>
                                    <TextField
                                        label="Age"
                                        variant="outlined"
                                        fullWidth
                                        autoComplete='age'
                                        type="number"
                                        size='small'
                                        margin="normal"
                                        value={age}
                                        onChange={(e) => setAge(Number(e.target.value))}
                                        slotProps={{ htmlInput: { min: 0 } }}
                                        helperText="Enter the average age if participating in a group"
                                    />
                                </FormGroup>
                                <FormControl fullWidth>
                                    <InputLabel size='small'>Group Size</InputLabel>
                                    <Select
                                        value={groupSize}
                                        label="Group Size"
                                        onChange={(e) => setGroupSize(e.target.value as string)}
                                        size='small'
                                    >
                                        <MenuItem value={'1-2'}>1-2</MenuItem>
                                        <MenuItem value={'3-5'}>3-5</MenuItem>
                                        <MenuItem value={'>5'}>&gt;5</MenuItem>
                                    </Select>
                                </FormControl>
                                {error && <Typography color="error" variant="body2" mb={1}>{error}</Typography>}
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    Register
                                </Button>
                            </form>
                        </CardContent>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5 }} order={{ xs: 1, sm: 2 }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: '30%', sm: '100%' },
                                objectFit: 'contain',
                                margin: 'auto'
                            }}
                            image={RegisterImage}
                            alt="Register image"
                        />
                    </Grid>
                </Grid>
            </Card>
        </Body>
    );
};

export default RegisterBody;
