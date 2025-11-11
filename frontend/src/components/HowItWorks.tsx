import { easeOut, motion } from "framer-motion";
import { Shield, Lock, Share2 } from "lucide-react";
import ArrowRight from "../images/arrow1.svg";
import ArrowLeft from "../images/arrow2.svg";
import SectionBackground from "./ui/SectionBackground";
import useInView from "../hooks/useInView";

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: 1,
      title: "Verify Identity",
      description:
        "Complete verification once with trusted partners using your official documents.",
      icon: Shield,
      iconBg: "rgba(239, 68, 68, 0.2)",
      iconColor: "#EF4444",
    },
    {
      number: 2,
      title: "Store Credentials",
      description:
        "Your verified credentials are encrypted and stored in your personal wallet.",
      icon: Lock,
      iconBg: "rgba(34, 197, 94, 0.2)",
      iconColor: "#22C55E",
    },
    {
      number: 3,
      title: "Share Securely",
      description:
        "Grant selective access to verified information without exposing raw data.",
      icon: Share2,
      iconBg: "rgba(0, 212, 146, 0.2)",
      iconColor: "#00D492",
    },
  ];

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
      id="how-it-works"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Background */}
      <SectionBackground variant="bottom" gradientOpacity={0.25} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header with Tag */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-20"
          >
            {/* Tag */}
            <div className="inline-block mb-8">
              <div
                className="px-6 py-2 rounded-full text-white text-sm font-urbanist border"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                How It Works
              </div>
            </div>

            {/* Title */}
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: "1.1",
              }}
            >
              <span className="text-white">HOW </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #22C55E 0%, #00D492 100%)",
                }}
              >
                VERZA WORKS
              </span>
            </h2>
          </motion.div>

          {/* Steps Grid */}
          <div className="relative w-full">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-3 gap-8 md:gap-16 relative py-20">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Icon with Number */}
                    <div className="relative mb-6">
                      {/* Icon Circle */}
                      <div
                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center relative"
                        style={{
                          backgroundColor: step.iconBg,
                          border: `2px solid ${step.iconColor}`,
                        }}
                      >
                        <Icon size={32} style={{ color: step.iconColor }} />
                      </div>

                      {/* Number Badge */}
                      <div
                        className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, #22C55E 0%, #00D492 100%)",
                          color: "#000000",
                          boxShadow: "0 4px 15px rgba(34, 197, 94, 0.4)",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-urbanist font-bold text-xl md:text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-urbanist text-sm md:text-base leading-relaxed mb-6 max-w-xs">
                      {step.description}
                    </p>

                    {/* Learn More Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-full text-black font-urbanist font-semibold border-2 transition-all duration-300"
                      style={{
                        backgroundColor:
                          index === 1 ? "#22C55E" : "transparent",
                        borderColor:
                          index === 1 ? "#22C55E" : "rgba(255, 255, 255, 0.2)",
                        color: index === 1 ? "#000000" : "#FFFFFF",
                      }}
                    >
                      Learn more
                    </motion.button>

                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                        src={ArrowRight}
                        alt="arrow"
                        className="absolute -right-20 top-1/4 w-16 h-16"
                        style={{ transform: "translateX(100%)" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Vertical Layout */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Icon with Number */}
                    <div className="relative mb-6">
                      {/* Icon Circle */}
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                        style={{
                          backgroundColor: step.iconBg,
                          border: `2px solid ${step.iconColor}`,
                        }}
                      >
                        <Icon size={32} style={{ color: step.iconColor }} />
                      </div>

                      {/* Number Badge */}
                      <div
                        className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, #22C55E 0%, #00D492 100%)",
                          color: "#000000",
                          boxShadow: "0 4px 15px rgba(34, 197, 94, 0.4)",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white font-urbanist font-bold text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-urbanist text-sm leading-relaxed mb-6 max-w-xs">
                      {step.description}
                    </p>

                    {/* Learn More Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-full text-black font-urbanist font-semibold border-2 transition-all duration-300"
                      style={{
                        backgroundColor:
                          index === 1 ? "#22C55E" : "transparent",
                        borderColor:
                          index === 1 ? "#22C55E" : "rgba(255, 255, 255, 0.2)",
                        color: index === 1 ? "#000000" : "#FFFFFF",
                      }}
                    >
                      Learn more
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
