import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FallingPetals from '../Rangos/Components/Shared/FallingPetals';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FondoLoginVideo from './assetsLogin/FondoLogin.mp4';

// Japanese/Minecraft Palette
// Updated with User requested colors: Red (#8B1E1E), Pink (#EE8D9E), Gold (#F4C41A)
const PALETTE = {
    Red: '#8B1E1E',          // User requested red
    Pink: '#EE8D9E',         // User requested pink
    Gold: '#F4C41A',         // User requested gold
    Konjo: '#0A0404',        // Deep Warm Black (replaced blue)
    Sumi_iro: '#050505',     // Existing black
};

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                bgcolor: PALETTE.Sumi_iro,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    opacity: 0.6 // Slight dim to ensure text readability
                }}
            >
                <source src={FondoLoginVideo} type="video/mp4" />
            </video>

            {/* Background Animations Overlay */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', background: 'rgba(0,0,0,0.4)' }} />
            <FallingPetals count={30} color={PALETTE.Pink} />

            {/* Login Container */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ zIndex: 10, width: '100%', maxWidth: '400px', padding: '16px' }}
                >
                    <Paper
                        elevation={24}
                        sx={{
                            p: { xs: 3, sm: 4, md: 5 },
                            bgcolor: `${PALETTE.Konjo}B3`, // ~70% opacity (more transparent)
                            border: `1px solid ${PALETTE.Gold}33`, // Subtle border with Gold
                            borderRadius: '4px',
                            backdropFilter: 'blur(10px)', // Reduced blur slightly to see more video details
                            boxShadow: `0 0 50px #000000`, // Deep shadow instead of glow for contrast
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 2, md: 3 }
                        }}
                    >
                        {/* Header */}
                        <Box sx={{ textAlign: 'center', mb: 1, width: '100%' }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: PALETTE.Gold,
                                    fontFamily: "'Cinzel', serif",
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    mb: 2,
                                    textShadow: `0 0 15px ${PALETTE.Red}, 0 0 30px ${PALETTE.Red}` // Neon-like glow with Red
                                }}
                            >
                                TINKERCRAFT
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '2px',
                                    background: `linear-gradient(90deg, transparent, ${PALETTE.Red}, transparent)`,
                                    mb: { xs: 2, md: 3 }
                                }}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: PALETTE.Gold,
                                    fontFamily: 'serif',
                                    letterSpacing: '0.05em',
                                    opacity: 0.8,
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                }}
                            >
                                Iniciar Sesión
                            </Typography>
                        </Box>

                        {/* Inputs */}
                        <Box component="form" sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
                            <TextField
                                fullWidth
                                placeholder="Usuario"
                                variant="outlined"
                                value={formData.username}
                                onChange={handleChange('username')}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon sx={{ color: PALETTE.Gold }} />
                                            </InputAdornment>
                                        ),
                                    }
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'transparent',
                                        color: PALETTE.Gold,
                                        fontFamily: 'monospace',
                                        '& fieldset': {
                                            borderColor: `${PALETTE.Gold}4D`, // Gold 30%
                                            borderWidth: '1px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: PALETTE.Gold,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: PALETTE.Red,
                                            boxShadow: `0 0 10px ${PALETTE.Red}40`
                                        },
                                    },
                                    '& input::placeholder': {
                                        color: PALETTE.Gold,
                                        opacity: 0.5,
                                    }
                                }}
                            />

                            <TextField
                                fullWidth
                                placeholder="Contraseña"
                                type={showPassword ? 'text' : 'password'}
                                variant="outlined"
                                value={formData.password}
                                onChange={handleChange('password')}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon sx={{ color: PALETTE.Gold }} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    sx={{ color: PALETTE.Gold }}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'rgba(0,0,0,0.3)',
                                        color: PALETTE.Gold,
                                        fontFamily: 'monospace',
                                        '& fieldset': {
                                            borderColor: `${PALETTE.Gold}4D`,
                                            borderWidth: '1px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: PALETTE.Gold,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: PALETTE.Red,
                                            boxShadow: `0 0 10px ${PALETTE.Red}40`
                                        },
                                    },
                                    '& input::placeholder': {
                                        color: PALETTE.Gold,
                                        opacity: 0.5,
                                    }
                                }}
                            />

                            {/* Submit Button */}
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                sx={{
                                    mt: 1,
                                    bgcolor: PALETTE.Red,
                                    color: '#fff',
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                    borderRadius: '2px',
                                    py: 1.8,
                                    border: `1px solid ${PALETTE.Red}`,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                        color: PALETTE.Red,
                                        boxShadow: `0 0 20px ${PALETTE.Red}80`,
                                        textShadow: `0 0 8px ${PALETTE.Red}`
                                    }
                                }}
                            >
                                ENTRAR
                            </Button>

                            {/* Links */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, width: '100%' }}>
                                <Typography
                                    variant="caption"
                                    onClick={() => navigate('/forgot-password')}
                                    sx={{
                                        color: PALETTE.Gold,
                                        opacity: 0.6,
                                        cursor: 'pointer',
                                        transition: 'color 0.2s',
                                        '&:hover': { color: '#fff', opacity: 1 }
                                    }}
                                >
                                    ¿Olvidaste tu contraseña?
                                </Typography>
                                <Typography
                                    variant="caption"
                                    onClick={() => navigate('/register')}
                                    sx={{
                                        color: PALETTE.Gold,
                                        opacity: 0.6,
                                        cursor: 'pointer',
                                        transition: 'color 0.2s',
                                        '&:hover': { color: '#fff', opacity: 1 }
                                    }}
                                >
                                    Crear cuenta
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
}
