import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

export default function AboutMe() {
  const [listButton, setListButton] = useState<string[]>(["aboutMe"]);

  function closeButtons(button: string) {
    const list = listButton.filter((element, index) => element !== button);
    setListButton(list);
  }

  return (
    <section className="section min-h-[55vh]" id="aboutMe">
      <h2 className="section-title"># Sobre mim</h2>
      <ul className="w-full h-full col-center gap-6">
        <li className="about-me-li">
          <button
            className="about-me-li-btn"
            onClick={(event) => {
              event.preventDefault();
              return listButton.includes("aboutMe")
                ? closeButtons("aboutMe")
                : setListButton([...listButton, "aboutMe"]);
            }}
          >
            <h3 className="text-lg font-semibold">Sobre mim</h3>
            <FaAngleRight
              className={listButton.includes("aboutMe") ? "hidden" : "flex"}
            />
            <FaAngleDown
              className={listButton.includes("aboutMe") ? "flex" : "hidden"}
            />
          </button>
          <p
            className={
              listButton.includes("aboutMe") ? "about-me-li-p" : "hidden"
            }
          >
            Olá, meu nome é Andressa e tenho 19 anos. Sempre fui apaixonada por
            matemática e jogos de lógica, o que me levou a desenvolver
            habilidades em resolução de problemas e raciocínio crítico. Gosto de
            estar sempre aprendendo coisas novas, seja através de leituras,
            cursos ou experiências práticas. Sou natural de Angra dos Reis/RJ e
            sou uma pessoa dedicada e empenhada em minhas atividades. Estou
            sempre em busca de novas oportunidades para aplicar meu conhecimento
            e aprimorar minhas habilidades. Acredito que o aprendizado contínuo
            é essencial para o desenvolvimento pessoal e profissional, e por
            isso estou sempre em busca de novos desafios e oportunidades de
            crescimento.
          </p>
        </li>
        <li className="about-me-li">
          <button
            className="about-me-li-btn"
            onClick={(event) => {
              event.preventDefault();
              return listButton.includes("professional")
                ? closeButtons("professional")
                : setListButton([...listButton, "professional"]);
            }}
          >
            <h3 className="text-lg font-semibold">Vida profissional</h3>
            <FaAngleRight
              className={
                listButton.includes("professional") ? "hidden" : "flex"
              }
            />
            <FaAngleDown
              className={
                listButton.includes("professional") ? "flex" : "hidden"
              }
            />
          </button>
          <p
            className={
              listButton.includes("professional") ? "about-me-li-p" : "hidden"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
            distinctio nam illo omnis sit? Pariatur ratione optio quos
            accusantium fuga corporis assumenda corrupti aperiam debitis, itaque
            iure, doloribus dolores!
          </p>
        </li>
        <li className="about-me-li">
          <button
            className="about-me-li-btn"
            onClick={(event) => {
              event.preventDefault();
              return listButton.includes("like")
                ? closeButtons("like")
                : setListButton([...listButton, "like"]);
            }}
          >
            <h3 className="text-lg font-semibold">O que gosto🤩🤩🤩</h3>
            <FaAngleRight
              className={listButton.includes("like") ? "hidden" : "flex"}
            />
            <FaAngleDown
              className={listButton.includes("like") ? "flex" : "hidden"}
            />
          </button>
          <p
            className={listButton.includes("like") ? "about-me-li-p" : "hidden"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            illum illo facere excepturi beatae, pariatur sint dolores! Autem,
            saepe optio. Nostrum ipsum tenetur perferendis voluptates, modi ad
            est tempore ullam.
          </p>
        </li>
        <li className="about-me-li">
          <button
            className="about-me-li-btn"
            onClick={(event) => {
              event.preventDefault();
              return listButton.includes("dislike")
                ? closeButtons("dislike")
                : setListButton([...listButton, "dislike"]);
            }}
          >
            <h3 className="text-lg font-semibold">O que não gosto😒😒😒</h3>
            <FaAngleRight
              className={listButton.includes("dislike") ? "hidden" : "flex"}
            />
            <FaAngleDown
              className={listButton.includes("dislike") ? "flex" : "hidden"}
            />
          </button>
          <p
            className={
              listButton.includes("dislike") ? "about-me-li-p" : "hidden"
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            illum illo facere excepturi beatae, pariatur sint dolores! Autem,
            saepe optio. Nostrum ipsum tenetur perferendis voluptates, modi ad
            est tempore ullam.
          </p>
        </li>
      </ul>
    </section>
  );
}
