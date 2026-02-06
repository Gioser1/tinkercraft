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
import videoSamurai from "../assets/samurai/video-samurai.mp4";
import samuraiHonor from "../assets/samurai/samurai-honor.png";
import samuraiDiscipline from "../assets/samurai/samurai-discipline.png";
import samuraiRespect from "../assets/samurai/samurai-respect.png";
import samuraiHorizontalBg from "../assets/samurai/samurai-horizontal-bg.png";
import samuraiBasic from "../assets/samurai/samurai-basic.png";
import samuraiMedium from "../assets/samurai/samurai-medium.png";
import samuraiPro from "../assets/samurai/samurai-pro.png";

export interface RankTheme {
    primary: string;
    secondary: string;
    accent: string;
    heroBg: string;
    glow: string;
}

export interface BenefitItem {
    icon: any;
    title: string;
    description: string;
}

export interface NarrativeItem {
    chapter: string;
    word: string;
    image: string;
    description: string;
}

export interface Tier {
    title: string;
    price: string;
    img: string;
    color: string;
    glow: string;
    description: string;
    benefits: string[];
    legalText: string;
}

export interface RankConfig {
    marquee: string;
    theme: RankTheme;
    hero: {
        title: string;
        subtitle: string;
        video: string;
        buttonText: string;
    };
    benefits: {
        title: string;
        subtitle: string;
        items: BenefitItem[];
    };
    narrative: NarrativeItem[];
    discount: {
        title: string;
        subtitle: string;
        placeholder: string;
        buttonText: string;
        appliedText: string;
        successText: string;
    };
    finalCTA: {
        title: string;
        accentWord: string;
        bgImage: string;
        swal: {
            title: string;
            benefitsTitle: string;
            legalTitle: string;
            legalText: string;
            chatbotIcon: string;
            chatbotText: string;
            confirmText: string;
            continueText: string;
            successTitle: string;
            successText: string;
        };
        tiers: Tier[];
    };
    social: {
        title: string;
        accentWord: string;
        subtitle: string;
    };
}

