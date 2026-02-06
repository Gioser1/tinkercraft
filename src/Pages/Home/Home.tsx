
import Header from '../Inc/Header';
import Footer from '../Inc/Footer';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NarrativeSection from '../Rangos/Components/Shared/NarrativeSection';
import Carousel from './Components/carrusel';
import FallingPetals from '../Rangos/Components/Shared/FallingPetals';
import SocialSection from '../Rangos/Components/Shared/SocialSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Importing images to ensure Vite handle paths correctly
import heroImg from '../Rangos/Components/Shogun/assets/shogunHero.jpg';
import samuraiHero from '../Rangos/assets/samurai/samurai-hero.png';
import samuraiHonor from '../Rangos/assets/samurai/samurai-honor.png';
import samuraiRespect from '../Rangos/assets/samurai/samurai-respect.png';
import samuraiDiscipline from '../Rangos/assets/samurai/samurai-discipline.png';
import blogIntroVideo from '../Blog/assetsBlog/ForoBlog.mp4';

const narrativeItems = [
  {
    chapter: "CAPÍTULO I",
    word: "ÚNETE A NUESTRA HISTORIA",
    image: samuraiHero,
    description: "Forma parte de una leyenda que trasciende el tiempo. Tu aventura comienza aquí, en el corazón de nuestra comunidad."
  },
  {
    chapter: "CAPÍTULO II",
    word: "ÚNETE A NOSOTROS",
    image: samuraiHonor,
    description: "Será una de las mejores experiencias de tu vida. Descubre un mundo nuevo junto a cientos de guerreros como tú."
  },
  {
    chapter: "CAPÍTULO III",
    word: "FORJA TU DESTINO",
    image: samuraiRespect,
    description: "Cada paso que das cuenta. En Minecraft Japón, tú escribes tu propio camino hacia la gloria."
  },
  {
    chapter: "CAPÍTULO IV",
    word: "VIVE LA AVENTURA",
    image: samuraiDiscipline,
    description: "No es solo un juego, es una experiencia que recordarás por siempre. ¿Estás listo para el reto?"
  }
];

const stats = [
  { icon: <PeopleIcon sx={{ fontSize: 40 }} />, label: "500+ seguidores" },
  { icon: <GroupsIcon sx={{ fontSize: 40 }} />, label: "800+ personas en la comunidad" },
  { icon: <VerifiedIcon sx={{ fontSize: 40 }} />, label: "50+ aliados estratégicos" },
  { icon: <SportsEsportsIcon sx={{ fontSize: 40 }} />, label: "Servidor activo 24/7" }
];

const socialData = {
  title: "ÚNETE A NUESTRA",
  accentWord: "GRAN COMUNIDAD",
  subtitle: "CONECTA CON MILES DE JUGADORES Y FORJA TU PROPIA LEYENDA",
  socials: [
    {
      name: "Discord",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]
};

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(false);

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowIntro(true);
  };

  useEffect(() => {
    if (location.state && (location.state as any).target) {
      const target = (location.state as any).target;
      const element = document.querySelector(target);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Box sx={{ bgcolor: '#0a0a0a', color: 'white', minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
      <FallingPetals color="#EE8D9E" count={35} />
      <Header />

      {/* 1) HERO SECTION - Minimalist Image (100vw x 100vh) */}
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 2) METRICS / SOCIAL PROOF SECTION */}
      <Box sx={{ py: 8, bgcolor: '#0A0404', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    textAlign: 'center',
                    transition: '0.3s',
                    '&:hover': { transform: 'translateY(-5px)' }
                  }}
                >
                  <Box sx={{ color: '#8B1E1E' }}>
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '1rem',
                      color: 'white'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3) NARRATIVE SECTION WITH SCROLL ANIMATION */}
      <Box id="social">
        <NarrativeSection
          items={narrativeItems}
          primaryColor="#8B1E1E"
          accentColor="#ffffff"
        />
      </Box>

      {/* 4) 3D CAROUSEL SECTION */}
      <Box id="rangos">
        <Carousel />
      </Box>

      {/* 5) SOCIAL SECTION */}
      <Box id="redes">
        <SocialSection
          title={socialData.title}
          accentWord={socialData.accentWord}
          subtitle={socialData.subtitle}
          socials={socialData.socials}
          accentColor="#8B1E1E"
          ctaButton={
            <Button
              variant="contained"
              onClick={handleBlogClick}
              sx={{
                bgcolor: '#EE8D9E',
                color: '#8B1E1E',
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 900,
                py: { xs: 1.5, md: 2 },
                px: { xs: 4, md: 6 },
                borderRadius: 4,
                boxShadow: '0 0 20px #EE8D9E66',
                fontFamily: "'Cinzel', serif",
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#ffb5c2',
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 40px #EE8D9Eaa'
                }
              }}
            >
              ¡VAMOS AL FORO! 🚀
            </Button>
          }
        />
      </Box>

      <Footer />

      {/* BLOG INTRO VIDEO OVERLAY */}
      {showIntro && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'black',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            src={blogIntroVideo}
            autoPlay
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onEnded={() => navigate('/blog')}
          />
        </Box>
      )}
    </Box>
  );
}

