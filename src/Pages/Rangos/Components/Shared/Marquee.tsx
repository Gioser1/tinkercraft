import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
    primaryColor: string;
    accentColor: string;
    fontFamily?: string;
}

export default function Marquee({
    text,
    primaryColor,
    accentColor,
    fontFamily = "'Cinzel', serif"
}: MarqueeProps) {
    // Japanese-themed decorative icons
    const icons = ["⛩️", "🌸", "🐉", "🏯", "⚔️", "🎴", "🌊", "🎋"];

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'rgba(0,0,0,0.9)',
                py: 2.5,
                borderTop: `2px solid ${accentColor}33`,
                borderBottom: `2px solid ${primaryColor}33`,
                overflow: 'hidden',
                position: 'relative',
                zIndex: 10,
                boxShadow: `inset 0 1px 0 ${accentColor}22, inset 0 -1px 0 ${primaryColor}22`
            }}
        >
            {/* Animated background pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 50px,
                        ${primaryColor}05 50px,
                        ${primaryColor}05 100px
                    )`,
                    opacity: 0.3
                }}
            />

            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    gap: '3rem',
                    position: 'relative'
                }}
            >
                {[...Array(12)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        {/* Left icon */}
                        <Typography
                            sx={{
                                fontSize: '1.2rem',
                                filter: `drop-shadow(0 0 8px ${accentColor})`,
                                animation: 'pulse 2s ease-in-out infinite'
                            }}
                        >
                            {icons[i % icons.length]}
                        </Typography>

                        {/* Main text */}
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#fff',
                                fontWeight: 900,
                                letterSpacing: '0.4em',
                                fontSize: '0.95rem',
                                fontFamily: fontFamily,
                                textShadow: `0 0 10px ${primaryColor}80, 0 2px 4px rgba(0,0,0,0.8)`,
                                background: `linear-gradient(90deg, ${primaryColor}, ${accentColor}, ${primaryColor})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 3s linear infinite'
                            }}
                        >
                            {text}
                        </Typography>

                        {/* Right icon */}
                        <Typography
                            sx={{
                                fontSize: '1.2rem',
                                filter: `drop-shadow(0 0 8px ${primaryColor})`,
                                animation: 'pulse 2s ease-in-out infinite',
                                animationDelay: '1s'
                            }}
                        >
                            {icons[(i + 4) % icons.length]}
                        </Typography>

                        {/* Decorative separator */}
                        <Typography
                            sx={{
                                color: accentColor,
                                fontSize: '1.5rem',
                                fontWeight: 100,
                                opacity: 0.6,
                                mx: 1
                            }}
                        >
                            ◆
                        </Typography>
                    </Box>
                ))}
            </motion.div>

            <style>
                {`
                    @keyframes shimmer {
                        0% { background-position: 200% 0; }
                        100% { background-position: -200% 0; }
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 0.6; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.1); }
                    }
                `}
            </style>
        </Box>
    );
}
