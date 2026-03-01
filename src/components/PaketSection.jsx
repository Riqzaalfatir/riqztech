import { useState } from "react"
import { paketCard } from "../lib/paketCard"
import PaketCard from "../card/PaketCard"

const PaketSection = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section className='pb-20'>
      <div className="max-w-7xl mx-auto px-4">

        <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-12 items-stretch">
          {paketCard.map((item, index) => (
            <PaketCard
              key={index}
              {...item}
              isActive={
                hovered === index ||
                (hovered === null && item.highlight)
              }
              onHover={() => setHovered(index)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <p data-aos="fade-right" className="text-slate-400 text-xs max-w-sm uppercase mb-7 md:mb-0">
            *Setiap baris kode dijamin orisinal dan melalui tahap quality control ketat sebelum serah terima.
          </p>
          <div data-aos="fade-left" data className="flex items-center gap-8 text-center">
            <p className="text-slate-400 text-xs">HIGH QUALITY CODE</p>
            <p className="text-slate-400 text-xs">FAST DELIVERY</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PaketSection