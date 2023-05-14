import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Contacts() {
  return (
    <section id="skill" className="section min-h-0 h-[50vh]">
      <h2 className="section-title"># Contatos</h2>
      <div className="w-5/6 col-center gap-10 justify-between lg:flex-row lg:items-start">
        <p className="w-full lg:w-1/2 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          impedit, perferendis explicabo earum, exercitationem facere rem quae
          quam dicta adipisci praesentium voluptatibus voluptatem distinctio
          vero ipsum vitae suscipit autem deleniti!
        </p>
        <nav className="w-full max-w-lg lg:w-1/2 col-center border-4 border-solid border-brand-400 py-4 gap-3">
          <Link
            href={"https://www.linkedin.com/in/andressalsmenezes/"}
            className="contacts-nav-link hover:text-blue-600"
          >
            <FaLinkedin className="contacts-nav-link-icon" />
            Andressa Menezes
          </Link>
          <Link
            href={"mailto:andressalsmenezes@gmail.com"}
            className="contacts-nav-link text-base hover:text-red-500"
          >
            <GrMail className="contacts-nav-link-icon " />
            andressalsmenezes@gmail.com
          </Link>
          <Link
            href={"https://www.linkedin.com/in/andressalsmenezes/"}
            className="contacts-nav-link hover:text-green-500"
          >
            <FaWhatsapp className="contacts-nav-link-icon" />
            Andressa Menezes
          </Link>
          <Link
            href={"https://www.linkedin.com/in/andressalsmenezes/"}
            className="contacts-nav-link hover:text-indigo-500"
          >
            <FaDiscord className="contacts-nav-link-icon" />
            Andressa_Sampaio#5977
          </Link>
        </nav>
      </div>
    </section>
  );
}
