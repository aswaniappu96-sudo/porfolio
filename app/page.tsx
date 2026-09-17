import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Scene3D from "@/components/Scene3D";
import CodeStream from "@/components/CodeStream";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 grid-fade" />
      <Scene3D />
      <CodeStream />
      <Navbar />
      <main className="relative z-10 isolate">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
