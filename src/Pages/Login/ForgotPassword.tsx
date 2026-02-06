import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, InputAdornment } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FallingPetals from '../Rangos/Components/Shared/FallingPetals';
import EmailIcon from '@mui/icons-material/Email';
import FondoLoginVideo from './assetsLogin/FondoLogin.mp4';

// Japanese/Minecraft Palette
// Updated for Consistency: Red (#8B1E1E), Pink (#EE8D9E), Gold (#F4C41A)
const PALETTE = {
    Red: '#8B1E1E',          // User requested red
    Pink: '#EE8D9E',         // User requested pink
    Gold: '#F4C41A',         // User requested gold
    Konjo: '#0A0404',        // Deep Warm Black (replaced blue)
    Sumi_iro: '#050505',     // Existing black
};

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                bgcolor: PALETTE.Sumi_iro,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                // Removed radial gradient
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
                    opacity: 0.6
                }}
            >
                <source src={FondoLoginVideo} type="video/mp4" />
            </video>

            {/* Background Overlay */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', background: 'rgba(0,0,0,0.4)' }} />
            <FallingPetals count={30} color={PALETTE.Pink} />

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ zIndex: 10, width: '100%', maxWidth: '420px', padding: '20px' }}
                >
                    <Paper
                        elevation={24}
                        sx={{
                            p: { xs: 3, md: 5 },
                            bgcolor: `${PALETTE.Konjo}B3`, // ~70% opacity
                            border: `1px solid ${PALETTE.Gold}33`,
                            borderRadius: '4px',
                            backdropFilter: 'blur(10px)',
                            boxShadow: `0 0 50px #000000`,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 3
                        }}
                    >
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
                                    textShadow: `0 0 15px ${PALETTE.Red}, 0 0 30px ${PALETTE.Red}`
                                }}
                            >
                                TINKERCRAFT
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '2px',
                                    background: `linear-gradient(90deg, transparent, ${PALETTE.Red}, transparent)`,
                                    mb: 3
                                }}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: PALETTE.Gold,
                                    fontFamily: 'serif',
                                    letterSpacing: '0.05em',
                                    opacity: 0.8
                                }}
                            >
                                Recuperar Contraseña
                            </Typography>
                        </Box>

                        <Box component="form" sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                fullWidth
                                placeholder="Correo electrónico"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon sx={{ color: PALETTE.Gold }} />
                                            </InputAdornment>
                                        ),
                                    }
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'transparent', // Made transparent
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
                                ENVIAR
                            </Button>

                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                                <Typography
                                    variant="caption"
                                    onClick={() => navigate('/login')}
                                    sx={{
                                        color: PALETTE.Gold,
                                        opacity: 0.6,
                                        cursor: 'pointer',
                                        transition: 'color 0.2s',
                                        '&:hover': { color: '#fff', opacity: 1 }
                                    }}
                                >
                                    Volver al inicio de sesión
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
}
