import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import FAQTopShield from "../images/faqTopshield.svg";
import FAQBottomShield from "../images/faqBottomshield.svg";
import useInView from "../hooks/useInView";

const FAQ = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Verza keep my credentials secure?",
      answer:
        "Your credentials are encrypted end-to-end and stored in your personal wallet. Only you can authorize access, and you maintain full control over what information is shared.",
    },
    {
      question: "Which services accept Verza credentials?",
      answer:
        "Verza credentials can be used with any partner service in our network. We're continuously expanding partnerships with businesses and platforms that value secure identity verification.",
    },
    {
      question: "What happens if I lose my device?",
      answer:
        "Your credentials are backed up securely. You can recover your wallet using your recovery phrase or through re-verification with Verza's trusted partners.",
    },
    {
      question: "Is Verza compliant with data protection regulations?",
      answer:
        "Yes, Verza is designed to comply with major data protection regulations including GDPR, CCPA, and other privacy standards. Your data remains under your control.",
    },
    {
      question: "How much does Verza cost?",
      answer:
        "Verza offers a free tier for individuals. Business and enterprise plans have flexible pricing based on your needs. Get in touch for custom quotes.",
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
      id="faq"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center px-4 md:px-6 lg:px-8 py-16 md:py-24"
    >

      {/* Top Right Shield */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-20">
        <img src={FAQTopShield} alt="shield" className="w-full h-full" />
      </div>

      {/* Bottom Left Shield */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-20">
        <img src={FAQBottomShield} alt="shield" className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="font-bold text-transparent bg-clip-text"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: "1.1",
                backgroundImage:
                  "linear-gradient(90deg, #22C55E 0%, #00D492 100%)",
              }}
            >
              FAQ
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg overflow-hidden transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  boxShadow:
                    openIndex === index
                      ? "0 0 20px rgba(34, 197, 94, 0.2)"
                      : "none",
                }}
              >
                {/* Question Button */}
                <motion.button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left transition-all duration-300 hover:bg-green-500/5"
                >
                  {/* Question Icon and Text */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Circle Icon */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        border: "2px solid #22C55E",
                        background:
                          openIndex === index ? "#22C55E" : "transparent",
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            openIndex === index ? "#000" : "#22C55E",
                        }}
                      />
                    </div>

                    {/* Question Text */}
                    <h3 className="text-white font-urbanist font-medium text-base md:text-lg pr-4">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus Icon */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <Plus size={24} className="text-green-500" />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 md:px-8 pb-5 md:pb-6 pl-20"
                        style={{
                          borderTop: "1px solid rgba(34, 197, 94, 0.2)",
                        }}
                      >
                        <p className="text-gray-400 font-urbanist text-sm md:text-base leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
