import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import type { SvgIconProps } from "@mui/material";

interface Benefit {
    icon: React.ElementType<SvgIconProps>;
    title: string;
    description: string;
}

interface BenefitsSectionProps {
    title: string;
    subtitle: string;
    benefits: Benefit[];
    primaryColor: string;
    accentColor: string;
    fontFamily?: string;
}

const BenefitCard = ({ benefit, index, colors, fontFamily }: { benefit: Benefit; index: number; colors: { primary: string, accent: string }; fontFamily: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Box sx={{ width: { xs: '100%', md: '48%', lg: '30%', xl: '18%' } }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <Card sx={{
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s',
                        borderColor: colors.accent,
                        boxShadow: `0 0 20px ${colors.accent}26`
                    }
                }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 4 }}>
                        <Box sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            bgcolor: `${colors.accent}0D`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            border: `1px solid ${colors.accent}33`
                        }}>
                            <benefit.icon sx={{ fontSize: 32, color: colors.primary }} />
                        </Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: '#fff', fontFamily: fontFamily, fontSize: '1rem' }}>
                            {benefit.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            {benefit.description}
                        </Typography>
                    </CardContent>
                </Card>
            </motion.div>
        </Box>
    );
};

const BenefitsSection = ({
    title,
    subtitle,
    benefits,
    primaryColor,
    accentColor,
    fontFamily = "'Cinzel', serif"
}: BenefitsSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'transparent' }}>
            <Container>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <Typography variant="h3" component="h2" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' }, fontFamily: fontFamily }}>
                        <span style={{ color: accentColor }}>{title.split(' ')[0]}</span>{" "}
                        <span style={{ color: '#fff' }}>{title.split(' ').slice(1).join(' ')}</span>
                    </Typography>
                    <Typography variant="h6" sx={{ maxWidth: '600px', mx: 'auto', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        {subtitle}
                    </Typography>
                </motion.div>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={benefit.title}
                            benefit={benefit}
                            index={index}
                            colors={{ primary: primaryColor, accent: accentColor }}
                            fontFamily={fontFamily}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};


export default BenefitsSection;
// Forced update
