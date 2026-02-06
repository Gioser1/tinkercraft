
// import { Box, Container, Grid, Typography, Fab, useMediaQuery, Drawer } from '@mui/material';
import { Box, Container, Grid, Typography, Fab, Drawer } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import Header from '../Inc/Header';
import Footer from '../Inc/Footer';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Feed from './components/Feed';
import FallingPetals from '../Rangos/Components/Shared/FallingPetals';

import CreatePostModal from './components/CreatePostModal';

const Blog = () => {
    // const theme = useTheme();
    // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ bgcolor: '#0A0404', minHeight: '100vh', color: 'white', position: 'relative' }}>
            <FallingPetals color="#EE8D9E" count={20} />
            <Header />

            {/* Banner */}
            <Box sx={{
                height: 200,
                width: '100%',
                background: 'linear-gradient(to bottom, #8B1E1E 0%, #0A0404 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4
            }}>
                <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: '0.2em', fontFamily: "'Cinzel', serif" }}>
                    COMUNIDAD
                </Typography>
            </Box>

            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* Left Sidebar (Desktop) */}
                    <Grid size={{ md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <SidebarLeft />
                    </Grid>

                    {/* Feed (Center) */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        {/* Mobile Header for Sidebar */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, mb: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h6" fontWeight="bold">Feed Principal</Typography>
                            <Fab size="small" color="secondary" onClick={handleDrawerToggle} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}>
                                <MenuIcon />
                            </Fab>
                        </Box>
                        <Feed />
                    </Grid>

                    {/* Right Sidebar (Desktop) */}
                    <Grid size={{ md: 3 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <SidebarRight />
                    </Grid>
                </Grid>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#111', color: 'white' },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <SidebarLeft />
                </Box>
            </Drawer>

            {/* Floating Action Button for Create Post */}
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => setOpenModal(true)}
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    bgcolor: '#EE8D9E',
                    '&:hover': { bgcolor: '#F48FB1' }
                }}
            >
                <EditIcon />
            </Fab>

            <CreatePostModal open={openModal} onClose={() => setOpenModal(false)} />

            <Footer />
        </Box>
    );
};

export default Blog;