export const RANK_CONFIGS: Record<string, RankConfig> = {
    KAMI: {
        marquee: "神 KAMI 神 • PODER CELESTIAL • 天上 DIVINO 天上",
        theme: {
            primary: "#EE8D9E",
            secondary: "#FFD700",
            accent: "rgba(138, 43, 226, 0.7)",
            heroBg: "#8B1E1E",
            glow: "rgba(238, 141, 158, 0.4)"
        },
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
                { title: "ESPÍRITU", price: "Básico", img: kamiBasic, color: "#EE8D9E", glow: "rgba(238, 141, 158, 0.4)", description: "Inicia tu ascenso divino.", benefits: ["25.000 Monedas", "Aura Rosa", "Kit Inicial Kami"], legalText: "Tier 1 - Acceso inmediato." },
                { title: "DEIDAD", price: "Medio", img: kamiMedium, color: "#fff", glow: "rgba(255, 255, 255, 0.4)", description: "Poder celestial puro.", benefits: ["100.000 Monedas", "Katana Divina", "Kit Deidad", "Vuelo en Lobby"], legalText: "Tier 2 - Favorito de la comunidad." },
                { title: "KAMI-SAMA", price: "Premium", img: kamiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Omnipotencia total.", benefits: ["500.000 Monedas", "Skin Kami Única", "Tag Celestial", "Prioridad Máxima"], legalText: "Tier 3 - Máximo estatus." },
            ]
        },
        social: {
            title: "Comunidad",
            accentWord: "Celestial",
            subtitle: "Conecta con los Kami"
        }
    },
    SAMURAI: {
        marquee: "侍 SAMURAI 侍 • HONOR ETERNO • 武士道 BUSHIDO 武士道",
        theme: {
            primary: "#8B1E1E",
            secondary: "#F4C41A",
            accent: "rgba(255, 215, 0, 0.4)",
            heroBg: "#8B1E1E",
            glow: "rgba(139, 30, 30, 0.4)"
        },
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
                chatbotText: "Antes de procesar tu donación, el Shogun requiere tu confirmación: <br><br> <b>¿Has leído el aviso legal y confirmas que tienes autorización total para realizar este pago?</b>",
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
    },
    DAIMYO: {
        marquee: "大名 DAIMYO 大名 • SEÑOR DE LA GUERRA • 将軍 SHOGUN 将軍",
        theme: {
            primary: "#EE8D9E",
            secondary: "#FFD700",
            accent: "rgba(138, 43, 226, 0.7)",
            heroBg: "#8B1E1E",
            glow: "rgba(238, 141, 158, 0.4)"
        },
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
                { icon: AutoAwesome, title: "Aura de Liderazgo", description: "Efectos visuales dignos de un señor" },
            ]
        },
        narrative: [
            { chapter: "Título I — El Ascenso", word: "Estrategia", image: imgDivinidad, description: "Desde las sombras emerge el líder supremo" },
            { chapter: "Título II — La Conquista", word: "Dominio", image: imgIluminacion, description: "Cada territorio reclamado fortalece tu legado" },
            { chapter: "Título III — El Imperio", word: "Eternidad", image: imgOmnivision, description: "Tu nombre resuena en cada rincón del servidor" },
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
                legalText: "Esta es una donación voluntaria. El imperio no acepta reembolsos una vez establecido el pacto.",
                chatbotIcon: "👑",
                chatbotText: "El consejo de ancianos requiere tu juramento: <br><br><b>¿Confirmas que posees la autoridad (y los permisos) para establecer este pacto imperial?</b>",
                confirmText: "Bajo mi honor de señor, lo confirmo.",
                continueText: "ESTABLECER PACTO",
                successTitle: "Imperio Establecido",
                successText: "Tus dominios te aguardan..."
            },
            tiers: [
                { title: "HATAMOTO", price: "Básico", img: kamiBasic, color: "#EE8D9E", glow: "rgba(238, 141, 158, 0.4)", description: "Vasallo de confianza.", benefits: ["30.000 Monedas", "Estandarte Daimyo", "Kit Noble"], legalText: "Tier 1 - Inicio del dominio." },
                { title: "SHOGUNATO", price: "Medio", img: kamiMedium, color: "#fff", glow: "rgba(255, 255, 255, 0.4)", description: "Autoridad militar.", benefits: ["120.000 Monedas", "Armadura Señorial", "Kit Comandante", "Acceso Salón de Guerra"], legalText: "Tier 2 - Poder consolidado." },
                { title: "EMPERADOR", price: "Premium", img: kamiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Soberanía absoluta.", benefits: ["600.000 Monedas", "Corona Imperial", "Tag Dorado", "Control Total"], legalText: "Tier 3 - Dominio supremo." },
            ]
        },
        social: {
            title: "Consejo",
            accentWord: "Daimyo",
            subtitle: "Planifica tus conquistas"
        }
    },
    SENSEI: {
        marquee: "先生 SENSEI 先生 • SABIDURÍA ANCESTRAL • 師匠 MAESTRO 師匠",
        theme: {
            primary: "#EE8D9E",
            secondary: "#FFD700",
            accent: "rgba(138, 43, 226, 0.7)",
            heroBg: "#8B1E1E",
            glow: "rgba(238, 141, 158, 0.4)"
        },
        hero: {
            title: "SENSEI",
            subtitle: "Conocimiento Ancestral • 先生",
            video: videoHero,
            buttonText: "TRASCENDER"
        },
        benefits: {
            title: "SABIDURÍA MILENARIA",
            subtitle: "El conocimiento de los antiguos a tu servicio",
            items: [
                { icon: AutoFixHigh, title: "Dominio Técnico", description: "Comandos secretos revelados" },
                { icon: Public, title: "Palabra Sagrada", description: "Tu voz resuena en todo el servidor" },
                { icon: AutoAwesome, title: "Aura de Sabiduría", description: "Presencia distinguida en todo momento" },
                { icon: Flare, title: "Iluminación", description: "Acceso a conocimientos ocultos" },
                { icon: AutoGraph, title: "Maestría Plena", description: "Habilidades máximas desbloqueadas" },
            ]
        },
        narrative: [
            { chapter: "Lección I — El Despertar", word: "Conocimiento", image: samuraiHonor, description: "El primer paso hacia la verdadera sabiduría" },
            { chapter: "Lección II — La Práctica", word: "Disciplina", image: samuraiDiscipline, description: "Años de estudio condensados en un instante" },
            { chapter: "Lección III — La Iluminación", word: "Maestría", image: samuraiRespect, description: "Cuando el estudiante se convierte en maestro" },
        ],
        discount: {
            title: "Manuscrito Antiguo",
            subtitle: "Desvela el código ancestral para obtener la bendición del sabio",
            placeholder: "Código del Maestro",
            buttonText: "Revelar",
            appliedText: "Revelado",
            successText: "El conocimiento antiguo ha sido desbloqueado."
        },
        finalCTA: {
            title: "ABRAZA LA",
            accentWord: "SABIDURÍA",
            bgImage: samuraiHorizontalBg,
            swal: {
                title: "ACEPTA LA ENSEÑANZA",
                benefitsTitle: "Conocimientos Otorgados",
                legalTitle: "Juramento del Discípulo:",
                legalText: "Esta donación es un compromiso sagrado. El conocimiento compartido no puede ser devuelto.",
                chatbotIcon: "🎓",
                chatbotText: "El maestro te observa con atención: <br><br><b>¿Confirmas que estás listo (con autorización completa) para recibir estas enseñanzas?</b>",
                confirmText: "Estoy preparado, maestro.",
                continueText: "INICIAR APRENDIZAJE",
                successTitle: "Enseñanza Iniciada",
                successText: "El camino del maestro se abre ante ti..."
            },
            tiers: [
                { title: "APRENDIZ", price: "Básico", img: samuraiBasic, color: "#EE8D9E", glow: "rgba(238, 141, 158, 0.4)", description: "Inicio del camino.", benefits: ["20.000 Monedas", "Túnica de Estudiante", "Kit Aprendiz"], legalText: "Tier 1 - Primera lección." },
                { title: "DISCÍPULO", price: "Medio", img: samuraiMedium, color: "#fff", glow: "rgba(255, 255, 255, 0.4)", description: "Conocimiento profundo.", benefits: ["80.000 Monedas", "Bastón de Sabio", "Kit Discípulo", "Sala de Meditación"], legalText: "Tier 2 - Evolución continua." },
                { title: "GRAN MAESTRO", price: "Premium", img: samuraiPro, color: "#FFD700", glow: "rgba(255, 215, 0, 0.6)", description: "Sabiduría absoluta.", benefits: ["400.000 Monedas", "Manto Dorado", "Tag de Maestro", "Acceso Santuario"], legalText: "Tier 3 - Maestría total." },
            ]
        },
        social: {
            title: "Dojo",
            accentWord: "Virtual",
            subtitle: "Comparte tus enseñanzas"
        }
    }
};
