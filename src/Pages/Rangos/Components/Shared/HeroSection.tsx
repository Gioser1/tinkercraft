import { useRef, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    videoSrc?: string;
    imageSrc?: string;
    buttonText: string;
    primaryColor?: string; // e.g. #8B1E1E
    accentColor?: string;  // e.g. rgba(138, 43, 226, 0.7)
    fontFamily?: string;
}

export default function HeroSection({
    title,
    subtitle,
    videoSrc,
    imageSrc,
    buttonText,
    primaryColor = "#8B1E1E",
    accentColor = "rgba(138, 43, 226, 0.7)",
    fontFamily = "'Cinzel', serif"
}: HeroSectionProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Ensure video plays after mount if videoSrc is present
        if (videoSrc && videoRef.current) {
            videoRef.current.play().catch((error) => {
                // Suppress autoplay errors (browser may block autoplay)
                console.log('Video autoplay prevented:', error);
            });
        }
    }, [videoSrc]);

    const handleVideoEnd = () => {
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(() => {
                    // Ignore replay errors
                });
            }
        }, 3000);
    };

    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                width: '100%',
                height: '90vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {imageSrc ? (
                <Box
                    component="img"
                    src={imageSrc}
                    alt="Hero Background"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />
            ) : videoSrc ? (
                <Box
                    component="video"
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    src={videoSrc}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />
            ) : null}

            {/* Overlays for blending */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle, transparent 10%, rgba(0,0,0,0.5) 50%, #0B0B0B 100%)',
                    zIndex: 1
                }}
            />

            {/* Top/Bottom Blending */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '25%',
                    background: 'linear-gradient(to bottom, #0B0B0B, transparent)',
                    zIndex: 1
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '30%',
                    background: 'linear-gradient(to top, #0B0B0B, transparent)',
                    zIndex: 1
                }}
            />

            {/* Lateral Blending */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '35%',
                    height: '100%',
                    background: 'linear-gradient(to right, #0B0B0B, transparent)',
                    zIndex: 1
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '35%',
                    height: '100%',
                    background: 'linear-gradient(to left, #0B0B0B, transparent)',
                    zIndex: 1
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    mt: 'auto',
                    mb: { xs: 4, md: 6 }
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: '#fff',
                            fontWeight: 900,
                            mb: 0.5,
                            letterSpacing: '0.25em',
                            fontSize: { xs: '2.5rem', md: '4.5rem' },
                            textShadow: `0 0 40px ${accentColor}`,
                            fontFamily: fontFamily
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        sx={{
                            color: 'rgba(255,255,255,0.5)',
                            mb: 4,
                            letterSpacing: '0.4em',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            fontWeight: 300
                        }}
                    >
                        {subtitle}
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => {
                            const ctaSection = document.getElementById('final-cta');
                            if (ctaSection) {
                                ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        sx={{
                            bgcolor: primaryColor,
                            color: '#fff',
                            px: 5,
                            py: 1.5,
                            borderRadius: 0,
                            fontSize: '1rem',
                            fontWeight: 900,
                            letterSpacing: '0.15em',
                            transition: 'all 0.4s ease',
                            '&:hover': {
                                bgcolor: primaryColor,
                                filter: 'brightness(0.9)',
                                transform: 'translateY(-3px)',
                                boxShadow: `0 10px 30px ${primaryColor}80`
                            }
                        }}
                    >
                        {buttonText}
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
}
