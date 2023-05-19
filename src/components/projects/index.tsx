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
        </ul>
      </div>
    </section>
  );
}
