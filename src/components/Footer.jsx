import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({ theme }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >

      {/* ================= FOOTER ATAS ================= */}
      <div className='flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 xl:justify-between'> {/* 🔧 gap aman */}

        {/* ===== KIRI ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400 min-w-0'>
          <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white lg:text-3xl">
            Riqz<span className="text-blue-600 dark:text-blue-400">Tech</span>
          </h1>

          <p className='max-w-md '>
            Solusi pembuatan website untuk meningkatkan tampilan dan kredibilitas bisnis.
          </p>

          {/* 🔧 MENU FOOTER AMAN */}
          <ul className='grid grid-cols-2 gap-y-2 gap-x-6 sm:flex sm:gap-8 text-center sm:text-left mt-4'>
            <li><a href="#hero" className='hover:text-primary'>Home</a></li>
            <li><a href="#services" className='hover:text-primary'>Layanan</a></li>
            <li><a href="#our-work" className='hover:text-primary'>Partner</a></li>
            <li><a href="#contact-us" className='hover:text-primary'>Contact</a></li>
          </ul>
        </motion.div>

        {/* ===== KANAN ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400 min-w-0'>
          <h3 className='font-bold text-slate-900 dark:text-white'>
            Mitra Hubungan
          </h3>

          <p className='text-sm mt-2 mb-6'>
            Hubungi Kami untuk Menjadi Mitra Bisnis Andalan dalam
            <span className='block'>Solusi Digital...</span>
          </p>

          {/* 🔧 FORM DIGANTI GRID (LEBIH STABIL DARI FLEX) */}
          <div className='grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 text-sm'>
            <input
              type="email"
              placeholder='Kirimkan Email Anda'
              className='w-full p-3 outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'
            />
            <button className='bg-primary text-white rounded px-6 py-3'>
              Kirim
            </button>
          </div>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      {/* ================= FOOTER BAWAH ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left'
      >
        <p>Copyright 2025 Riqztech Digital Integra</p>

        <div className='flex items-center gap-4'>
          <a href="https://www.instagram.com/riqzaaf" target="_blank" rel="noopener noreferrer">
            <img src={assets.instagram_icon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/maulana-riqza-al-fatir-aa0595321/" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
