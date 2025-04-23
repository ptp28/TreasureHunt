import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Body from './Body';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/AuthenticationProvider';
import LoginImage from '../../../assets/login.svg';

interface LoginBodyProps {
}

const LoginBody: React.FC<LoginBodyProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const title = 'LOGIN';
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch('api/token/', {
        method: 'POST',
        redirect: "follow",
        body: formData
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Login failed');
        return;
      }

      const data = await response.json();
      login(email, data['access']);
      navigate('/');
    } catch (err) {
      setError('Connection error. Please try again.' + err);
      return;
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <Body icon={<LockOutlinedIcon />} title={title}>
        <Card sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <CardHeader title="Ready to start questing?" subheader="Enter your credentials below" sx={{pb: 0}}/>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid size={{ xs: 12, sm: 8 }} order={{ xs: 2, sm: 1 }}>
              <CardContent>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <Typography color="error" variant="body2" mb={1}>{error}</Typography>}
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Login
                  </Button>
                </form>
              </CardContent>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }} order={{ xs: 1, sm: 2 }}>
              <CardMedia
                component="img"
                sx={{ 
                  width: {xs: '30%', sm: '100%'}, 
                  objectFit: 'contain', 
                  margin: 'auto'
                }}
                image={LoginImage}
                alt="Login image"
              />
            </Grid>
          </Grid>
        </Card>
        <Card>
          <CardHeader title="New Quester?" subheader="Welcome! Register Here" sx={{pb: 0}}/>
          <CardContent>
            <Button size='small' variant='contained' sx={{ width: '100%' }} onClick={goToRegister}>
              Register Here
            </Button>
          </CardContent>
        </Card>
    </Body>
  );
};

export default LoginBody;
