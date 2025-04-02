"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554502078-ef0fc409efce?q=80&w=2048&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.3,
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
            className="mb-8"
          >
            <img
              src="/images/profile.png"
              alt="おっしー"
              className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            おっしー【関西グルメ】
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            関西の美味しいお店を毎日紹介
          </p>
          <motion.a
            href="#social"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SNSをフォロー
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;