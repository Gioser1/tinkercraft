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

// Shogun Assets
import shogunHero from "./Components/Shogun/assets/shogunHero.jpg";
import shogunBg from "./Components/Shogun/assets/Japanese_emperor_without_202602041459.jpeg";
import ShogunDominio from "./Components/Shogun/assets/ShogunDominio.jpeg";
import ShogunEstrategia from "./Components/Shogun/assets/ShogunEstrategia.jpeg";
import ShogunGloria from "./Components/Shogun/assets/ShogunGloria.jpeg";
import ShogunGuerrero from "./Components/Shogun/assets/ShogunGuerrero.jpeg";
import ShogunGeneral from "./Components/Shogun/assets/ShogunGeneral.jpeg";
import ShogunKing from "./Components/Shogun/assets/ShogunKing.jpeg";

// Reusing these for now as placeholders if needed, or just using Shogun assets for everything
// const PLACEHOLDER_IMG = shogunHero;

const COLORS = {
    pink: "#EE8D9E",
    gold: "#FFD700",
    accent: "rgba(138, 43, 226, 0.7)",
    heroBg: "#8B1E1E",
    glow: "rgba(238, 141, 158, 0.4)",
};

const benefits = [
    { icon: Flare, title: "Etiqueta Shogun", description: "Tu nombre gobierna sin preguntar" },
    { icon: AutoAwesome, title: "Partículas Legendarias", description: "Deja rastro dorado en cada paso" },
    { icon: AutoFixHigh, title: "Armadura Imperial", description: "Única y exclusiva para el Shogun" },
    { icon: Public, title: "Acceso Supremo", description: "Entradas, canales y beneficios VIP" },
    { icon: AutoGraph, title: "Prestigio Eterno", description: "Reconocimiento que perdura" },
];

const narrativeItems = [
    { chapter: 'Acto I — El Ascenso', word: 'Dominio', image: ShogunDominio, description: 'El poder se reclama con fuerza y honor.' },
    { chapter: 'Acto II — La Forja', word: 'Estrategia', image: ShogunEstrategia, description: 'La mente del guerrero supera cualquier acero.' },
    { chapter: 'Acto III — El Legado', word: 'Gloria', image: ShogunGloria, description: 'Tu nombre escrito en la historia para siempre.' },
];

const tiers = [
    { title: 'GUERRERO', price: 'Básico', img: ShogunGuerrero, color: '#c0b283', glow: 'rgba(192,178,131,0.25)', description: 'Inicia tu camino imperial', benefits: ['5.000 Monedas', 'Tag Bronce', 'Kit Inicial'], legalText: 'Tier 1 - Acceso básico' },
    { title: 'GENERAL', price: 'Medio', img: ShogunGeneral, color: '#f4c41a', glow: 'rgba(244,196,26,0.35)', description: 'Liderazgo y respeto', benefits: ['50.000 Monedas', 'Tag Plata', 'Kit Avanzado'], legalText: 'Tier 2 - Alto mando' },
    { title: 'SHOGUN', price: 'Premium', img: ShogunKing, color: '#FFD700', glow: 'rgba(255,215,0,0.6)', description: 'Soberanía total', benefits: ['500.000 Monedas', 'Armadura Shogun', 'Discord VIP', 'Tag Dorado'], legalText: 'Tier 3 - Máxima jerarquía' },
];

const socials = [
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
];

export default function RangoShogun() {
    return (
        <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', position: 'relative' }}>
            <FallingPetals color={COLORS.pink} count={35} />
            <Marquee
                text="SHOGUN • SOBERANÍA"
                primaryColor={COLORS.pink}
                accentColor={COLORS.gold}
            />
            <HeroSection
                title="SHOGUN"
                subtitle="El Comandante Supremo • 将軍"
                imageSrc={shogunHero}
                buttonText="ÚNETE AL IMPERIO"
                primaryColor={COLORS.heroBg}
                accentColor={COLORS.accent}
            />
            <BenefitsSection
                title="PODER IMPERIAL"
                subtitle="Domina con autoridad absoluta"
                benefits={benefits}
                primaryColor={COLORS.pink}
                accentColor={COLORS.gold}
            />
            <NarrativeSection
                items={narrativeItems}
                primaryColor={COLORS.pink}
                accentColor={COLORS.gold}
            />
            <DiscountSection
                title="Decreto Imperial"
                subtitle="Presenta tu sello para reclamar un descuento exclusivo"
                placeholder="Código Imperial"
                buttonText="Reclamar"
                appliedText="Aplicado"
                successText="El descuento ha sido aplicado por orden del Shogun."
                primaryColor={COLORS.pink}
                accentColor={COLORS.gold}
            />
            <FinalCTA
                title="FORJA TU"
                accentWord="LEGADO"
                bgImage={shogunBg}
                tiers={tiers}
                accentColor={COLORS.gold}
                swalTitle="JURAMENTO DE LEALTAD"
                swalBenefitsTitle="Privilegios del Rango"
                swalLegalTitle="Edicto del Shogun:"
                swalLegalText="Esta contribución fortalece el imperio. Al proceder, juras lealtad y aceptas que la ofrenda es definitiva."
                swalChatbotIcon="🏯"
                swalChatbotText="El camino del guerrero requiere honor: <br><br><b>¿Juras solemnemente que esta ofrenda proviene de tus propios recursos o con el permiso de tus guardianes?</b>"
                swalConfirmText="Sí, por mi honor."
                swalContinueButtonText="JURAR LEALTAD"
                swalSuccessTitle="Juramento Aceptado"
                swalSuccessText="Bienvenido a las filas del Shogunato."
            />
            <SocialSection
                title="Imperio"
                accentWord="Digital"
                subtitle="Sigue la senda del Shogun"
                socials={socials}
                accentColor={COLORS.pink}
            />
        </Box>
    );
}
