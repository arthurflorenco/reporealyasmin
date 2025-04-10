import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";




export const revalidate = 60;
export default async function ProjectsPage() {


    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Percurso Académico
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Alguns cursos que eu fiz ao longo do tempo.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link href='https://www.ua.pt/pt/curso/66'>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >
                                    Licenciatura em Secretariado e
                                    Comunicação Empresarial - (2024 - presente)
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Escola Superior de Tecnologia e Gestão de Águeda -
                                    Universidade de Aveiro (Principais diciplinas até o
                                    momento: Tec. de Secretáriado. - Aplicações de
                                    Escritório Eletrônico. - Inglês Aplicado ao secretariado.
                                    Português Empresarial)
                                </p>
                                {/*
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
                 */}
                            </article>
                        </Link>
                    </Card>
                    <Card>
                        <Link href=''>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >
                                    Bacharelado em Recursos Humanos (2020 -
                                    2023)
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Instituição Anheguera
                                </p>
                                {/*
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
                 */}
                            </article>
                        </Link>
                    </Card>
                </div>
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Percurso Profissional
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Alguns lugares que trabalhei.
                    </p>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />
                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        <Link href='https://www.intermarche.pt/'>
                            <Card>
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h2
                                        id="featured-post"
                                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                    >
                                        INTERMARCHÉ
                                    </h2>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        Função: Operadora de loja
                                        (2023-2024) - 1 ano e 5 meses full time
                                    </p>
                                    {/*
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
                 */}
                                </article>
                            </Card>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Link href='https://saaeangra.com.br/'>
                            <Card>
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h2
                                        id="featured-post"
                                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                    >
                                        SAAE - SERVIÇO AUTÔNOMO DE
                                        ÁGUA E ESGOTO
                                    </h2>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        Função: Estágio curricular (organização
                                        documental/suporte administrativo)
                                        (2021-2022) - 8 meses full time
                                    </p>
                                    {/*
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
                 */}
                                </article>
                            </Card>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <Link href='https://angra.rj.gov.br/secretarias/secretaria-de-saude'>
                            <Card>
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h2
                                        id="featured-post"
                                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                    >
                                        FUSAR - FUNDAÇÃO DE SAÚDE DE
                                        ANGRA DOS REIS
                                    </h2>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        Função: Estágio Curricular (suporte administrativo)
                                        (2019-2020) - 9 meses part time
                                    </p>
                                    {/*
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
                 */}
                                </article>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
