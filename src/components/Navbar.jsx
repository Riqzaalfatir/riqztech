import React from 'react'
import assets from "../assets/assets";
import { useState } from 'react';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NAVBAR (TIDAK DIUBAH) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-4 md:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70"
      >
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Riqz<span className="text-blue-600">Tech</span>
        </h1>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-5 text-gray-700 dark:text-white text-sm xl:ml-18 md:ml-16">
          <a href="#">Home</a>
          <a href="#services">Layanan</a>
          <a href="#our-work">Partner</a>
          <a href="#contact-us">Contact</a>
        </div>

        {/* RIGHT ACTION */}
        <div className="flex items-center gap-3">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* HAMBURGER MOBILE */}
          <img
            src={assets.menu_icon}
            onClick={() => setSidebarOpen(true)}
            className="w-8 md:hidden cursor-pointer"
            alt="menu"
          />

          {/* BUTTON DESKTOP */}
          <a
            href="#contact-us"
            className="hidden md:flex bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
          >
            Fee Project
          </a>
        </div>
      </motion.div>

      {/* OVERLAY (BARU) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* SIDEBAR MOBILE (BARU) */}
      <div
        className={`
          fixed top-0 right-0 h-dvh w-64
          bg-blue-600 text-white
          z-40 md:hidden
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6 mt-20 px-6 text-lg">
          <a onClick={() => setSidebarOpen(false)} href="#">Home</a>
          <a onClick={() => setSidebarOpen(false)} href="#services">Layanan</a>
          <a onClick={() => setSidebarOpen(false)} href="#our-work">Partner</a>
          <a onClick={() => setSidebarOpen(false)} href="#contact-us">Contact</a>
        </nav>
      </div>
    </>
  );
};

{/* <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
  <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white lg:text-3xl">Riqz<span className="text-blue-600 dark:text-blue-400">Tech</span></h1>       
           <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' :'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSidebarOpen(false)} />
            <a onClick={()=>setSidebarOpen(false)} href="#" className='sm:hover:border-b ml-15'>Home</a>
            <a onClick={()=>setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Layanan</a>
            <a onClick={()=>setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b'>Partner</a>
            <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact</a>
        </div>
        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden ' />
            <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all font-semibold'>
                Fee Project<img src={assets.arrow_icon} width={14} alt="" />
            </a>
        </div>
</div> */}

export default Navbar


