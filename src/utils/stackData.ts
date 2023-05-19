import css from "@/assets/techs/css.svg";
import git from "@/assets/techs/git.svg";
import html from "@/assets/techs/html.svg";
import javascript from "@/assets/techs/javascript.svg";
import nextjs from "@/assets/techs/nextjs.svg";
import node from "@/assets/techs/node.svg";
import postgresql from "@/assets/techs/postgresql.svg";
import python from "@/assets/techs/python.svg";
import react from "@/assets/techs/react.svg";
import tailwind from "@/assets/techs/tailwind.svg";
import typescript from "@/assets/techs/typescript.svg";
import django from "@/assets/techs/django.svg";

export interface ISkill {
  title: string;
  subTitle: string;
  description: string;
  img: string;
}

export const skillsData: ISkill[] = [
  {
    title: "HTML",
    subTitle: "Linguagem de Marcação de Hipertexto",
    description:
      "Eu sou experiente em HTML, com um domínio avançado da linguagem. Como desenvolvedora, eu utilizo HTML para criar a estrutura básica de páginas da web, organizando o conteúdo de forma semântica e eficiente. Minha experiência me permite utilizar as tags, elementos e atributos de forma assertiva, garantindo a compatibilidade com diferentes navegadores e dispositivos. Estou familiarizada com as melhores práticas de desenvolvimento e posso criar layouts responsivos e acessíveis, proporcionando uma ótima experiência de usuário.",
    img: html,
  },
  {
    title: "CSS",
    img: css,
    subTitle: "Folhas de Estilo em Cascata",
    description:
      "Tenho conhecimento avançado na linguagem. Como estilista da web, eu utilizo CSS para dar vida às páginas HTML, controlando a aparência e o layout. Tenho habilidades sólidas em seletores, propriedades e valores do CSS, o que me permite criar estilos personalizados e consistentes em diferentes dispositivos e navegadores. Além disso, estou familiarizada com conceitos avançados como flexbox e animações, que me permitem criar designs modernos e interativos. Com minha experiência, posso transformar elementos HTML em interfaces visuais atrativas e funcionais.",
  },
  {
    title: "JavaScript",
    img: javascript,
    subTitle: "Linguagem versátil para criar interatividade na web.",
    description:
      "Como desenvolvedora JavaScript, possuo amplo conhecimento na linguagem. Utilizo JavaScript para adicionar interatividade e funcionalidade dinâmica às páginas web, dominando conceitos como manipulação de DOM, eventos, arrays e objetos. Além disso, tenho habilidades avançadas em bibliotecas e frameworks populares, como React, para construir aplicativos web robustos. Estou familiarizada com programação assíncrona, Promises e async/await, o que me permite lidar eficientemente com chamadas de API e operações complexas. Com minha experiência, crio experiências interativas e fluidas para os usuários.",
  },
  {
    title: "TypeScript",
    img: typescript,
    subTitle: "Tipagem estática para JavaScript aprimorado.",
    description:
      "Possuo amplo conhecimento na linguagem. Utilizo o TypeScript para criar aplicativos web robustos e escaláveis. Através da tipagem estática, consigo detectar erros de código antes da execução, garantindo maior segurança e eficiência no desenvolvimento. Estou familiarizada com recursos avançados, como interfaces, tipos genéricos e decoradores, permitindo um código mais expressivo e reutilizável. Com minha experiência, posso criar aplicações JavaScript modernas e de alta qualidade com confiança.",
  },
  {
    title: "NodeJs",
    img: node,
    subTitle: "Ambiente de tempo de execução JavaScript de alto desempenho.",
    description:
      "Eu sou uma desenvolvedora experiente em Node.js, com amplo domínio da plataforma. Utilizo o Node.js para criar aplicativos server-side eficientes e escaláveis, utilizando frameworks como Express e Nest.js. Tenho experiência em manipulação de eventos e programação assíncrona, garantindo um alto desempenho em minhas aplicações. Além disso, possuo conhecimentos em bancos de dados, como MySQL ou PostgreSQL, para criar sistemas de armazenamento.",
  },
  {
    title: "React",
    img: react,
    subTitle:
      "biblioteca JavaScript para criação de interfaces de usuário interativas e reutilizáveis.",
    description:
      "Tenho habilidades sólidas em criar interfaces de usuário interativas e responsivas com componentes reutilizáveis. Domino conceitos fundamentais do React, como estados, propriedades e ciclos de vida dos componentes, permitindo a construção de aplicações web dinâmicas e eficientes. Utilizo bibliotecas populares como React Router e Axios para navegação e integração com APIs externas. Mantenho-me atualizada com as melhores práticas e padrões do setor, buscando constantemente aprender e aprimorar minhas habilidades em React.",
  },
  {
    title: "NextJs",
    img: nextjs,
    subTitle: "Framework React para aplicativos web modernos e eficientes.",
    description:
      "Como desenvolvedora com conhecimento básico a intermediário em Next.js, estou aprimorando minhas habilidades diariamente. Compreendo os conceitos fundamentais do Next.js, como roteamento dinâmico, geração estática e servidor de renderização, e estou aprendendo a utilizar suas funcionalidades avançadas, como API Routes e Server-Side Rendering. Estou empolgada em explorar as vantagens do Next.js, como o aumento no desempenho e a otimização para SEO, para criar aplicações web modernas e eficientes.",
  },
  {
    title: "PostgreSQL",
    img: postgresql,
    subTitle: "Poderoso sistema de gerenciamento de banco de dados relacional.",
    description:
      "Como desenvolvedora com conhecimento básico a intermediário em PostgreSQL, estou progredindo constantemente em minha jornada de aprendizado. Tenho uma compreensão sólida dos conceitos fundamentais do PostgreSQL, como criação de tabelas, consultas SQL e manipulação de dados. Estou expandindo meu conhecimento para incluir recursos avançados, como criação de índices, otimização de consultas e gerenciamento de transações. Estou entusiasmada para utilizar o poder do PostgreSQL para desenvolver e gerenciar bancos de dados robustos e eficientes para aplicações web.",
  },
  {
    title: "Git",
    img: git,
    subTitle:
      "Sistema de controle de versão distribuído para projetos de software.",
    description:
      "Estou continuamente aprimorando minha habilidade de controle de versão. Possuo uma compreensão sólida dos conceitos fundamentais do Git, como commits, branches e merge. Estou avançando no meu conhecimento ao explorar recursos mais avançados, como rebasing, cherry-picking e resolução de conflitos. Estou ansiosa para aproveitar ao máximo o Git, colaborando de forma eficiente com equipes de desenvolvimento, gerenciando branches de forma eficaz e mantendo um histórico de alterações preciso e organizado em meus projetos.",
  },
  {
    title: "TailwindCSS",
    img: tailwind,
    subTitle: "Framework utilitário para desenvolvimento rápido de interfaces.",
    description:
      "Posso criar interfaces modernas e responsivas de forma eficiente. Com o uso do extenso conjunto de classes pré-definidas do Tailwind, posso estilizar rapidamente elementos HTML e criar layouts flexíveis. Tenho conhecimento em personalização do tema do Tailwind, criação de componentes reutilizáveis e utilização de utilitários para estilos responsivos. Estou sempre atualizada com as atualizações e recursos do Tailwind, buscando implementar as melhores práticas de design e tornar minhas interfaces visualmente atraentes e amigáveis aos usuários.",
  },
  {
    title: "Python",
    img: python,
    subTitle:
      "Linguagem de programação de alto nível, versátil e de fácil leitura.",
    description:
      "Estou expandindo minhas habilidades em diferentes áreas. Tenho experiência sólida no desenvolvimento web com Django, onde posso criar aplicações robustas e escaláveis. Além disso, possuo conhecimento básico no uso do framework Pygame para o desenvolvimento de jogos simples. Estou animada em explorar mais recursos avançados do Python, como programação assíncrona e manipulação de dados com bibliotecas populares, a fim de aprimorar minhas habilidades e desenvolver soluções criativas e funcionais.",
  },
  {
    title: "Django",
    img: django,
    subTitle:
      "Framework web em Python para criar aplicações robustas e escaláveis.",
    description:
      "Tenho habilidades sólidas no desenvolvimento de APIs REST completas. Posso criar uma CRUD de usuários ou APIs com complexos relacionamentos entre modelos, garantindo uma arquitetura bem estruturada e um design de API eficiente. Utilizando as funcionalidades do Django REST Framework, posso implementar autenticação, validação de dados, serialização e roteamento de forma eficaz. Estou sempre atualizada com as melhores práticas de desenvolvimento e padrões de design para entregar APIs robustas, seguras e de alto desempenho.",
  },
];
