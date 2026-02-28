import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        pertanyaan: "Apakah source code-nya akan menjadi hak milik saya sepenuhnya?",
        jawaban : "Ya. Setelah proyek selesai dan pelunasan dilakukan, seluruh source code menjadi milik Anda."
    },
    {
        pertanyaan: "Bagaimana jika anda bug setelah proyek selesai dikerjakan",
        jawaban: "Kami memberikan masa garansi perbaikan bug selama 7 hari setelah serah terima"
    },
    {
        pertanyaan: "Bisakah saya request teknologi spesifik",
        jawaban: "Tentu saja, kami fleksibel dan terbuka dengan stack yang anda inginkan"
    },
    {
        pertanyaan: "Bisakah saya berkonsultasi mengenai alur logikanya",
        jawaban: "Tentu saja. Anda berhak mendapatkan penjelasan mengenai cara kerja kodenya supaya tidak hanya menerima file jadi, tapi juga paham isinya. Ini sangat berguna jika Anda perlu mempresentasikan proyek tersebut agar tidak bingung saat ditanya."
    },
    {
        pertanyaan: "Apakah pekerjaan bisa cepat? Saya sedang butuh satset",
        jawaban: "Efisiensi adalah prioritas kami. Untuk tugas coding yang simpel biasanya bisa selesai dalam 1-3 hari. Sedangkan untuk aplikasi kustom dengan fitur kompleks, kami akan menyelesaikannya dalam 1-3 minggu sesuai kesepakatan timeline Anda."
    },
    {
        pertanyaan: "Jenis sistem atau aplikasi apa saja yang bisa dibuat disini",
        jawaban: "Apa saja bisa! Mulai dari landing page yang estetik, sistem manajemen kantor yang kompleks, hingga aplikasi mobile untuk Android/iOS. Jika Anda mahasiswa yang sedang kesulitan dengan tugas coding, kami juga siap membantu mendampingi sampai tuntas."
    },
]

const FAQSection = () => {
    const[activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

  return (
    <section id="faq" 
     className='py-10'>
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-16">Ada<br />pertanyaan?<br /><span className="text-gray-400">Kami Punya</span><br /><span className="text-gray-400">jawaban.</span></h2>
                    <p className="text-md text-gray-600 max-w-sm">Segala hal yang perlu Anda ketahui tentang proses kerja kami dan bagaimana kami memberikan hasil terbaik.</p>
                    <div className="md:pl-10 mt-6 mb-10 pl-0">
                        <div className="border border-slate-200 bg-white p-4 rounded-xl shadow-lg w-full max-w-sm">
                            <h4 className="text-lg font-bold mb-4">Belum menemukan jawaban?</h4>
                            <p className="text-sm text-slate-700 max-w-md mb-5">Hubungi tim dukungan kami, kami siap membantu Anda dengan senang hati.</p>
                            <button className="bg-black text-white rounded-xl font-semibold py-2 px-4">Hubungi Kami</button>
                        </div>
                    </div>
                </div>
                <div className="">
                      {faqs.map((faq, index) => (
                <div key={index} className="border-b py-6 border-slate-300">
                    <button onClick={() => toggleFAQ(index)} className="flex justify-between items-center w-full text-left">
                        <h3 className="text-md font-semibold text-gray-700 mb-2 hover:text-black duration-100">{faq.pertanyaan}</h3>
                        <span className="text-2xl text-gray-700">{activeIndex === index? "-" : "+"}</span>
                    </button>
                    <AnimatePresence>
                        {activeIndex == index && (
                            <motion.div 
                              initial={{height: 0, opacity: 0}}
                              animate={{height: "auto", opacity: 1}}
                              exit={{height: 0, opacity: 0}}
                              transition={{duration: 0.3}}
                              className="overflow-hidden">
                                <p className="mt-4 text-gray-700 text-sm">
                                    {faq.jawaban}
                                </p>
                              </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQSection