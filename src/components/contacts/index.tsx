import { user } from "@/utils/userData";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Contacts() {
  return (
    <section id="contact" className="section max-w-7xl min-h-0 h-[55vh]">
      <h2 className="section-title"># Contatos</h2>
      <div className="w-full col-center gap-10 justify-between lg:flex-row lg:items-start">
        <p className="w-full lg:w-1/2 mt-5">
          Se você está interessado em trabalhar comigo, fornecer feedback ou
          colaborar em projetos, não hesite em entrar em contato. Estou ansioso
          para ouvir de você e discutir como podemos colaborar juntos!
        </p>
        <nav className="w-full max-w-lg lg:w-1/2 col-center border-4 border-solid border-brand-400 py-4 gap-3">
          <Link
            href={user.linkedinUrl}
            className="contacts-nav-link hover:text-blue-600"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin className="contacts-nav-link-icon" />
            Andressa Menezes
          </Link>
          <Link
            href={user.email}
            className="contacts-nav-link text-sm sm:text-base hover:text-red-500"
            target="_blank"
            rel="noopener"
          >
            <GrMail className="contacts-nav-link-icon" />
            andressalsmenezes@gmail.com
          </Link>
          <Link
            href={user.whatsappNumber}
            className="contacts-nav-link hover:text-green-500"
            target="_blank"
            rel="noopener"
          >
            <FaWhatsapp className="contacts-nav-link-icon" />
            Andressa Menezes
          </Link>
          <Link
            href={user.githubUrl}
            target="_blank"
            rel="noopener"
            className="contacts-nav-link hover:text-indigo-500"
          >
            <FaGithub className="contacts-nav-link-icon" />
            AndressaLSMenezes
          </Link>
        </nav>
      </div>
    </section>
  );
}
