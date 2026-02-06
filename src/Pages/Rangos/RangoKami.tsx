import { Box } from "@mui/material";
import { Flare, AutoAwesome, AutoFixHigh, Public, AutoGraph } from "@mui/icons-material";

import HeroSection from "./Components/Shared/HeroSection";
import Marquee from "./Components/Shared/Marquee";
import BenefitsSection from "./Components/Shared/BenefitsSection";
import NarrativeSection from "./Components/Shared/NarrativeSection";
import DiscountSection from "./Components/Shared/DiscountSection";
import FinalCTA from "./Components/Shared/FinalCTA";
import SocialSection from "./Components/Shared/SocialSection";
import FallingPetals from "./Components/Shared/FallingPetals";

// Assets
import videoHero from "./assets/shared/video-hero.mp4";
import imgDivinidad from "./assets/kami/img-divinidad.png";
import imgIluminacion from "./assets/kami/img-iluminacion.png";
import imgOmnivision from "./assets/kami/img-omnivision.png";
import kamiHorizontalBg from "./assets/kami/kami-horizontal-bg.png";
import donacion1 from "./assets/kami/donacion1.png";

export default function RangoKami() {
    // Self-contained data for Kami rank
    const rankData = {
        theme: {
            primary: "#EE8D9E",
            secondary: "#FFD700",
            accent: "rgba(138, 43, 226, 0.7)",
            heroBg: "#8B1E1E",
            glow: "rgba(238, 141, 158, 0.4)",
            petalColor: "#EE8D9E"
        },
        marquee: "神 KAMI 神 • PODER CELESTIAL • 天上 DIVINO 天上",
        hero: {
            title: "KAMI",
            subtitle: "Poder Celestial • 神",
            video: videoHero,
            buttonText: "COMPRA YA"
        },
        benefits: {
            title: "PRIVILEGIOS KAMI",
            subtitle: "Trasciende los límites del servidor con poder divino",
            items: [
                { icon: Flare, title: "Esencia Kami", description: "Un aura divina te rodea constantemente" },
                { icon: AutoAwesome, title: "Partículas Celestiales", description: "Rastro estelar en cada movimiento" },
                { icon: AutoFixHigh, title: "Vuelo Ilimitado", description: "Domina los cielos sin restricciones" },
                { icon: Public, title: "Acceso Global", description: "Todos los warps y dimensiones" },
                { icon: AutoGraph, title: "Recursos Premium", description: "Generación infinita de recursos divinos" }
            ]
        },
        narrative: [
            { chapter: "Capítulo I — Esencia", word: "Divinidad", image: imgDivinidad, description: "Como Kami, tu presencia irradia poder celestial. El servidor reconoce tu divinidad con partículas y efectos únicos." },
            { chapter: "Capítulo II — Ascenso", word: "Iluminación", image: imgIluminacion, description: "Trasciende las limitaciones mortales. Tu sabiduría y recursos son infinitos, permitiéndote crear sin fronteras." },
            { chapter: "Capítulo III — Visión", word: "Omnipotencia", image: imgOmnivision, description: "Observa y controla el mundo desde las alturas. Tu vuelo ilimitado te otorga perspectiva divina sobre toda creación." }
        ],
        discount: {
            title: "CÓDIGO DIVINO",
            subtitle: "Los dioses recompensan a sus fieles. Ingresa tu código sagrado:",
            placeholder: "CODIGO-KAMI",
            buttonText: "APLICAR CÓDIGO",
            appliedText: "¡Código activado! Descuento divino aplicado",
            successText: "La bendición celestial ha sido otorgada"
        },
        finalCTA: {
            title: "ALCANZA LA",
            accentWord: "DIVINIDAD",
            bgImage: kamiHorizontalBg,
            swal: {
                title: "🌟 KAMI - Poder Celestial",
                benefitsTitle: "Beneficios Divinos",
                legalTitle: "Términos del Rango",
                legalText: "Esta operación es una DONACIÓN (no una compra) y, salvo que la ley diga lo contrario, NO ES REEMBOLSABLE. No nos hacemos responsables si un menor de edad usó su tarjeta sin autorización. Al continuar aceptas los Términos.",
                chatbotIcon: "⚖️",
                chatbotText: "Verificación requerida: <br><br><b>Por favor, confirma que tienes autorización legal para realizar esta transacción y has leído los <a href='/terminos' target='_blank' style='color: #FFD700; text-decoration: underline;'>Términos y Condiciones</a>.</b>",
                confirmText: "He leído y acepto los Términos y Condiciones. Entiendo que esto es una donación no reembolsable.",
                continueText: "CONTINUAR AL PAGO",
                successTitle: "¡Bienvenido, Kami!",
                successText: "Tu poder divino ha sido otorgado. Reconecta para activar tus privilegios celestiales."
            },
            tiers: [
                { title: "KAMI BASIC", price: "Básico", img: donacion1, color: "#EE8D9E", glow: "rgba(238, 141, 158, 0.4)", description: "Esencia divina básica.", benefits: ["Prefix [KAMI]", "Partículas celestiales", "3 Homes divinos", "Kit Kami mensual"], legalText: "Tier 1 - Inicio celestial." },
                { title: "KAMI MEDIUM", price: "Medio", img: donacion1, color: "#fff", glow: "rgba(255, 255, 255, 0.4)", description: "Iluminación intermediara.", benefits: ["Todo de BASIC", "Aura divina visible", "5 Homes", "Vuelo en spawn", "Kit Kami semanal"], legalText: "Tier 2 - Poder creciente." },
                { title: "KAMI PRO", price: "Premium", img: donacion1, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Divinidad absoluta.", benefits: ["Todo de MEDIUM", "Vuelo ilimitado", "10 Homes divinos", "Recursos infinitos", "Acceso beta features", "Kit Kami diario"], legalText: "Tier 3 - Omnipotencia." }
            ]
        },
        social: {
            title: "ÚNETE A LA",
            accentWord: "COMUNIDAD DIVINA",
            subtitle: "Conecta con otros Kamis y comparte tu poder celestial"
        },
        socials: [
            {
                name: "Discord",
                href: "#",
                icon: (
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                    </svg>
                ),
            },
            {
                name: "TikTok",
                href: "#",
                icon: (
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                ),
            },
            {
                name: "YouTube",
                href: "#",
                icon: (
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                ),
            },
        ]
    };

    // Render with identical structure for all ranks
    return (
        <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', position: 'relative' }}>
            <FallingPetals color={rankData.theme.petalColor} count={35} />
            <Marquee
                text={rankData.marquee}
                primaryColor={rankData.theme.primary}
                accentColor={rankData.theme.secondary}
            />
            <HeroSection
                title={rankData.hero.title}
                subtitle={rankData.hero.subtitle}
                videoSrc={rankData.hero.video}
                buttonText={rankData.hero.buttonText}
                primaryColor={rankData.theme.heroBg}
                accentColor={rankData.theme.accent}
            />
            <BenefitsSection
                title={rankData.benefits.title}
                subtitle={rankData.benefits.subtitle}
                benefits={rankData.benefits.items}
                primaryColor={rankData.theme.primary}
                accentColor={rankData.theme.secondary}
            />
            <NarrativeSection
                items={rankData.narrative}
                primaryColor={rankData.theme.primary}
                accentColor={rankData.theme.secondary}
            />
            <DiscountSection
                {...rankData.discount}
                primaryColor={rankData.theme.primary}
                accentColor={rankData.theme.secondary}
            />
            <FinalCTA
                {...rankData.finalCTA}
                tiers={rankData.finalCTA.tiers}
                accentColor={rankData.theme.secondary}
                swalTitle={rankData.finalCTA.swal.title}
                swalBenefitsTitle={rankData.finalCTA.swal.benefitsTitle}
                swalLegalTitle={rankData.finalCTA.swal.legalTitle}
                swalLegalText={rankData.finalCTA.swal.legalText}
                swalChatbotIcon={rankData.finalCTA.swal.chatbotIcon}
                swalChatbotText={rankData.finalCTA.swal.chatbotText}
                swalConfirmText={rankData.finalCTA.swal.confirmText}
                swalContinueButtonText={rankData.finalCTA.swal.continueText}
                swalSuccessTitle={rankData.finalCTA.swal.successTitle}
                swalSuccessText={rankData.finalCTA.swal.successText}
            />
            <SocialSection
                {...rankData.social}
                socials={rankData.socials}
                accentColor={rankData.theme.primary}
            />
        </Box>
    );
}
