import kenziehub from "@/assets/projects/kenziehub.png";
import kimoveis from "@/assets/projects/kimoveis.png";
import { StaticImageData } from "next/image";
import weartake from "@/assets/projects/projetoM1.png";
import nuKenzie from "@/assets/projects/nu-kenzie.png";
import burguerKenzie from "@/assets/projects/burguerKenzie.png";
import m4S3 from "@/assets/projects/m4-s3.png";
import m4S5 from "@/assets/projects/m4-s5.png";

export interface IProject {
  image: StaticImageData;
  title: string;
  description: string;
  repository: string;
  demo?: string;
  document?: string;
  tasks: string[];
  stack?: string;
}

const projects: IProject[] = [
  {
    image: kenziehub,
    title: "KenzieHub",
    description:
      "Um guia para seus estudos. Você pode registrar as tecnologias que aprendeu, avaliar seu nível de conhecimento e acompanhar seu progresso.",
    repository: "https://github.com/AndressaLSMenezes/KenzieHub",
    demo: "https://kenzie-hub-kappa-seven.vercel.app/",
    tasks: ["NextJS", "TypeScript", "Tailwind"],
  },
  {
    image: kimoveis,
    title: "KImoveis",
    description:
      "Criada com o propósito de facilitar a gestão de imobiliárias.",
    repository: "https://github.com/AndressaLSMenezes/KImoveis",
    tasks: ["TypeScript", "NodeJS", "ExpressJS", "TypeORM", "PostgreSQL"],
  },
  {
    title: "Projeto Final Do Modulo 1",
    image: weartake,
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m1-entrega-capstone-ecommerce-AndressaLSMenezes",
    demo: "https://kenzie-academy-brasil-developers.github.io/m1-entrega-capstone-ecommerce-AndressaLSMenezes/",
    description:
      "É um e-commerce de roupas desenvolvido para o projeto final do modulo 1 usando somente HTML, CSS e JS sem nehum framework.",
    tasks: ["HTML", "CSS3", "JavaScript"],
    stack: "FrontEnd",
  },
  {
    title: "Nu Kenzie",
    image: nuKenzie,
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Andressa",
    demo: "https://react-entrega-s1-template-nu-kenzie-andressa-nu-kenz-ejfxzwmh3.vercel.app/",
    description:
      "O NuKenzie serve para você fazer o controle de sua financias. Esse é meu primeiro projeto utilizando o React. ",
    tasks: ["HTML", "CSS3", "JavaScript", "React"],
    stack: "FrontEnd",
  },
  {
    title: "Burguer Kenzie",
    image: burguerKenzie,
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-hamburgueria-da-kenzie-Andressa",
    demo: "https://hamburgueria-three-plum.vercel.app/",
    description:
      "É uma simulação delivery de fast-food onde é possível pesquisar o produto por categoria e nome, além de adicionar ao carrinho e receber o valor total da compra",
    tasks: ["HTML", "CSS3", "JavaScript", "React"],

    stack: "FrontEnd",
  },
  {
    title: "Produtos e Categorias",
    image: m4S3,
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m4-entrega-sprint-3-andressa",
    demo: "",
    description:
      "Um serviço de back-end responsável por gerenciar produtos e suas categorias",
    tasks: ["JavaScript", "NodeJS", "expressJS", "ORM", "SQL", "PostgreSQL"],

    stack: "BackEnd",
  },
];

export default projects;
