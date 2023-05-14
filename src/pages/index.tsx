import AboutMe from "@/components/about";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import NavigationBar from "@/components/navigationBar";
import Skills from "@/components/skills";
import React from "react";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="col-center justify-between gap-10 w-screen relative pb-36">
        <Introduction />
        <AboutMe />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
