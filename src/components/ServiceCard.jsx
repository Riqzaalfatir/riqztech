import React, { useState, useRef } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  // ✅ TARUH DI SINI (BUKAN DI JSX)
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden  m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      {/* Glow animation tetap ada */}
      <div
        className={`pointer-events-none blur-2xl rounded-full 
        bg-gradient-to-r from-white/40 via-gray-500/30 to-black/40 
        w-72 h-72 absolute z-0 transition-opacity duration-500 
        mix-blend-lighten 
        ${visible ? "opacity-70" : "opacity-0"}`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4">
          <Icon size={32} className="text-black" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-xs md:text-sm mt-2 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;