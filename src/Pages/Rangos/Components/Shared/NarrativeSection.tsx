import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Container } from "@mui/material";

interface NarrativeItem {
    chapter: string;
    word: string;
    image: string;
    description: string;
}

interface NarrativeSectionProps {
    items: NarrativeItem[];
    primaryColor: string;
    accentColor: string;
    fontFamily?: string;
}

const NarrativeItemComponent = ({ item, index, colors, fontFamily }: { item: NarrativeItem; index: number; colors: { primary: string, accent: string }; fontFamily: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
    const imageX = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        index % 2 === 0 ? [100, 0, -100] : [-100, 0, 100]
    );

    return (
        <Box ref={ref} sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 10, overflow: 'hidden' }}>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' }, alignItems: 'center', gap: 8 }}>
                    {/* Image */}
                    <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                        <motion.div style={{ x: imageX, scale }}>
                            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: `0 0 50px ${colors.accent}1A` }}>
                                <img
                                    src={item.image}
                                    alt={item.word}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Text */}
                    <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                        <motion.div style={{ opacity, y, textAlign: index % 2 === 0 ? 'left' : 'right' }}>
                            <Typography variant="overline" sx={{ display: 'block', color: colors.primary, letterSpacing: '0.4em', mb: 2, fontWeight: 700 }}>
                                {item.chapter}
                            </Typography>
                            <Typography variant="h2" sx={{ fontSize: { xs: '3rem', lg: '5.5rem' }, fontWeight: 900, mb: 2, fontFamily: fontFamily }}>
                                <span style={{ color: colors.accent }}>{item.word}</span>
                            </Typography>
                            <Typography variant="h5" sx={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontWeight: 300, fontSize: '1.25rem' }}>
                                {item.description}
                            </Typography>
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

const NarrativeSection = ({
    items,
    primaryColor,
    accentColor,
    fontFamily = "'Cinzel', serif"
}: NarrativeSectionProps) => {
    return (
        <Box component="section" sx={{ position: 'relative', bgcolor: 'transparent' }}>
            {items.map((item, index) => (
                <NarrativeItemComponent
                    key={item.word + index}
                    item={item}
                    index={index}
                    colors={{ primary: primaryColor, accent: accentColor }}
                    fontFamily={fontFamily}
                />
            ))}
        </Box>
    );
};

export default NarrativeSection;
