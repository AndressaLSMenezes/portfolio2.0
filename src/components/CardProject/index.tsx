import projects, { IProject } from "@/utils/projectData";
import Link from "next/link";

type IProps = {
  project: IProject;
};

export default function CardProject({ project }: IProps) {
  return (
    <li
      className="w-11/12 sm:w-7/12 max-w-[250px] h-80 bg-transparent group perspective row-center justify-center"
    >
      <div className="card-div">
        <div className="card-div-front">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <div className="row-center flex-wrap gap-2 py-1">
            {project.tasks.map((task, taskIndex) => (
              <span
                key={taskIndex}
                className="bg-brand-100 p-1.5 rounded text-sm text-slate-200"
              >
                {task}
              </span>
            ))}
          </div>
          <p>{project.description}</p>
        </div>

        <div className="card-div-back">
          <div className="w-4/6 h-4/6 col-center justify-around">
            {project.demo && (
              <Link
                className="card-div-link"
                href={project.demo}
                target="_blank"
                rel="noopener"
              >
                Demo
              </Link>
            )}

            <Link
              className="card-div-link"
              href={project.repository}
              target="_blank"
              rel="noopener"
            >
              Repositorio
            </Link>

            {project.document && (
              <Link
                className="card-div-link"
                href={project.document}
                target="_blank"
                rel="noopener"
              >
                Documentação
              </Link>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
