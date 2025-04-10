import { Navigation } from "../components/nav";
import Link from "next/link";
import aboutImage from '../../public/aboutme.jpeg'
import Image from "next/image";
import { AnimatedTestimonialsDemo } from "../components/photosReady";

export default function about() {
    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen h-full overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Navigation />
            <div className="max-w-2xl pt-24 pb-10 md:py-24 mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Sobre Mim
                </h2>
            </div>
            <div className="w-full h-px bg-zinc-800" />
            <div className="flex flex-col md:flex-row w-screen h-full">
                <div className="w-full md:w-1/2 h-screen">
                    <div className="p-8 relative h-full">
                        <Image className="absulute object-cover p-4 md:p-10" layout="fill" src={aboutImage} alt="aboutImage" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-[90vh] p-3 md:p-8 text-justify text-white text-lg md:text-xl">
                    <strong>
                        Olá, meu nome é Yasmin Souza, sou estudante universitária na Escola Superior de Técnologia e Gestão de Águeda - Universidade de Aveiro.
                    </strong>
                    Estou a 6 anos no mercado de trabalho e possuo 2 anos de experiência na área administrativa. Minha
                    trajetória profissional tem sido enriquecedora e importante para aprimorar minhas habilidades técnicas.
                    Acredito no poder do conhecimento e por isso a busca por aprimoramento deve ser constante. Atualmente,
                    estou cursando minha 2ª licenciatura e não pretendo parar de aprender.
                    Além do meu lado profissional, valorizo o tempo com a minha família e pessoas que amo, desportos na
                    natureza e viajar pelo mundo, estas paixões me levaram a mudar de continente em 2022. Acredito que a
                    busca por conhecimento e a curiosidade por ver o mundo pode nos levar a lugares incríveis.
                    <br />
                    <br />
                    <Link href="https://youtu.be/Bwgzy1FGDo8?feature=shared">
                        Vídeo CV <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <br /><br />
                </div>
            </div>
            <div className="max-w-2xl pt-24 pb-10 md:py-24 mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Competências Transversais
                </h2>
            </div>
            <div className="w-full h-px bg-zinc-800" />
            <div className="p-3 md:p-8 text-justify text-white text-lg md:text-xl">
                Trabalhei em equipas na qual era preciso me reportar a diversos superiores o que me proporcionou o
                desenvolvimento de comunicação eficaz e transmitir informações de maneira adequada a cada um deles.
                Em meus estágios era necessário ter um comportamento proativo devido ao grande volume de tarefas a
                serem desempenhadas durante o dia, o que também me ajudou a adquirir habilidades de gestão de tempo
                e tomadas de decisão.
                Devido a minha mudança de país em 2022 aprimorei ainda mais minha habilidade de adaptabilidade e
                responsabilidade. Atualmente me sinto preparada pra encarar novos desafios e aprendizados que
                eventualmente irão aparecer e meu percurso académico e profissional.
            </div>
            <div className="w-screen">
                <AnimatedTestimonialsDemo />
            </div>
            <div className="max-w-2xl pt-24 pb-10 md:py-24 mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Hobbies
                </h2>
            </div>
            <div className="w-full h-px bg-zinc-800" />
            <div className="p-3 md:p-8 text-justify text-white text-lg md:text-xl">
                Meus hobbies refletem meu amor por desporto, família e viajar. Sou apaixonado por esportes que me permitem estar em contato direto com a natureza. Também gosto de passar tempo com minha família e as pessoas que amo. Além disso, viajar e explorar o mundo é uma das coisas que mais me motivam, pois gosto da sensação de liberdade que isso me traz.
            </div>
        </div>
    );

}
