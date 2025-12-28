import React from 'react'
import assets from '../assets/assets'
import Title from '../components/Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"


const services = () => {

    const servicesData = [
        {
            title: 'Search Engine Optimization',
            description: 'Kami bantu website anda tampil lebih optimal di hasil pencarian Google.',
            icon: assets.ads_icon
        },
        {
            title: 'Custom Website',
            description: 'Solusi website custom yang dirancang khusus mendukung kebutuhan bisnis Anda.',
            icon: assets.marketing_icon
        },
        {
            title: 'Landing Page',
            description: 'Landing page efektif untuk menarik calon pelanggan potensial.',
            icon: assets.content_icon
        },
        {
            title: 'Search Engine Marketing',
            description: 'Strategi iklan digital untuk meningkatkan visibilitas dan traffic bisnis secara cepat.',
            icon: assets.social_icon
        },
    ]
  return (
    <motion.div 
    initial ="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2 }}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
      <Title title='Layanan Kami' desc='Dari perencanaan sampai eksekusi, kami bantu bisnis dan UMKM punya solusi digital yang relevan dan siap berkembang.'></Title>
      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default services
