import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

interface Petal {
    id: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
    size: number;
    rotation: number;
    opacity: number;
    leafType: number;
}

interface FallingPetalsProps {
    color?: string;
    count?: number;
}

export default function FallingPetals({
    color = '#FFB7C5',
    count = 30
}: FallingPetalsProps) {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        const newPetals: Petal[] = [];
        for (let i = 0; i < count; i++) {
            newPetals.push({
                id: i,
                left: Math.random() * 100,
                animationDuration: 10 + Math.random() * 15,
                animationDelay: Math.random() * 10,
                size: 20 + Math.random() * 25,
                rotation: Math.random() * 360,
                opacity: 0.4 + Math.random() * 0.6,
                leafType: Math.floor(Math.random() * 2) // 2 different leaf types (sakura and ginkgo)
            });
        }
        setPetals(newPetals);
    }, [count]);

    // SVG paths for different Japanese leaf shapes
    const leafPaths = [
        // Sakura (cherry blossom) petal - elongated teardrop
        "M12 2 Q15 6 15 12 Q15 16 12 20 Q9 16 9 12 Q9 6 12 2 Z",
        // Ginkgo leaf shape - fan-like rounded
        "M12 2 Q17 8 17 14 Q17 18 12 20 Q7 18 7 14 Q7 8 12 2 Z"
    ];

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'hidden'
            }}
        >
            {petals.map((petal) => (
                <Box
                    key={petal.id}
                    sx={{
                        position: 'absolute',
                        left: `${petal.left}%`,
                        top: '-50px',
                        width: `${petal.size}px`,
                        height: `${petal.size}px`,
                        opacity: petal.opacity,
                        animation: `fall ${petal.animationDuration}s linear ${petal.animationDelay}s infinite`,
                        transform: `rotate(${petal.rotation}deg)`
                    }}
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        style={{
                            filter: `drop-shadow(0 2px 4px ${color}40)`,
                            animation: `spin ${petal.animationDuration * 0.5}s ease-in-out infinite`
                        }}
                    >
                        {/* Main leaf shape */}
                        <path
                            d={leafPaths[petal.leafType]}
                            fill={color}
                            opacity="0.9"
                        />
                        {/* Leaf vein/detail */}
                        <path
                            d={leafPaths[petal.leafType]}
                            fill="none"
                            stroke={`${color}DD`}
                            strokeWidth="0.5"
                            opacity="0.6"
                        />
                        {/* Leaf highlight */}
                        <path
                            d={leafPaths[petal.leafType]}
                            fill="url(#leafGradient)"
                            opacity="0.3"
                        />
                        {/* Gradient definition */}
                        <defs>
                            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>
            ))}

            <style>
                {`
                    @keyframes fall {
                        0% {
                            transform: translateY(-50px) translateX(0) rotate(0deg);
                        }
                        25% {
                            transform: translateY(25vh) translateX(50px) rotate(90deg);
                        }
                        50% {
                            transform: translateY(50vh) translateX(-30px) rotate(180deg);
                        }
                        75% {
                            transform: translateY(75vh) translateX(40px) rotate(270deg);
                        }
                        100% {
                            transform: translateY(110vh) translateX(-20px) rotate(360deg);
                        }
                    }
                    @keyframes spin {
                        0%, 100% {
                            transform: rotateY(0deg) rotateX(0deg);
                        }
                        25% {
                            transform: rotateY(90deg) rotateX(10deg);
                        }
                        50% {
                            transform: rotateY(180deg) rotateX(0deg);
                        }
                        75% {
                            transform: rotateY(270deg) rotateX(-10deg);
                        }
                    }
                `}
            </style>
        </Box>
    );
}
