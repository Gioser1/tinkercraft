import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AnimacionEntrarRangos from './animacion-entrar-rangos';

// Assets
import video2 from '../assets/video2.mp4';
import imgKami from '../../Rangos/assets/kami/img-hero.png';
import imgDaimyo from '../../Rangos/assets/daimyo/img-daimyo.png';
import imgShogun from '../../Rangos/Components/Shogun/assets/Japanese_emperor_without_202602041459.jpeg';
import imgSamurai from '../../Rangos/assets/samurai/img-samurai.png';
import imgSensei from '../../Rangos/assets/sensei/img-sensei.png';

const productos = {
    1: { nombre: "KAMI", route: "/rango-kami", img: imgKami },
    2: { nombre: "SAMURAI", route: "/rango-samurai", img: imgSamurai },
    3: { nombre: "DAIMYO", route: "/rango-daimyo", img: imgDaimyo },
    4: { nombre: "SENSEI", route: "/rango-sensei", img: imgSensei },
    5: { nombre: "SHOGUN", route: "/rango-shogun", img: imgShogun },
};

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetRoute, setTargetRoute] = useState('');

    const navigate = useNavigate();
    const angle = 360 / 5;

    const handleNext = () => setIndex(prev => prev + 1);
    const handlePrev = () => setIndex(prev => prev - 1);

    const handleClick = (id: number) => {
        const p = productos[id as keyof typeof productos];
        setTargetRoute(p.route);
        setIsTransitioning(true);
    };

    const handleTransitionEnd = () => {
        navigate(targetRoute);
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'transparent',
            py: 10,
            position: 'relative',
            overflow: 'hidden' // Ensure it doesn't cause scrollbars
        }}>
            {isTransitioning && (
                <AnimacionEntrarRangos
                    videoSrc={video2}
                    onEnded={handleTransitionEnd}
                />
            )}

            <Box sx={{
                perspective: '1600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px',
                // Scale down the entire 3D scene on mobile
                transform: { xs: 'scale(0.65)', md: 'scale(1)' },
                transition: 'transform 0.3s ease'
            }}>
                <Box sx={{
                    width: '420px',
                    height: '320px',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transition: 'transform .8s cubic-bezier(.4, .2, .2, 1)',
                    transform: `rotateY(${-index * angle}deg)`
                }}>
                    {[1, 2, 3, 4, 5].map((id, i) => (
                        <Box
                            key={id}
                            onClick={() => handleClick(id)}
                            sx={{
                                position: 'absolute',
                                width: '390px',
                                height: '300px',
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) rotateY(${i * angle}deg) translateZ(350px)`,
                                bgcolor: '#020617',
                                borderRadius: '18px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <img
                                src={productos[id as keyof typeof productos].img}
                                alt={productos[id as keyof typeof productos].nombre}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 4, mt: 4, flexDirection: { xs: 'row', md: 'row' } }}>
                    <Button
                        onClick={handlePrev}
                        sx={{
                            '--gold': '#FFD700',
                            fontSize: '15px',
                            padding: '0.7em 2.7em',
                            letterSpacing: '0.06em',
                            position: 'relative',
                            fontFamily: 'inherit',
                            borderRadius: '0.6em',
                            overflow: 'hidden',
                            transition: 'all 0.3s',
                            lineHeight: '1.4em',
                            border: '2px solid var(--gold)',
                            background: 'linear-gradient(to right, rgba(255, 215, 0, 0.1) 1%, transparent 40%,transparent 60% , rgba(255, 215, 0, 0.1) 100%)',
                            color: 'var(--gold)',
                            boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.4), 0 0 9px 3px rgba(255, 215, 0, 0.1)',
                            '&:hover': {
                                color: '#FFFACD',
                                boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.6), 0 0 9px 3px rgba(255, 215, 0, 0.2)',
                                '&::before': {
                                    transform: 'translateX(15em)',
                                }
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: '-4em',
                                width: '4em',
                                height: '100%',
                                top: 0,
                                transition: 'transform .4s ease-in-out',
                                background: 'linear-gradient(to right, transparent 1%, rgba(255, 215, 0, 0.1) 40%,rgba(255, 215, 0, 0.1) 60% , transparent 100%)',
                            }
                        }}
                    >
                        ◀ ANTERIOR
                    </Button>
                    <Button
                        onClick={handleNext}
                        sx={{
                            '--gold': '#FFD700',
                            fontSize: '15px',
                            padding: '0.7em 2.7em',
                            letterSpacing: '0.06em',
                            position: 'relative',
                            fontFamily: 'inherit',
                            borderRadius: '0.6em',
                            overflow: 'hidden',
                            transition: 'all 0.3s',
                            lineHeight: '1.4em',
                            border: '2px solid var(--gold)',
                            background: 'linear-gradient(to right, rgba(255, 215, 0, 0.1) 1%, transparent 40%,transparent 60% , rgba(255, 215, 0, 0.1) 100%)',
                            color: 'var(--gold)',
                            boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.4), 0 0 9px 3px rgba(255, 215, 0, 0.1)',
                            '&:hover': {
                                color: '#FFFACD',
                                boxShadow: 'inset 0 0 10px rgba(255, 215, 0, 0.6), 0 0 9px 3px rgba(255, 215, 0, 0.2)',
                                '&::before': {
                                    transform: 'translateX(15em)',
                                }
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: '-4em',
                                width: '4em',
                                height: '100%',
                                top: 0,
                                transition: 'transform .4s ease-in-out',
                                background: 'linear-gradient(to right, transparent 1%, rgba(255, 215, 0, 0.1) 40%,rgba(255, 215, 0, 0.1) 60% , transparent 100%)',
                            }
                        }}
                    >
                        SIGUIENTE ▶
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
