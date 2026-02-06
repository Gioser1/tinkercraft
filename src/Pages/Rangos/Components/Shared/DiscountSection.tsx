import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    Card
} from "@mui/material";
import { Check, AutoAwesome } from "@mui/icons-material";

interface DiscountSectionProps {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    appliedText: string;
    successText: string;
    primaryColor: string;
    accentColor: string;
    fontFamily?: string;
}

const DiscountSection = ({
    title,
    subtitle,
    placeholder,
    buttonText,
    appliedText,
    successText,
    primaryColor,
    accentColor,
    fontFamily = "'Cinzel', serif"
}: DiscountSectionProps) => {
    const [code, setCode] = useState("");
    const [isApplied, setIsApplied] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleApplyCode = () => {
        if (code.trim()) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsApplied(true);
                setIsAnimating(false);
            }, 1000);
        }
    };

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 14, md: 20 },
                bgcolor: "transparent",
                position: "relative",
            }}
        >
            <Container maxWidth="sm">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <Card
                        sx={{
                            p: { xs: 5, md: 7 },
                            textAlign: "center",
                            bgcolor: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            borderRadius: "24px",
                            backdropFilter: "blur(12px)",
                            boxShadow: `0 0 50px ${primaryColor}0D`,
                            transition: "all 0.4s ease",
                            "&:hover": {
                                borderColor: primaryColor,
                                boxShadow: `0 0 60px ${primaryColor}26`,
                            },
                        }}
                    >
                        {/* ICON */}
                        <Box
                            sx={{
                                width: 64,
                                height: 64,
                                mx: "auto",
                                mb: 4,
                                borderRadius: "50%",
                                background: `linear-gradient(135deg, ${primaryColor}33, ${accentColor}33)`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `1px solid ${accentColor}33`,
                            }}
                        >
                            <AutoAwesome sx={{ color: accentColor, fontSize: 30 }} />
                        </Box>

                        {/* TITLE */}
                        <Typography
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontWeight: 900,
                                letterSpacing: "0.04em",
                                mb: 1.5,
                                color: "#fff",
                                fontFamily: fontFamily,
                            }}
                        >
                            {title}
                        </Typography>

                        {/* SUBTITLE */}
                        <Typography
                            sx={{
                                fontSize: { xs: "0.95rem", md: "1rem" },
                                color: "rgba(255,255,255,0.6)",
                                mb: 5,
                                lineHeight: 1.7,
                                letterSpacing: '0.1em'
                            }}
                        >
                            {subtitle}
                        </Typography>

                        {/* INPUT + BUTTON */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" },
                                gap: 2,
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder={placeholder}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                disabled={isApplied}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        color: "#ffffff",
                                        borderRadius: "12px",
                                        fontSize: "0.95rem",
                                        "& fieldset": {
                                            borderColor: "rgba(255,255,255,0.1)",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: primaryColor,
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: accentColor,
                                        },
                                    },
                                    "& input::placeholder": {
                                        color: "rgba(255,255,255,0.3)",
                                        opacity: 1,
                                    },
                                }}
                            />

                            <Button
                                onClick={handleApplyCode}
                                disabled={isApplied || !code.trim()}
                                sx={{
                                    height: 52,
                                    px: 4,
                                    fontWeight: 900,
                                    letterSpacing: "0.15em",
                                    borderRadius: "12px",
                                    color: "#fff",
                                    background: isApplied
                                        ? "#16a34a"
                                        : `linear-gradient(135deg, ${primaryColor}, #8B1E1E)`,
                                    transition: "all 0.3s ease",
                                    fontFamily: fontFamily,
                                    "&:hover": {
                                        background: isApplied
                                            ? "#16a34a"
                                            : `linear-gradient(135deg, ${primaryColor}, #A12525)`,
                                        boxShadow: isApplied
                                            ? "none"
                                            : `0 0 30px ${primaryColor}66`,
                                    },
                                    "&:disabled": {
                                        opacity: 0.6,
                                    },
                                }}
                            >
                                {isAnimating ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <AutoAwesome fontSize="small" />
                                    </motion.div>
                                ) : isApplied ? (
                                    <>
                                        <Check sx={{ mr: 1, fontSize: 18 }} />
                                        {appliedText}
                                    </>
                                ) : (
                                    buttonText
                                )}
                            </Button>
                        </Box>

                        {/* SUCCESS */}
                        {isApplied && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Box
                                    sx={{
                                        mt: 4,
                                        p: 2.5,
                                        borderRadius: "12px",
                                        bgcolor: "rgba(34,197,94,0.05)",
                                        border: "1px solid rgba(74, 222, 128, 0.3)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#4ade80",
                                            fontWeight: 600,
                                            fontSize: "0.95rem",
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {successText}
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                    </Card>
                </motion.div>
            </Container>
        </Box>
    );
};

export default DiscountSection;
