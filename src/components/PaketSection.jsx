
import { paketCard } from "../lib/paketCard"
import PaketCard from "../card/PaketCard"

const PaketSection = () => {
    return (
        <section className='pb-20'>
            <div className="max-w-7xl mx-auto px-4">
                {/* <div className="text-center">
                    <h2 className='text-4xl font-bold mb-2'>Pilihan Paket</h2>
                    <p className='text-slate-800 text-sm max-w-md mx-auto'>Investasi cerdas untuk hasil berkualitas. Temukan spesifikasi teknis yang paling sesuai dengan ambisi proyek Anda.</p>
                </div> */}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-12">
                {paketCard.map((item, index) => (
                    <PaketCard key={index} {...item}></PaketCard>
                ))}
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-slate-400 text-xs max-w-sm uppercase mb-7 md:mb-0">*Setiap baris kode dijamin orisinal dan melalui tahap quality control ketat sebelum serah terima.</p>
                <div className="flex items-center gap-8 text-center">
                    <p className="text-slate-400 text-xs">HIGH QUALITY CODE</p>
                    <p className="text-slate-400 text-xs">FAST DELIVERY</p>
                </div>
              </div>
            </div>
        </section>
    )
}

export default PaketSection