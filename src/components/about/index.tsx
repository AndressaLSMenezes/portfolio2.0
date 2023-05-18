import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import NextSection from "../nextSection";

export default function AboutMe() {
  return (
    <section className="section h-[90vh]" id="aboutMe">
      <h2 className="section-title"># Sobre mim</h2>

      <p className="about-me-p">
        Olá, meu nome é Andressa e tenho 19 anos. Sempre fui apaixonada por matemática e jogos de lógica, o que me levou a desenvolver habilidades em resolução de problemas e raciocínio crítico. Gosto de estar sempre aprendendo coisas novas, seja através de leituras, cursos ou experiências práticas. Sou natural de Angra dos Reis/RJ e sou uma pessoa dedicada e empenhada em minhas atividades. Estou sempre em busca de
        novas oportunidades para aplicar meu conhecimento e aprimorar minhas habilidades. Acredito que o aprendizado contínuo é essencial para o desenvolvimento pessoal e profissional, e por isso estou sempre em busca de novos desafios e oportunidades de crescimento.
      </p>
      <NextSection nextSection="#skills" />
    </section>
  );
}
