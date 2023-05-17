import { RxDoubleArrowDown } from "react-icons/rx";
import Image from "next/image";
import woman from "@/assets/decoration/woman.svg";
import NextSection from "../nextSection";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="w-full col-center relative h-[90vh] justify-between mb-32 sm:mb-20"
    >
      <div className="w-11/12 col-center justify-between mt-14 sm:flex-row gap-y-10 sm:h-3/4">
        <div className="w-11/12 sm:w-1/2 col-center justify-around h-full">
          <h1 className="flex flex-col text-2xl font-medium font-primary w-full">
            Hello!
            <span>Me chamo Andressa Menezes</span>
            <span>Sou Desenvolvedora FullStack</span>
          </h1>
          <div className="row-center justify-between w-full mt-5">
            <span className="border-b-2 border-brand-500 w-1/2"></span>

            <nav className="px-2 row-center justify-center gap-3 dark:text-gray-300 text-brand-500  ">
              <Link
                href={"https://www.linkedin.com/in/andressalsmenezes/"}
                className=" hover:text-blue-600"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin className="contacts-nav-link-icon" />
              </Link>
              <Link
                href={"mailto:andressalsmenezes@gmail.com"}
                className="text-base hover:text-red-500"
                target="_blank"
                rel="noopener"
              >
                <GrMail className="contacts-nav-link-icon " />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/andressalsmenezes/"}
                className=" hover:text-green-500"
                target="_blank"
                rel="noopener"
              >
                <FaWhatsapp className="contacts-nav-link-icon" />
              </Link>
              <Link
                href={"https://github.com/AndressaLSMenezes"}
                className=" hover:text-indigo-500"
                target="_blank"
                rel="noopener"
              >
                <FaGithub className="contacts-nav-link-icon" />
              </Link>
            </nav>

            <span className="border-b-2 border-brand-500 w-1/2"></span>
          </div>
        </div>
        <div className="w-11/12 sm:w-1/2 h-full row-center justify-center">
          <figure className="w-full h-96 overflow-hidden flex items-center justify-center relative ">
            <Image src={woman} alt="" className="max-w-sm h-full" />
          </figure>
        </div>
      </div>
      <NextSection nextSection="#aboutMe" />
    </section>
  );
}
