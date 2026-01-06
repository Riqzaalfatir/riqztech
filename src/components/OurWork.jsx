import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"



const OurWork = () => {

    const workData = [
        {
            title: 'Konsultan Pajak',
            description: 'Website konsultan pajak dengan struktur informasi rapi dan layanan mudah dipahami...',
            image: assets.konsultan
        },
        {
            title: 'Miracle Mates',
            description: 'Project Personal Woocomerce Brand Distro di Bandung...',
            image: assets.miracle
        },
        {
            title: 'Alifatimah',
            description: 'Website digital marketing wedding untuk meningkatkan branding dan jangkauan klien pernikahan.',
            image: assets.alifatimah
        },
        {
            title: 'PT.Kurnia Usaha',
            description: 'Website jasa cargo laut dirancang untuk memperkuat citra perusahaan dan menjangkau lebih banyak klien logistik..',
            image: assets.kurnia
        },
        {
            title: 'PT.AKI',
            description: 'Website perusahaan kontraktor digunakan sebagai sarana informasi dan presentasi perusahaan..',
            image: assets.kontraktor
        },
        {
            title: 'Infobandungku',
            description: 'Platform berita digital dengan desain responsif dan sistem konten yang rapi...',
            image: assets.infobandungku
        }
    ]
  return (
    <motion.div 
    initial ="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2 }}
    
    
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title  title='Project Kami' desc='Project website pilihan yang kami kembangkan sesuai kebutuhan dan tujuan bisnis klien.' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-5xl'>
        {
            workData.map((work, index)=>(
                <motion.div 
                initial={{opacity: 0, y: 30 }}
                   whileInView={{opacity: 1, y: 0 }}
                   transition={{duration: 0.5, delay: index * 0.2}}
                  viewport={{once: true}}
                
                key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full aspect-video object-cover rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </motion.div>
            ))
        }
      </div>
    </motion.div>
  )
}

export default OurWork
