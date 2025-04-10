import Link from "next/link";
import React from "react";
import Particles from "./components/particles";


const navigation = [
  { name: "Sobre", href: "/about" },
  { name: "Percursos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
  { name: "Download CV", href: "/YasminCV.pdf" },
];

export default function Home() {
  return (
    <div className="home flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Yasmin Souza
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Estudante universitária na Escola Superior de Técnologia e Gestão de
          Águeda - Universidade de Aveiro
        </h2>
      </div>
    </div>
  );

}
