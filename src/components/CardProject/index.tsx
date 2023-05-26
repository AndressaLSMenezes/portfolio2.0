import { IProject } from "@/utils/projectData";
import Link from "next/link";
import Image from "next/image";

type IProps = {
  project: IProject;
};

export default function CardProject({ project }: IProps) {
  return (
    <li className="w-11/12 sm:w-7/12 max-w-[250px] h-96 bg-transparent group perspective row-center justify-center">
      <div className="card-div">
        <div className="card-div-front">
          <figure className="w-full h-32 overflow-hidden rounded-t-lg ">
            <Image src={project.image} alt={project.title} className="h-full" />
          </figure>
          <h3 className="w-11/12 text-2xl font-bold">{project.title}</h3>
          <p className="w-11/12">{project.description}</p>
          <div className="w-11/12 row-center justify-stretch flex-wrap gap-2 py-1">
            {project.tasks.map((task, taskIndex) => (
              <span
                key={taskIndex}
                className="bg-brand-100 p-1.5 rounded text-sm text-slate-200"
              >
                {task}
              </span>
            ))}
          </div>
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
