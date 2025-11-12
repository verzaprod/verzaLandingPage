import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionsShield from "../images/solutions_Shield.svg";
import SectionBackground from "./ui/SectionBackground";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      title: "INDIVIDUALS",
      description:
        "Keep your personal data private. Share only what's necessary.",
      bullet: "✦",
    },
    {
      title: "BUSINESS",
      description: "Save costs and time with instant, verified onboarding.",
      bullet: "✦",
    },
    {
      title: "DEVELOPERS",
      description: "Integrate trust easily with Verza's secure APIs.",
      bullet: "✦",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const shield = shieldRef.current;
    const content = contentRef.current;
    const box = boxRef.current;

    if (!section || !shield || !content || !box) return;

    const ctx = gsap.context(() => {
      // Shield animation from left with scale
      gsap.from(shield, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
        x: -150,
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Content slide from right
      gsap.from(content, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Solutions box items stagger
      gsap.from(box.children, {
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="enterprise"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Background */}
      <SectionBackground variant="bottom" gradientOpacity={0.25} />

      {/* Background Shield */}
      <div
        ref={shieldRef}
        className="absolute -left-20 md:-left-32 lg:-left-20 top-1/2 -translate-y-1/2 w-[350px] h-[450px] md:w-[450px] md:h-[550px] lg:w-[550px] lg:h-[650px]"
      >
        {/* Gradient Background */}
        <div
          className="absolute inset-0 rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(0, 212, 146, 0.2) 50%, transparent 100%)",
          }}
        />

        <img
          src={SolutionsShield}
          alt="shield"
          className="w-full h-full object-contain relative z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Right Content */}
          <div
            ref={contentRef}
            className="order-1 lg:order-2 flex flex-col items-end"
          >
            {/* Title */}
            <div className="w-full text-right mb-8">
              <h2
                className="font-bold mb-4"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                }}
              >
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #22C55E 0%, #00D492 100%)",
                  }}
                >
                  SOLUTIONS
                </span>
              </h2>

              <h3
                className="text-xl md:text-2xl lg:text-3xl"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: "300",
                }}
              >
                WHAT VERZA PLANS TO OFFER
              </h3>
            </div>

            {/* Solutions Box */}
            <div
              ref={boxRef}
              className="w-full p-8 md:p-10 lg:p-12 rounded-lg border-2 space-y-8 backdrop-blur-md"
              style={{
                borderColor: "#22C55E",
                background:
                  "linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(0, 0, 0, 0.7) 100%)",
                boxShadow:
                  "0 0 30px rgba(34, 197, 94, 0.2), inset 0 0 30px rgba(34, 197, 94, 0.1)",
              }}
            >
              {solutions.map((solution, index) => (
                <div key={index} className="space-y-2">
                  {/* Title with bullet */}
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">
                      {solution.bullet}
                    </span>
                    <h4 className="text-white font-urbanist font-bold text-lg md:text-xl">
                      {solution.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 font-urbanist text-sm md:text-base leading-relaxed pl-8">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Empty Space for Balance */}
          <div className="order-2 lg:order-1" />
        </div>
      </div>
    </section>
  );
};

export default Solutions;