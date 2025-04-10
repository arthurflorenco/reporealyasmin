"use client";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { PropsWithChildren } from "react";

type MouseEvent = React.MouseEvent<HTMLDivElement>;

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  // Função para lidar com o movimento do mouse
  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left); // Calcula a posição X relativa dentro do elemento
    mouseY.set(clientY - top);  // Calcula a posição Y relativa dentro do elemento
  }

  // Criando o efeito de máscara com gradiente dinâmico
  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage }; // Garantindo compatibilidade com o WebKit

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600"
    >
      {/* Efeito de fundo com máscara */}
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {/* Conteúdo do card */}
      {children}
    </div>
  );
};
 