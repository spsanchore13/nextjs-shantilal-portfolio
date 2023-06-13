import { About, Contact, Footer, Hero, Project, Skill } from "@/components";
import GithubStats from "@/components/GithubStats";
export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <GithubStats />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
