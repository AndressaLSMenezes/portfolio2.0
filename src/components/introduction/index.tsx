import Image from "next/image";
import woman from "@/assets/decoration/woman.svg";
import NextSection from "../nextSection";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import { user } from "@/utils/userData";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="w-screen col-center relative h-[90vh] justify-between mb-32 sm:mb-20"
    >
      <div className="w-11/12 col-center justify-between mt-14 sm:flex-row gap-y-10 sm:h-3/4 max-w-7xl">
        <div className="w-full sm:w-1/2 col-center items-start justify-around gap-10 h-full">
          <h1 className="flex flex-col text-2xl font-primary w-full">
            <span className="font-primary font-bold">Hello!</span>
            <span className="font-primary font-medium">Me chamo Andressa Menezes</span>
            <span className="font-primary font-medium">Sou Desenvolvedora FullStack</span>
          </h1>
          <div className="row-center justify-between w-full mt-5">
            <span className="border-b-2 border-brand-500 w-1/2"></span>

            <nav className="px-2 row-center justify-center gap-3 dark:text-gray-300 text-brand-500">
              <div className="hover:text-blue-600 introduction-contact group">
                <Link
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noopener"
                  className="introduction-contact-text"
                >
                  Linkedin
                </Link>
                <FaLinkedin className="contacts-nav-link-icon" />
              </div>
              <div className="hover:text-red-500 introduction-contact group">
                <Link
                  href={user.email}
                  target="_blank"
                  rel="noopener"
                  className="introduction-contact-text"
                >
                  Email
                </Link>
                <GrMail className="contacts-nav-link-icon" />
              </div>
              <div className="hover:text-green-500 introduction-contact group">
                <Link
                  href={user.linkedinUrl}
                  target="_blank"
                  rel="noopener"
                  className="introduction-contact-text"
                >
                  Whatsapp
                </Link>
                <FaWhatsapp className="contacts-nav-link-icon" />
              </div>
              <div className="hover:text-indigo-500 introduction-contact group">
                <Link
                  href={user.githubUrl}
                  target="_blank"
                  rel="noopener"
                  className="introduction-contact-text"
                >
                  GitHub
                </Link>
                <FaGithub className="contacts-nav-link-icon" />
              </div>
            </nav>

            <span className="border-b-2 border-brand-500 w-1/2"></span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 h-full row-center justify-end">
          <figure className="w-full h-96 sm:h-auto overflow-hidden flex items-center justify-center relative">
            <Image
              src={woman}
              alt=""
              className="max-w-lg h-full sm:h-auto sm:w-80 md:w-auto"
            />
          </figure>
        </div>
      </div>
      <NextSection nextSection="#aboutMe" />
    </section>
  );
}
