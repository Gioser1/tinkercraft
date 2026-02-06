import { motion } from "framer-motion";
import "animate.css";
import {
    Box,
    Button,
    Container,
    Typography,
    Grid
} from "@mui/material";
import Swal from "sweetalert2";

interface Tier {
    title: string;
    price: string;
    img: string;
    color: string;
    glow: string;
    description: string;
    benefits: string[];
    legalText: string;
}

interface FinalCTAProps {
    title: string;
    accentWord: string;
    bgImage: string;
    tiers: Tier[];
    swalTitle: string;
    swalBenefitsTitle: string;
    swalLegalTitle: string;
    swalLegalText: string;
    swalChatbotIcon: string;
    swalChatbotText: string;
    swalConfirmText: string;
    swalContinueButtonText: string;
    swalSuccessTitle: string;
    swalSuccessText: string;
    accentColor: string;
    fontFamily?: string;
}

const FinalCTA = ({
    title,
    accentWord,
    bgImage,
    tiers,
    swalTitle,
    swalBenefitsTitle,
    swalLegalTitle,
    swalLegalText,
    swalChatbotIcon,
    swalChatbotText,
    swalConfirmText,
    swalContinueButtonText,
    swalSuccessTitle,
    swalSuccessText,
    accentColor,
    fontFamily = "'Cinzel', serif"
}: FinalCTAProps) => {
    const handlePurchase = (tier: Tier) => {
        const ALERT_COLOR = "#EE8D9E"; // Fixed pink color as requested

        Swal.fire({
            title: `<span style="font-family: ${fontFamily}; color: ${ALERT_COLOR}; font-size: 1.4rem;">${swalTitle}</span>`,
            background: "#0a0a0a",
            color: "#fff",
            width: "850px",
            padding: "1rem",
            html: `
        <div class="swal-layout-container">
            <!-- Columna Izquierda: Beneficios -->
            <div class="swal-benefits-col">
                <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 12px; height: 100%; border: 1px solid ${ALERT_COLOR}1A;">
                    <b style="color: ${ALERT_COLOR}; font-size: 0.95rem; display: block; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 5px;">${swalBenefitsTitle} ${tier.title}</b>
                    <ul style="list-style-type: none; padding: 0; margin: 0; text-align: left; display: grid; grid-template-columns: 1fr; gap: 5px;">
                        ${(tier.benefits || []).map(b => `
                            <li style="color: #ddd; font-size: 0.85rem; display: flex; align-items: center; gap: 6px;">
                                <span style="color: ${ALERT_COLOR}; font-size: 0.8rem;">✦</span> ${b}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <!-- Columna Derecha: Legal + Acción -->
            <div class="swal-actions-col">
                <div style="background: rgba(139, 30, 30, 0.08); border: 1px solid rgba(139, 30, 30, 0.3); padding: 10px; border-radius: 8px; text-align: left;">
                    <p style="color: #ff6b6b; font-size: 0.75rem; font-weight: bold; margin: 0 0 3px 0; text-transform: uppercase;">⚠️ ${swalLegalTitle}</p>
                    <p style="color: #aaa; font-size: 0.7rem; margin: 0; line-height: 1.2;">
                        ${swalLegalText}
                    </p>
                </div>

                <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; gap: 8px; align-items: center; background: rgba(255,255,255,0.03); padding: 8px; border-radius: 8px;">
                        <div style="font-size: 1.1rem;">${swalChatbotIcon}</div>
                        <p style="font-size: 0.75rem; color: #fff; margin: 0; text-align: left; line-height: 1.2;">${swalChatbotText}</p>
                    </div>

                    <label style="display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); cursor: pointer;">
                        <input type="checkbox" id="chatbot-confirm" style="width: 14px; height: 14px; cursor: pointer; accent-color: ${ALERT_COLOR};">
                        <span style="font-size: 0.8rem; color: #fff; user-select: none;">
                            ${swalConfirmText}
                        </span>
                    </label>
                </div>
            </div>
        </div>
      `,
            confirmButtonText: swalContinueButtonText,
            confirmButtonColor: ALERT_COLOR,
            showCancelButton: true,
            cancelButtonText: "CANCELAR",
            cancelButtonColor: "#222",
            showCloseButton: true,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            customClass: {
                popup: 'rank-popup',
                confirmButton: 'rank-confirm'
            },
            preConfirm: () => {
                const isChecked = (document.getElementById('chatbot-confirm') as HTMLInputElement).checked;
                if (!isChecked) {
                    Swal.showValidationMessage('Debes confirmar para proceder');
                    return false;
                }
                return true;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: swalSuccessTitle,
                    text: swalSuccessText,
                    background: '#0a0a0a',
                    color: '#fff',
                    confirmButtonColor: ALERT_COLOR
                });
            }
        });
    };

    return (
        <Box
            id="final-cta"
            component="section"
            sx={{
                position: "relative",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "transparent",
                overflow: "hidden",
                py: 8
            }}
        >
            <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <img
                    src={bgImage}
                    alt="Background"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.1,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, #0B0B0B 0%, transparent 50%, #0B0B0B 100%)",
                    }}
                />
            </Box>

            <Box sx={{ position: "relative", textAlign: "center", zIndex: 1, mb: 10 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 900,
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "0.4em",
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        opacity: 0.6,
                        fontFamily: fontFamily,
                    }}
                >
                    {title} <span style={{ color: accentColor, fontSize: "2.5rem" }}>{accentWord}</span>
                </Typography>
            </Box>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <Grid container spacing={6} justifyContent="center" alignItems="center">
                    {tiers.map((tier, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Box
                                component={motion.div}
                                initial="rest"
                                whileHover="hover"
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: "280px",
                                    height: "350px",
                                    mx: "auto",
                                }}
                            >
                                <Box
                                    component={motion.div}
                                    variants={{
                                        rest: { y: "8%", opacity: 1, scale: 1 },
                                        hover: { y: "-5%", opacity: 1, scale: 1.25 },
                                    }}
                                    transition={{ duration: 0.6, ease: "backOut" }}
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        zIndex: 0,
                                        pointerEvents: "none",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <img
                                        src={tier.img}
                                        alt={tier.title}
                                        style={{
                                            width: "115%",
                                            height: "auto",
                                            objectFit: "contain",
                                            filter: `drop-shadow(0 0 20px ${tier.glow})`,
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%",
                                        height: "240px",
                                        zIndex: 2,
                                        bgcolor: "rgba(255,255,255,0.02)",
                                        backdropFilter: "blur(15px)",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(255,255,255,0.05)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        p: 3,
                                        transition: "all 0.4s ease",
                                        "&:hover": {
                                            bgcolor: "rgba(255, 255, 255, 0.05)",
                                            borderColor: tier.color,
                                            transform: "translateY(-5px)",
                                            boxShadow: `0 20px 40px rgba(0,0,0,0.4)`
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: fontFamily,
                                            fontWeight: 900,
                                            color: "#fff",
                                            letterSpacing: "0.2em",
                                            mb: 1,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {tier.title}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "rgba(255,255,255,0.4)",
                                            mb: 3,
                                            textTransform: "uppercase",
                                            letterSpacing: '0.15em',
                                            textAlign: 'center',
                                            fontSize: "0.65rem"
                                        }}
                                    >
                                        {tier.description}
                                    </Typography>

                                    <Button
                                        onClick={() => handlePurchase(tier)}
                                        variant="contained"
                                        sx={{
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            color: tier.color,
                                            fontSize: "0.85rem",
                                            fontWeight: 900,
                                            letterSpacing: "0.2em",
                                            border: `1px solid ${tier.color}44`,
                                            px: 4,
                                            py: 1,
                                            borderRadius: '8px',
                                            fontFamily: fontFamily,
                                            transition: 'all 0.3s',
                                            "&:hover": {
                                                bgcolor: tier.color,
                                                color: "#000",
                                                borderColor: tier.color,
                                                boxShadow: `0 0 20px ${tier.glow}`
                                            }
                                        }}
                                    >
                                        DONAR
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <style>
                {`
            .rank-popup {
                border: 1px solid rgba(255,255,255,0.1) !important;
                border-radius: 16px !important;
                backdrop-filter: blur(10px);
            }
            .rank-confirm {
                border-radius: 8px !important;
                font-family: ${fontFamily} !important;
                letter-spacing: 0.2em !important;
                font-weight: 900 !important;
                padding: 12px 40px !important;
            }

            /* Responsive Layout for Swal */
            .swal-layout-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                text-align: left;
            }
            .swal-benefits-col, .swal-actions-col {
                display: flex;
                flex-direction: column;
            }

            @media (max-width: 768px) {
                .swal-layout-container {
                    grid-template-columns: 1fr;
                }
            }
        `}
            </style>
        </Box>
    );
};

export default FinalCTA;
