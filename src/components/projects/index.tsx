import projects from "@/utils/projectData";
import Link from "next/link";
import CardProject from "../CardProject";

export default function Projects() {
  return (
    <section id="projects" className="section justify-between">
      <div className="w-full h-auto col-center gap-7">
        <h2 className="section-title"># Projetos</h2>
        <ul className="row-center w-full flex-wrap gap-10 justify-center">
          {projects ? (
            projects.map((project, index) => {
              return <CardProject key={index} project={project} />;
            })
          ) : (
            <p>Em Andamento</p>
          )}
          <li className="w-11/12 sm:w-7/12 max-w-[250px] h-96 bg-transparent border-brand-500 border-2 row-center justify-center py-2 rounded-lg">
            <Link
              href={"https://github.com/AndressaLSMenezes"}
              className="w-full h-full row-center justify-center font-bold text-2xl hover:text-brand-500"
              target="_blank"
              rel="noopener"
            >
              Veja Mais
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
