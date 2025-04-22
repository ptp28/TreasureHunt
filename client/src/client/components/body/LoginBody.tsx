import React, { useState } from 'react';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Body from './Body';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/AuthenticationProvider';

interface LoginBodyProps {
}

const LoginBody: React.FC<LoginBodyProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const title = 'LOGIN';
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    setError('');

    try {
      const formData = new FormData();
      formData.append("username", username);
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
      login(username, data['access']);
      navigate('/');
    } catch (err) {
      setError('Connection error. Please try again.' + err);
      return;
    }
  };

  return (
    <Body icon={<LockOutlinedIcon />} title={title}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Card sx={{ p: 4, minWidth: 350, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LockOutlinedIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
          <Typography variant="h5" mb={2}>Login</Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
        </Card>
      </Box>
    </Body>
  );
};

export default LoginBody;
