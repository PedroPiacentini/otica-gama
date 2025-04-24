import { FiAward, FiClock, FiCpu, FiEye, FiTool} from "react-icons/fi";

import { IBenefit } from "@/types"
import { IoMdGlasses } from "react-icons/io";

export const benefits: IBenefit[] = [
    {
        title: "Serviços de Qualidade",
        description: "Na Ótica Gama, oferecemos soluções rápidas e eficientes para suas necessidades visuais, com atendimento personalizado e produtos de alta qualidade.",
        bullets: [
            {
                title: "Montagem de Óculos em 1 Hora",
                description: "Receba seus óculos prontos em até 1 hora, com precisão e cuidado.",
                icon: <FiClock size={26} />
            },
            {
                title: "Conserto de Óculos",
                description: "Consertamos armações, trocamos hastes, lentes e muito mais. Deixe seus óculos como novos!",
                icon: <FiTool size={26} />
            },
            {
                title: "Diversos Modelos de Óculos",
                description: "Temos uma grande variedade de armações e lentes para todos os estilos e necessidades.",
                icon: <IoMdGlasses size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Excelência em Cada Detalhe",
        description: "Na Ótica Gama, unimos tradição, expertise e tecnologia para oferecer o melhor cuidado visual. Confie em quem tem experiência e qualidade!",
        bullets: [
            {
                title: "Especialista VARILUX",
                description: "Oferecemos lentes VARILUX, as mais avançadas e confortáveis do mercado, para uma visão perfeita.",
                icon: <FiEye size={26} />
            },
            {
                title: "25 Anos de Mercado",
                description: "Desde 1999, cuidando da visão dos nossos clientes com dedicação e profissionalismo.",
                icon: <FiAward size={26} />
            },
            {
                title: "Tecnologia de Ponta",
                description: "Utilizamos as mais recentes tecnologias para garantir precisão e qualidade em nossos serviços.",
                icon: <FiCpu size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    }
]
