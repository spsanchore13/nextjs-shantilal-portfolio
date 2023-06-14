import {
  About,
  Contact,
  Footer,
  Hero,
  Project,
  Skill,
  GithubStats,
} from "@/components";

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
