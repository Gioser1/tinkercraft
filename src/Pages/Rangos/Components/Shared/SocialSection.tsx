import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";

interface SocialItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

interface SocialSectionProps {
    title: string;
    accentWord: string;
    subtitle: string;
    socials: SocialItem[];
    accentColor: string;
    fontFamily?: string;
    ctaButton?: React.ReactNode;
}

const SocialSection = ({
    title,
    accentWord,
    subtitle,
    socials,
    accentColor,
    fontFamily = "'Cinzel', serif",
    ctaButton
}: SocialSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Box component="section" sx={{ py: 10 }}>
            <Container>
                <motion.div
                    ref={ref}
                    style={{ textAlign: "center" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 900, mb: 2, color: "#fff", fontFamily: fontFamily }}
                    >
                        {title}{" "}
                        <Box component="span" sx={{ color: accentColor }}>
                            {accentWord}
                        </Box>
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            mb: 6,
                            fontWeight: 300
                        }}
                    >
                        {subtitle}
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 2, md: 4 }, flexWrap: 'wrap' }}>
                        {socials.map((social, index) => (
                            <motion.div
                                key={social.name}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.12 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                <IconButton
                                    href={social.href}
                                    sx={{
                                        width: { xs: 60, md: 80 },
                                        height: { xs: 60, md: 80 },
                                        borderRadius: "50%",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "#fff",
                                        transition: "all 0.35s ease",
                                        bgcolor: 'rgba(255,255,255,0.02)',

                                        "&:hover": {
                                            borderColor: accentColor,
                                            color: accentColor,
                                            boxShadow: `0 0 30px ${accentColor}66`,
                                            backgroundColor: `${accentColor}0D`,
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            </motion.div>
                        ))}
                    </Box>

                    {ctaButton && (
                        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
                            {ctaButton}
                        </Box>
                    )}
                </motion.div>
            </Container>
        </Box>
    );
};

export default SocialSection;
