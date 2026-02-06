import { Flare, AutoAwesome, AutoFixHigh, Public, AutoGraph, LocalOffer, Shield, EmojiEvents, Star } from "@mui/icons-material";

// Shared Assets
import videoHero from "../assets/shared/video-hero.mp4";

// Kami Assets
import imgDivinidad from "../assets/kami/img-divinidad.png";
import imgIluminacion from "../assets/kami/img-iluminacion.png";
import imgOmnivision from "../assets/kami/img-omnivision.png";
import kamiHorizontalBg from "../assets/kami/kami-horizontal-bg.png";
import kamiBasic from "../assets/kami/kami-basic.png";
import kamiMedium from "../assets/kami/kami-medium.png";
import kamiPro from "../assets/kami/kami-pro.png";

// Samurai Assets
// import samuraiHero from "../assets/samurai/samurai-hero.png";
import samuraiHonor from "../assets/samurai/samurai-honor.png";
import samuraiDiscipline from "../assets/samurai/samurai-discipline.png";
import samuraiRespect from "../assets/samurai/samurai-respect.png";
import samuraiHorizontalBg from "../assets/samurai/samurai-horizontal-bg.png";
import samuraiBasic from "../assets/samurai/samurai-basic.png";
import samuraiMedium from "../assets/samurai/samurai-medium.png";
import samuraiPro from "../assets/samurai/samurai-pro.png";

export const RANK_COLORS = {
    KAMI: {
        primary: "#EE8D9E",
        secondary: "#FFD700",
        accent: "rgba(138, 43, 226, 0.7)",
        heroBg: "#8B1E1E"
    },
    SAMURAI: {
        primary: "#8B1E1E",
        secondary: "#F4C41A",
        accent: "rgba(255, 215, 0, 0.4)",
        heroBg: "#8B1E1E"
    },
    DAIMYO: {
        primary: "#4A90E2",
        secondary: "#50E3C2",
        accent: "rgba(74, 144, 226, 0.4)",
        heroBg: "#0B3954"
    },
    SENSEI: {
        primary: "#7ED321",
        secondary: "#F8E71C",
        accent: "rgba(126, 211, 33, 0.4)",
        heroBg: "#2D5A27"
    }
};

