
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button, Container, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
    { title: 'Social', href: '#social' },
    { title: 'Redes Sociales', href: '#redes' },
    { title: 'Rangos', href: '#rangos' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false); // Mobile Menu State
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { target: href } });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMobileOpen(false); // Close drawer on click
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#0B0B0B', height: '100%', color: 'white', pt: 4 }}>
            <Typography variant="h6" sx={{ my: 2, color: '#DAA520', fontWeight: 'bold' }}>
                MINEJP
            </Typography>
            <List>
                {navLinks.map((link) => (
                    <ListItem key={link.title} disablePadding sx={{ justifyContent: 'center' }}>
                        <Button
                            onClick={() => handleNavClick(link.href)}
                            sx={{ textAlign: 'center', color: 'white', width: '100%', py: 2 }}
                        >
                            <ListItemText primary={link.title} primaryTypographyProps={{ fontSize: '1.1rem' }} />
                        </Button>
                    </ListItem>
                ))}
                <ListItem disablePadding sx={{ justifyContent: 'center', mt: 2 }}>
                     <Button
                        onClick={() => { navigate('/login'); setMobileOpen(false); }}
                        sx={{ color: '#DAA520', width: '80%', border: '1px solid #DAA520' }}
                    >
                        Iniciar Sesión
                    </Button>
                </ListItem>
                <ListItem disablePadding sx={{ justifyContent: 'center', mt: 2 }}>
                     <Button
                        onClick={() => { navigate('/register'); setMobileOpen(false); }}
                        variant="contained"
                        sx={{ bgcolor: '#DAA520', color: 'white', width: '80%', '&:hover': { bgcolor: '#B8860B' } }}
                    >
                        Registrarse
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            sx={{
                background: isScrolled
                    ? 'linear-gradient(90deg, rgba(184,134,11,0.95) 0%, rgba(218,165,32,0.95) 100%)'
                    : 'transparent',
                boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.5s ease-in-out',
                borderBottom: isScrolled ? '1px solid rgba(255, 215, 0, 0.3)' : 'none',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: 80 }}>
                    {/* LEFT: HAMBURGER (Mobile Only) */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon sx={{ color: isScrolled ? 'white' : '#DAA520' }} />
                    </IconButton>

                    {/* LOGO LEFT */}
                    <Box
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}
                        onClick={() => navigate('/')}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 900,
                                    letterSpacing: 2,
                                    color: isScrolled ? 'white' : '#DAA520',
                                    textShadow: isScrolled ? 'none' : '0 0 10px rgba(218,165,32,0.5)'
                                }}
                            >
                                MINE<span style={{ color: isScrolled ? '#333' : 'white' }}>JP</span>
                            </Typography>
                        </motion.div>
                    </Box>

                    {/* LINKS MIDDLE (Desktop Only) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.title}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={() => handleNavClick(link.href)}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        letterSpacing: 1,
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 5,
                                            left: '10%',
                                            width: 0,
                                            height: '2px',
                                            background: isScrolled ? 'white' : '#DAA520',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '80%',
                                        },
                                    }}
                                >
                                    {link.title}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>

                    {/* AUTH RIGHT (Desktop Only - Mobile has it in Drawer) */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={() => navigate('/login')}
                                sx={{
                                    color: 'white',
                                    fontWeight: 700,
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    borderRadius: '4px',
                                    px: 2,
                                    '&:hover': {
                                        borderColor: 'white',
                                        background: 'rgba(255,255,255,0.1)',
                                    }
                                }}
                            >
                                Iniciar Sesión
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={() => navigate('/register')}
                                variant="contained"
                                sx={{
                                    bgcolor: isScrolled ? '#333' : '#DAA520',
                                    color: 'white',
                                    fontWeight: 700,
                                    px: 3,
                                    '&:hover': {
                                        bgcolor: isScrolled ? '#111' : '#B8860B',
                                    }
                                }}
                            >
                                Registrarse
                            </Button>
                        </motion.div>
                    </Box>
                </Toolbar>
            </Container>

            {/* MOBILE DRAWER */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#0B0B0B' },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
