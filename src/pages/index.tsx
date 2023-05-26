import AboutMe from "@/components/about";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - Andressa Menezes</title>
        <link rel="icon" href="@/assets/decoration/logo.svg" sizes="any" />
      </Head>
      <Header />
      <main className="col-center gap-44 sm:gap-10 h-auto w-screen relative pb-36">
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
