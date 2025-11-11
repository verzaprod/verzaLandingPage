import { motion, easeOut } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import VerzaLogo from "../images/verzalogo.svg";
import GridBackground from "../images/Grid background.svg";


const Footer = () => {

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
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
    <footer className="relative bg-black px-4 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={GridBackground}
          alt="grid"
          className="w-full h-full object-contain"
          // style={{ opacity: 0.1 }}
        />
      </div>

      {/* Top Gradient Decoration */}
      <div 
        className="absolute top-0 left-0 w-[400px] h-[200px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 mb-8" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            
            {/* Left - Brand and Description */}
            <motion.div variants={itemVariants} className="max-w-md">
              {/* Logo using imported image */}
              <img 
                src={VerzaLogo} 
                alt="Verza" 
                className="h-8 md:h-10 w-auto mb-4"
              />

              <p className="text-gray-400 font-urbanist text-sm leading-relaxed">
                Your secure digital wallet for reusable credentials. Own your identity, control your data.
              </p>
            </motion.div>

            {/* Right - Legal Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-8">
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors font-urbanist text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-500 transition-colors font-urbanist text-sm"
              >
                Terms of Service
              </a>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 order-2 md:order-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent size={18} className="text-gray-400 hover:text-green-500 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Copyright */}
            <motion.p
              variants={itemVariants}
              className="text-gray-500 font-urbanist text-sm text-center order-1 md:order-2"
            >
              © 2025 Verza. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;