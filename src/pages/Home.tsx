import { About } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Services } from "@/components/home/Services";
import { Tools } from "@/components/home/Tools";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Tools />
      <Projects />
      <Services />
      <About />
    </div>
  );
};
