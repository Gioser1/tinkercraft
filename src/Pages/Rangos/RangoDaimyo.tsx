import { Box } from "@mui/material";
import { Shield, EmojiEvents, Star, Public, AutoAwesome } from "@mui/icons-material";

import HeroSection from "./Components/Shared/HeroSection";
import Marquee from "./Components/Shared/Marquee";
import BenefitsSection from "./Components/Shared/BenefitsSection";
import NarrativeSection from "./Components/Shared/NarrativeSection";
import DiscountSection from "./Components/Shared/DiscountSection";
import FinalCTA from "./Components/Shared/FinalCTA";
import SocialSection from "./Components/Shared/SocialSection";
import FallingPetals from "./Components/Shared/FallingPetals";

// Assets
import videoHero from "./assets/daimyo/video-daimyo.mp4";
import imgDivinidad from "./assets/daimyo/img-divinidad.png";
import imgIluminacion from "./assets/daimyo/img-iluminacion.png";
import imgOmnivision from "./assets/daimyo/img-omnivision.png";
import kamiHorizontalBg from "./assets/daimyo/kami-horizontal-bg.png";
import kamiBasic from "./assets/daimyo/kami-basic.png";
import kamiMedium from "./assets/daimyo/kami-medium.png";
import kamiPro from "./assets/daimyo/kami-pro.png";

export default function RangoDaimyo() {
    // Self-contained data for Daimyo rank
    const rankData = {
        theme: {
            primary: "#EE8D9E",
            secondary: "#FFD700",
            accent: "rgba(138, 43, 226, 0.7)",
            heroBg: "#8B1E1E",
            glow: "rgba(238, 141, 158, 0.4)",
            petalColor: "#EE8D9E"
        },
        marquee: "大名 DAIMYO 大名 • SEÑOR DE LA GUERRA • 将軍 SHOGUN 将軍",
        hero: {
            title: "DAIMYO",
            subtitle: "Liderazgo Estratégico • 大名",
            video: videoHero,
            buttonText: "COMANDAR"
        },
        benefits: {
            title: "AUTORIDAD SUPREMA",
            subtitle: "Lidera con el poder de un señor feudal",
            items: [
                { icon: Shield, title: "Escudo de Mando", description: "Protección garantizada en territorios" },
                { icon: EmojiEvents, title: "Conquistas Épicas", description: "Acceso a eventos exclusivos de guerra" },
                { icon: Star, title: "Prestigio Noble", description: "Reconocimiento instantáneo en el servidor" },
                { icon: Public, title: "Dominio Territorial", description: "Control prioritario de recursos" },
                { icon: AutoAwesome, title: "Aura de Liderazgo", description: "Efectos visuales dignos de un señor" }
            ]
        },
        narrative: [
            { chapter: "Título I — El Ascenso", word: "Estrategia", image: imgDivinidad, description: "Desde las sombras emerge el líder supremo" },
            { chapter: "Título II — La Conquista", word: "Dominio", image: imgIluminacion, description: "Cada territorio reclamado fortalece tu legado" },
            { chapter: "Título III — El Imperio", word: "Eternidad", image: imgOmnivision, description: "Tu nombre resuena en cada rincón del servidor" }
        ],
        discount: {
            title: "Decreto Imperial",
            subtitle: "Introduce el sello de tu casa para obtener privilegios",
            placeholder: "Código del Señor",
            buttonText: "Decretar",
            appliedText: "Decretado",
            successText: "Tu decreto ha sido aceptado. Privilegios otorgados."
        },
        finalCTA: {
            title: "RECLAMA TU",
            accentWord: "IMPERIO",
            bgImage: kamiHorizontalBg,
            swal: {
                title: "ASCIENDE AL PODER",
                benefitsTitle: "Privilegios del Daimyo",
                legalTitle: "Edicto Imperial:",
                legalText: "Esta operación es una DONACIÓN (no una compra) y, salvo que la ley diga lo contrario, NO ES REEMBOLSABLE. No nos hacemos responsables si un menor de edad usó su tarjeta sin autorización. Al continuar aceptas los Términos.",
                chatbotIcon: "⚖️",
                chatbotText: "Verificación requerida: <br><br><b>Por favor, confirma que tienes autorización legal para realizar esta transacción y has leído los <a href='/terminos' target='_blank' style='color: #FFD700; text-decoration: underline;'>Términos y Condiciones</a>.</b>",
                confirmText: "He leído y acepto los Términos y Condiciones. Entiendo que esto es una donación no reembolsable.",
                continueText: "ESTABLECER PACTO",
                successTitle: "Imperio Establecido",
                successText: "Tus dominios te aguardan..."
            },
            tiers: [
                { title: "HATAMOTO", price: "Básico", img: kamiBasic, color: "#EE8D9E", glow: "rgba(238, 141, 158, 0.4)", description: "Inicia tu legado con honor. La primera piedra de tu imperio comienza aquí.", benefits: ["30.000 Monedas", "Estandarte Daimyo", "Kit Noble"], legalText: "Tier 1 - Inicio del dominio." },
                { title: "SHOGUNATO", price: "Medio", img: kamiMedium, color: "#fff", glow: "rgba(255, 255, 255, 0.4)", description: "Comanda ejércitos y establece tu ley. El respeto se gana en el campo de batalla.", benefits: ["120.000 Monedas", "Armadura Señorial", "Kit Comandante", "Acceso Salón de Guerra"], legalText: "Tier 2 - Poder consolidado." },
                { title: "EMPERADOR", price: "Premium", img: kamiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Domina sin oposición. Tu voluntad es absoluta y tu poder, infinito.", benefits: ["600.000 Monedas", "Corona Imperial", "Tag Dorado", "Control Total"], legalText: "Tier 3 - Dominio supremo." }
            ]
        },
        social: {
            title: "Consejo",
            accentWord: "Daimyo",
            subtitle: "Planifica tus conquistas"
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
            <FallingPetals color={rankData.theme.petalColor} count={30} />
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
