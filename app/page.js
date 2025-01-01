import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GithubStats from "@/components/GithubStats";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full px-4 lg:px-10 flex flex-col gap-y-24">
        <Hero />
        <Summary />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