export const RANKS_DATA = {
    KAMI: {
        marquee: "KAMI • DIVINIDAD",
        hero: {
            title: "KAMI",
            subtitle: "Poder Celestial • 神",
            video: videoHero,
            buttonText: "COMPRA YA"
        },
        benefits: {
            title: "PODERES DIVINOS",
            subtitle: "Alcanza la iluminación definitiva en el servidor",
            items: [
                { icon: Flare, title: "Esencia Kami", description: "Un aura divina te rodea constantemente" },
                { icon: AutoAwesome, title: "Partículas Celestiales", description: "Rastro estelar en cada movimiento" },
                { icon: AutoFixHigh, title: "Herramientas Divinas", description: "Forjadas con energía ancestral" },
                { icon: Public, title: "Omnipresencia", description: "Acceso prioritario a todos los reinos" },
                { icon: AutoGraph, title: "Poder Infinito", description: "Recursos exclusivos del escalafón más alto" },
            ]
        },
        narrative: [
            { chapter: "Canto I — El Despertar", word: "Divinidad", image: imgDivinidad, description: "Cuando el mortal trasciende la barrera de lo físico." },
            { chapter: "Canto II — El Ascenso", word: "Iluminación", image: imgIluminacion, description: "La luz que guía el camino de los demás guerreros." },
            { chapter: "Canto III — La Eternidad", word: "Omnivisión", image: imgOmnivision, description: "Presente en cada rincón, eterno en cada leyenda." },
        ],
        discount: {
            title: "Mantra Sagrado",
            subtitle: "Susurra el código ancestral para invocar la gracia de los Kami",
            placeholder: "Código Divino",
            buttonText: "Invocar",
            appliedText: "Invocado",
            successText: "La bendición ha sido concedida. El precio se ha ajustado."
        },
        finalCTA: {
            title: "ELEGIR TU",
            accentWord: "DESTINO",
            bgImage: kamiHorizontalBg,
            swal: {
                title: "RECIBE LA BENDICIÓN",
                benefitsTitle: "Dones del Rango",
                legalTitle: "Decreto Celestial:",
                legalText: "Esto es una donación voluntaria para el servidor. La transacción es final e irrevocable.",
                chatbotIcon: "🏮",
                chatbotText: "Antes de ascender, los ancestros requieren tu palabra: <br><br><b>¿Confirmas que posees el permiso divino (y de tus guardianes) para realizar esta ofrenda?</b>",
                confirmText: "Sí, lo juro por mi honor eterno.",
                continueText: "ASCENDER",
                successTitle: "Bendición Concedida",
                successText: "Iniciando proceso de ascensión..."
            },
            tiers: [
                { title: "ESPÍRITU", price: "Básico", img: kamiBasic, color: RANK_COLORS.KAMI.primary, glow: "rgba(238, 141, 158, 0.4)", description: "Inicia tu ascenso divino.", benefits: ["25.000 Monedas", "Aura Rosa", "Kit Inicial Kami"], legalText: "Tier 1 - Acceso inmediato." },
                { title: "DEIDAD", price: "Medio", img: kamiMedium, color: "#fff", glow: "rgba(255, 255, 255, 0.4)", description: "Poder celestial puro.", benefits: ["100.000 Monedas", "Katana Divina", "Kit Deidad", "Vuelo en Lobby"], legalText: "Tier 2 - Favorito de la comunidad." },
                { title: "KAMI-SAMA", price: "Premium", img: kamiPro, color: RANK_COLORS.KAMI.secondary, glow: "rgba(255, 215, 0, 0.6)", description: "Omnipotencia total.", benefits: ["500.000 Monedas", "Skin Kami Única", "Tag Celestial", "Prioridad Máxima"], legalText: "Tier 3 - Máximo estatus." },
            ]
        },
        social: {
            title: "Comunidad",
            accentWord: "Celestial",
            subtitle: "Conecta con los Kami"
        }
    },
    SAMURAI: {
        marquee: "SAMURAI • CAMINO DEL GUERRERO",
        hero: {
            title: "SAMURAI",
            subtitle: "Honor, disciplina y poder • 侍",
            video: videoHero,
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
                { icon: Star, title: "Prestigio Máximo", description: "Reconocido sin pedirlo" },
            ]
        },
        narrative: [
            { chapter: "Capítulo I — El Juramento", word: "Honor", image: samuraiHonor, description: "El camino del guerrero comienza aquí" },
            { chapter: "Capítulo II — La Forja", word: "Disciplina", image: samuraiDiscipline, description: "El poder nace de la constancia" },
            { chapter: "Capítulo III — La Leyenda", word: "Respeto", image: samuraiRespect, description: "No se exige, se demuestra" },
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
                legalText: "Esto es una donación. No nos hacemos responsables si la tarjeta fue utilizada sin autorización. La transacción es final.",
                chatbotIcon: "🤖",
                chatbotText: "Antes de procesar tu donación, el Shogun requiere tu confirmación: <br><br><b>¿Has leído el aviso legal y confirmas que tienes autorización total para realizar este pago?</b>",
                confirmText: "Sí, confirmo bajo mi honor.",
                continueText: "CONTINUAR",
                successTitle: "Honor concedido",
                successText: "Tu donación está siendo procesada."
            },
            tiers: [
                { title: "RONIN", price: "Básico", img: samuraiBasic, color: "#e0e0e0", glow: "rgba(200,200,200,0.3)", description: "Disciplina báscia.", benefits: ["10.000 Monedas", "Skin Ronin", "Kit de Inicio"], legalText: "Tier 1 - Acceso inmediato." },
                { title: "SAMURAI", price: "Medio", img: samuraiMedium, color: "#F48FB1", glow: "rgba(244,143,177,0.5)", description: "Honor y fuerza.", benefits: ["50.000 Monedas", "Skin Samurai Ancestral", "Kit Guerrero", "Prioridad Media"], legalText: "Tier 2 - Favorito de la comunidad." },
                { title: "SHOGUN", price: "Premium", img: samuraiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Poder divino.", benefits: ["200.000 Monedas", "Armadura Shogun Única", "Tag Dorado", "Discord VIP"], legalText: "Tier 3 - Máximo estatus." },
            ]
        },
        social: {
            title: "La hermandad",
            accentWord: "se encuentra",
            subtitle: "Encuéntranos en nuestras redes"
        }
    }
};
