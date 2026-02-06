import { Box } from '@mui/material';
import { LocalOffer, AutoAwesome, Shield, EmojiEvents, Star } from "@mui/icons-material";

import HeroSection from './Components/Shared/HeroSection';
import BenefitsSection from './Components/Shared/BenefitsSection';
import NarrativeSection from './Components/Shared/NarrativeSection';
import DiscountSection from './Components/Shared/DiscountSection';
import SocialSection from './Components/Shared/SocialSection';
import Marquee from './Components/Shared/Marquee';
import FinalCTA from './Components/Shared/FinalCTA';
import FallingPetals from './Components/Shared/FallingPetals';


// Assets
import videoSamurai from "./assets/samurai/video-samurai.mp4";
import samuraiHonor from "./assets/samurai/samurai-honor.png";
import samuraiDiscipline from "./assets/samurai/samurai-discipline.png";
import samuraiRespect from "./assets/samurai/samurai-respect.png";
import samuraiHorizontalBg from "./assets/samurai/samurai-horizontal-bg.png";
import samuraiBasic from "./assets/samurai/samurai-basic.png";
import samuraiMedium from "./assets/samurai/samurai-medium.png";
import samuraiPro from "./assets/samurai/samurai-pro.png";

/* const COLORS = {
    red: "#8B1E1E",
    pink: "#EE8D9E",
    gold: "#F4C41A",
}; */

/* const benefits = [
    { icon: LocalOffer, title: "Etiqueta Samurai", description: "Tu nombre impone respeto antes de hablar" },
    { icon: AutoAwesome, title: "Partículas Exclusivas", description: "Cada paso deja huella" },
    { icon: Shield, title: "Armadura Especial", description: "No es una skin, es un símbolo" },
    { icon: EmojiEvents, title: "Acceso VIP", description: "Donde otros esperan, tú entras" },
    { icon: Star, title: "Prestigio Máximo", description: "Reconocido sin pedirlo" },
]; */

/* const narrativeItems = [
    { chapter: "Capítulo I — El Juramento", word: "Honor", image: samuraiHonor, description: "El camino del guerrero comienza aquí" },
    { chapter: "Capítulo II — La Forja", word: "Disciplina", image: samuraiDiscipline, description: "El poder nace de la constancia" },
    { chapter: "Capítulo III — La Leyenda", word: "Respeto", image: samuraiRespect, description: "No se exige, se demuestra" },
]; */

/* const tiers = [
    { title: "RONIN", price: "Básico", img: samuraiBasic, color: "#e0e0e0", glow: "rgba(200,200,200,0.3)", description: "Disciplina báscia.", benefits: ["10.000 Monedas", "Skin Ronin", "Kit de Inicio"], legalText: "Tier 1 - Acceso inmediato." },
    { title: "SAMURAI", price: "Medio", img: samuraiMedium, color: "#F48FB1", glow: "rgba(244,143,177,0.5)", description: "Honor y fuerza.", benefits: ["50.000 Monedas", "Skin Samurai Ancestral", "Kit Guerrero", "Prioridad Media"], legalText: "Tier 2 - Favorito de la comunidad." },
    { title: "SHOGUN", price: "Premium", img: samuraiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Poder divino.", benefits: ["200.000 Monedas", "Armadura Shogun Única", "Tag Dorado", "Discord VIP"], legalText: "Tier 3 - Máximo estatus." },
]; */

/* const socials = [
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
]; */

