import { easeOut, motion } from "framer-motion";
import { Shield, Lock, Share2 } from "lucide-react";
import ArrowRight from "../images/arrow1.svg";
import ArrowLeft from "../images/arrow2.svg";
// import SectionBackground from "./ui/SectionBackground";
import useInView from "../hooks/useInView";
import GridBackground from "../images/Grid background.svg";

const HowItWorks = () => {
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
      id="how-it-works"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={GridBackground}
          alt="grid"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Background Gradient Effect  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute md:bottom-[40%] bottom-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full blur-[120px] z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(22, 163, 74, 0.15) 0%, rgba(22, 182, 30, 0.514) 40%, transparent 70%)",
          }}
        />
      </div>


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
          <div className="relative w-full h-[600px] md:h-[500px] mt-12">
            {/* Step 1 - Left */}
            <motion.div
              variants={itemVariants}
              className="absolute left-0 md:left-[5%] top-5 md:top-20"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Number */}
                <div
                  className="absolute left-56 text-6xl md:text-7xl font-bold"
                  style={{
                    color: "rgba(255, 255, 255, 0.805)",
                  }}
                >
                  1
                </div>

                {/* Card */}
                <div className="relative bg-transparent p-6 w-[280px] md:w-[320px] flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl border-2 border-red-500 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-red-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">
                    Verify Identity
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Complete verification once with trusted partners using your
                    official documents.
                  </p>

                  {/* Button */}
                  <button className="px-6 py-2.5 rounded-full text-white text-sm font-medium border border-white/40 hover:border-white/40 transition-all duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.img
              src={ArrowRight}
              alt="arrow"
              className="absolute left-[32%] md:left-[35%] top-[120px] md:top-[140px]"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={
                inView
                  ? { opacity: 1, pathLength: 1 }
                  : { opacity: 1, pathLength: 0 }
              }
              transition={{ duration: 1, delay: 0.6 }}
            />

            {/* Step 2 */}
            <motion.div
              variants={itemVariants}
              className="absolute left-1/2 -translate-x-1/2 top-[220px] md:top-[140px]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Number */}
                <div
                  className="absolute top-6 right-8 text-5xl md:text-6xl font-bold"
                  style={{
                    color: "rgba(255, 255, 255, 0.805)",
                  }}
                >
                  2
                </div>

                {/* Card */}
                <div className="relative p-6 w-[280px] md:w-[320px] flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#0f9c43] border border-emerald-500/30 flex items-center justify-center mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">
                    Store Credentials
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Your verified credentials are encrypted and stored in your
                    personal wallet.
                  </p>

                  {/* Button with Gradient */}
                  <button
                    className="px-6 py-2.5 rounded-full text-black text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                    style={{
                      background:
                        "linear-gradient(90deg, #ffffff 0%, #0f9c43 50%)",
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.img
              src={ArrowLeft}
              alt="arrow"
              className="absolute right-[32%] md:right-[28%] top-80 md:top-80"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={
                inView
                  ? { opacity: 1, pathLength: 1 }
                  : { opacity: 1, pathLength: 0 }
              }
              transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Step 3 - Right */}
            <motion.div
              variants={itemVariants}
              className="absolute right-0 md:right-[5%] top-[420px] md:top-[30px]"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                {/* Number */}
                <div
                  className="absolute top-7 right-1 text-6xl md:text-7xl font-bold"
                  style={{
                    color: "rgba(255, 255, 255, 0.805)",
                  }}
                >
                  3
                </div>

                {/* Card */}
                <div className="relative bg-transparent p-6 w-[280px] md:w-[320px] flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl border-2 border-cyan-500 flex items-center justify-center mb-4">
                    <Share2 className="w-8 h-8 text-cyan-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">
                    Share Securely
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Grant selective access to verified information without
                    exposing raw data.
                  </p>

                  {/* Button */}
                  <button className="px-6 py-2.5 rounded-full text-white text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
