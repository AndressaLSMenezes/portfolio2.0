import { ISkill } from "@/interfaces";
import { skillsData } from "@/utils/stackData";
import { useState } from "react";
import Image from "next/image";
import NextSection from "../nextSection";

export default function Skills() {
  const [skill, setSkill] = useState<ISkill>(skillsData[0]);

  return (
    <section id="skills" className="section">
      <h2 className="section-title"># Habilidades</h2>
      <div className="col-center md:flex-row items-center justify-between  w-full py-1 gap-y-8">
        <section className="flex flex-col justify-start  w-5/6 md:w-1/2 gap-3 h-auto md:h-96 md:pt-10">
          <h3 className="font-bold text-2xl ">{skill.title}</h3>
          <p>{skill.subTitle}</p>
          <p>{skill.description}</p>
        </section>
        <ul className="w-[95%] md:w-1/2 max-w-md flex items-center justify-center flex-wrap gap-5  h-96">
          {skillsData.map((stack, index) => (
            <li
              className="rounded-full w-20 h-20 flex items-center justify-center hover:bg-brand-500  bg-brand-600 cursor-pointer"
              key={index}
              onMouseEnter={() => setSkill(skillsData[index])}
              onClick={() => setSkill(skillsData[index])}
            >
              <Image
                src={stack.img}
                alt={stack.title}
                title={stack.title}
                width={50}
              />
            </li>
          ))}
        </ul>
      </div>
      <NextSection nextSection="#project" />
    </section>
  );
}
