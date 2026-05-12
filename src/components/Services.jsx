import ServiceCard from './ServiceCard'
import { 
  FaSearch, 
  FaCode, 
  FaRocket, 
  FaBullhorn 
} from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      title: 'Search Engine Optimization',
      description: 'Website tampil lebih optimal di hasil pencarian algoritma Google.',
      icon: FaSearch
    },
    {
      title: 'Custom Website',
      description: 'Solusi website custom yang dirancang khusus mendukung kebutuhan bisnis Anda.',
      icon: FaCode
    },
    {
      title: 'Landing Page',
      description: 'Landing page efektif untuk menarik calon pelanggan potensial.',
      icon: FaRocket
    },
    {
      title: 'Search Engine Marketing',
      description: 'Strategi iklan digital untuk meningkatkan visibilitas dan traffic bisnis secara cepat.',
      icon: FaBullhorn
    },
  ]

  return (
    <section id='services' className='pt-20'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:grid grid-cols-2 w-full mb-10">
          <h3
            data-aos="fade-right"
            className='text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-center md:text-left'
          >
            Layanan Saya
          </h3>
          <p
            data-aos="fade-left"
            className='text-xs md:text-sm text-slate-700 text-center md:text-right max-w-md ml-auto'
          >
            Layanan integritas untuk hasil berkualitas. Temukan spesifikasi teknis yang paling sesuai dengan project Anda.
          </p>
        </div>
        <div className='flex flex-col md:grid grid-cols-2 gap-4 w-full'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services