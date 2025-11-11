import { easeOut, motion } from "framer-motion";
import AboutSlime from "../images/about_slime.svg";
import Aurora from "./ui/Aurora";
import useInView from "../hooks/useInView";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Aurora Effect */}
      <div className="absolute top-0 left-0 right-0 w-full md:h-72 h-32">
        <Aurora
          colorStops={["#22c55e", "#00d491","#22c55e"]}
          blend={6.5}
          amplitude={0.7}
          speed={1.5}
        />
      </div>

      {/* Background Gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(22, 163, 74, 0.1) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 mt-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Title */}
            <div>
              <h2
                className="font-bold mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-white">ABOUT </span>
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #22C55E 0%, #00D492 100%)",
                  }}
                >
                  VERZA
                </span>
              </h2>

              {/* Dotted Subtitle */}
              <h3
                className="text-2xl md:text-3xl lg:text-4xl mb-8"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: "300",
                }}
              >
                OUR MISSION FOR DIGITAL TRUST.
              </h3>
            </div>

            {/* Main Description */}
            <p className="text-white font-urbanist text-lg md:text-xl leading-relaxed">
              We're building a world where identity works for you — not against
              you.
            </p>

            {/* Secondary Description */}
            <p className="text-gray-400 font-urbanist text-base md:text-lg leading-relaxed">
              Every new signup shouldn't mean another ID upload. Verza
              eliminates redundant verifications by giving you one reusable,
              verifiable digital identity. You stay private, fast, and in
              control — everywhere you go.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 font-urbanist font-semibold rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #22C55E 0%, #00D492 100%)",
                color: "#000000",
                boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
              }}
            >
              View Demo
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* Background Gradient */}
            <div
              className="absolute inset-0 rounded-full blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(0, 212, 146, 0.2) 50%, transparent 100%)",
              }}
            />

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-md lg:max-w-lg relative z-10"
              style={{
              }}
            >
              <img
                src={AboutSlime}
                alt="Verza Slime"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
