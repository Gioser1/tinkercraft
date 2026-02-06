import { useEffect } from 'react';
import { Box } from "@mui/material";

interface AnimacionEntrarRangosProps {
    videoSrc: string;
    onEnded: () => void;
}

export default function AnimacionEntrarRangos({ videoSrc, onEnded }: AnimacionEntrarRangosProps) {
    useEffect(() => {
        // Bloquear scroll al montar
        document.body.style.overflow = 'hidden';

        // Desbloquear scroll al desmontar
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <Box sx={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 9999,
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <video
                src={videoSrc}
                autoPlay
                onEnded={onEnded}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </Box>
    );
}