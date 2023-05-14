import { RxDoubleArrowDown } from "react-icons/rx";
import Image from "next/image";
import woman from "@/assets/decoration/woman.svg";

export default function Introduction() {
  return (
    <section id="introduction" className="w-full col-center relative h-[90vh] justify-between mb-20">
      <div className="w-11/12 col-center mt-14 sm:flex-row ">
        <h1 className="flex flex-col text-2xl font-medium font-primary w-5/6">
          <span>Hello!</span>
          <span>Me chamo Andressa Menezes</span>
          <span>Sou Desenvolvedora FullStack</span>
        </h1>
        <figure className="w-5/6 sm:h-80  h-56 overflow-hidden flex items-center justify-center relative ">
          <Image
            src={woman}
            alt=""
            className="absolute bottom-0 max-w-sm h-[120%]"
          />
        </figure>
      </div>
      <div className="sticky bottom-10 ">
        <a href="#aboutMe">
          <RxDoubleArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
