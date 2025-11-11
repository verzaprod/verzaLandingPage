import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";
import HeroCard from "../images/hero_card.svg";
import Aurora from "./ui/Aurora";
import GridBackground from "../images/Grid background.svg";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center pt-20 pb-0 px-4">
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
        <div className="absolute -top-28 inset-0 overflow-hidden pointer-events-none">
          <img
            src={HeroCard}
            alt="grid"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute md:bottom-[40%] bottom-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full blur-[120px] z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 29, 0.514) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full mt-24 mb-44">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* First Line */}
            <h1 className="font-goldman font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
              <span className="text-white">Own Your </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #22C55E 0%, #00D492 100%)",
                }}
              >
                Identity.
              </span>
            </h1>

            {/* Second Line with Border Box */}
            <div className="flex items-center justify-center font-goldman">
              <div
                className="border-2 rounded-lg px-6 md:px-8 py-3 md:py-4"
                style={{
                  borderColor: "#22C55E",
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)",
                }}
              >
                <h2 className="font-urbanist font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
                  <span className="text-white">Control Your </span>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #00D492 0%, #22C55E 100%)",
                    }}
                  >
                    Data.
                  </span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-urbanist text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Verza is a secure digital wallet for re-usable credentials.
            <br />
            Verify once, and use it anywhere
          </motion.p>

          {/* Email Input Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-lg mx-auto"
          >
            <div
              className="relative flex flex-col sm:flex-row items-center gap-0 border border-green-500/30 border-b-green-500 border-b-2 rounded-3xl px-2 backdrop-blur-sm"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                boxShadow:
                  "0 0 20px rgba(34, 197, 94, 0.1), inset 0 0 20px rgba(34, 197, 94, 0.05)",
              }}
            >
              {/* Input field */}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email/Phone Number"
                className="w-full sm:flex-1 bg-transparent text-white placeholder-gray-400 px-6 py-4 font-urbanist"
              />

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 font-urbanist font-semibold rounded-full transition-all duration-300 whitespace-nowrap mx-1"
                style={{
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #0f9c43 50%)",
                  color: "#000000",
                  boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
                }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Aurora Effect */}
      <div
        className="absolute bottom-0 left-0 right-0 mt-20 md:h-72 h-32 w-full bg-transparent"
        style={{ transform: "scaleY(-1)" }}
      >
        <Aurora
          colorStops={["#16a34a", "#00b57c","#149945"]}
          blend={6.5}
          amplitude={0.7}
          speed={1.5}
        />
      </div>
    </section>
  );
};

export default HeroSection;
