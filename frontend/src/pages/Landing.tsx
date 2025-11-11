import Hero from "../components/Hero";
import About from "../components/About";
import Solutions from "../components/Solutions";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

const Landing = () => {
  return (
    <main className="w-full">
      <Hero />

      <About />
      <Solutions />
      <HowItWorks />
      <FAQ />
    </main>
  );
};

export default Landing;