export default function RangoSamurai() {
    // Self-contained data for Samurai rank
    const rankData = {
        theme: {
            primary: "#8B1E1E",
            secondary: "#F4C41A",
            accent: "rgba(255, 215, 0, 0.4)",
            heroBg: "#8B1E1E",
            glow: "rgba(139, 30, 30, 0.4)",
            petalColor: "#F48FB1"
        },
        marquee: "侍 SAMURAI 侍 • HONOR ETERNO • 武士道 BUSHIDO 武士道",
        hero: {
            title: "SAMURAI",
            subtitle: "Honor, disciplina y poder • 侍",
            video: videoSamurai,
            buttonText: "COMPRAR AHORA"
        },
        benefits: {
            title: "VENTAJAS DEL RANGO",
            subtitle: "Desbloquea el poder completo del guerrero samurai",
            items: [
                { icon: LocalOffer, title: "Etiqueta Samurai", description: "Tu nombre impone respeto antes de hablar" },
                { icon: AutoAwesome, title: "Partículas Exclusivas", description: "Cada paso deja huella" },
                { icon: Shield, title: "Armadura Especial", description: "No es una skin, es un símbolo" },
                { icon: EmojiEvents, title: "Acceso VIP", description: "Donde otros esperan, tú entras" },
                { icon: Star, title: "Prestigio Máximo", description: "Reconocido sin pedirlo" }
            ]
        },
        narrative: [
            { chapter: "Capítulo I — El Juramento", word: "Honor", image: samuraiHonor, description: "El camino del guerrero comienza aquí" },
            { chapter: "Capítulo II — La Forja", word: "Disciplina", image: samuraiDiscipline, description: "El poder nace de la constancia" },
            { chapter: "Capítulo III — La Leyenda", word: "Respeto", image: samuraiRespect, description: "No se exige, se demuestra" }
        ],
        discount: {
            title: "Camino Oculto",
            subtitle: "Introduce tu código y despierta beneficios ancestrales",
            placeholder: "Ingresa tu código",
            buttonText: "Aplicar",
            appliedText: "Aplicado",
            successText: "El camino se ha revelado. Beneficios desbloqueados."
        },
        finalCTA: {
            title: "EL CAMINO DEL",
            accentWord: "GUERRERO",
            bgImage: samuraiHorizontalBg,
            swal: {
                title: "RECLAMA TU HONOR",
                benefitsTitle: "Contenido del Rango",
                legalTitle: "Aviso Legal Obligatorio:",
                legalText: "Esta operación es una DONACIÓN (no una compra) y, salvo que la ley diga lo contrario, NO ES REEMBOLSABLE. No nos hacemos responsables si un menor de edad usó su tarjeta sin autorización. Al continuar aceptas los Términos.",
                chatbotIcon: "⚖️",
                chatbotText: "Verificación requerida: <br><br><b>Por favor, confirma que tienes autorización legal para realizar esta transacción y has leído los <a href='/terminos' target='_blank' style='color: #FFD700; text-decoration: underline;'>Términos y Condiciones</a>.</b>",
                confirmText: "He leído y acepto los Términos y Condiciones. Entiendo que esto es una donación no reembolsable.",
                continueText: "CONTINUAR",
                successTitle: "Honor concedido",
                successText: "Tu donación está siendo procesada."
            },
            tiers: [
                { title: "RONIN", price: "Básico", img: samuraiBasic, color: "#e0e0e0", glow: "rgba(200,200,200,0.3)", description: "Disciplina báscia.", benefits: ["10.000 Monedas", "Skin Ronin", "Kit de Inicio"], legalText: "Tier 1 - Acceso inmediato." },
                { title: "SAMURAI", price: "Medio", img: samuraiMedium, color: "#F48FB1", glow: "rgba(244,143,177,0.5)", description: "Honor y fuerza.", benefits: ["50.000 Monedas", "Skin Samurai Ancestral", "Kit Guerrero", "Prioridad Media"], legalText: "Tier 2 - Favorito de la comunidad." },
                { title: "SHOGUN", price: "Premium", img: samuraiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Poder divino.", benefits: ["200.000 Monedas", "Armadura Shogun Única", "Tag Dorado", "Discord VIP"], legalText: "Tier 3 - Máximo estatus." }
            ]
        },
        social: {
            title: "La hermandad",
            accentWord: "se encuentra",
            subtitle: "Encuéntranos en nuestras redes"
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
        <Box id="rango_samurai" sx={{ position: 'relative', overflow: 'hidden', bgcolor: '#0B0B0B', color: '#EAEAEA', minHeight: '100vh' }}>
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
