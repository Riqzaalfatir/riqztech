import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        pertanyaan: "Apakah source code akan menjadi hak milik saya sepenuhnya?",
        jawaban: "Ya. Setelah proyek selesai dan pelunasan dilakukan, seluruh source code sepenuhnya menjadi milik Anda."
    },
    {
        pertanyaan: "Bagaimana jika ada bug setelah proyek selesai dikerjakan?",
        jawaban: "Diberikan masa garansi perbaikan bug selama 7 hari setelah proses serah terima."
    },
    {
        pertanyaan: "Bisakah saya request teknologi spesifik?",
        jawaban: "Tentu saja, fleksibel dan terbuka terhadap stack teknologi yang Anda inginkan."
    },
    {
        pertanyaan: "Bisakah saya berkonsultasi mengenai alur logikanya?",
        jawaban: "Tentu saja. Anda berhak mendapatkan penjelasan mengenai cara kerja kode agar tidak hanya menerima hasil akhir, tetapi juga memahami strukturnya. Hal ini sangat membantu jika perlu mempresentasikan proyek tanpa kebingungan."
    },
    {
        pertanyaan: "Apakah pengerjaan bisa cepat? Saya sedang butuh segera.",
        jawaban: "Efisiensi menjadi prioritas. Untuk tugas coding sederhana biasanya dapat diselesaikan dalam 1-3 hari. Sedangkan aplikasi kustom dengan fitur kompleks membutuhkan waktu 1-3 minggu sesuai kesepakatan timeline."
    },
    {
        pertanyaan: "Jenis sistem atau aplikasi apa saja yang bisa dibuat di sini?",
        jawaban: "Beragam kebutuhan dapat dikembangkan, mulai dari landing page modern, sistem manajemen internal, hingga aplikasi mobile Android maupun iOS. Termasuk pendampingan tugas coding hingga tuntas."
    },
]

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section 
            id="faq"
            className='py-10'
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* LEFT */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-17">
                            Ada<br />
                            pertanyaan?<br />
                            <span className="text-gray-400">Temukan</span><br />
                            <span className="text-gray-400">jawabanya</span>
                        </h2>

                        <p className="text-md text-gray-600 max-w-sm">
                            Seluruh hal yang perlu Anda ketahui tentang tahapan kerja dan bagaimana hasil maksimal diberikan secara optimal.
                        </p>

                        <div className="md:pl-10 mt-6 mb-10 pl-0">
                            <div 
                                className="border border-slate-200 bg-white p-4 rounded-xl shadow-lg w-full max-w-sm"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                                data-aos-duration="800"
                                data-aos-once="true"
                            >
                                <h4 className="text-lg font-bold mb-4">
                                    Belum menemukan jawaban?
                                </h4>
                                <p className="text-sm text-slate-700 max-w-md mb-5">
                                    Hubungi saya untuk mendapatkan bantuan dan solusi terbaik sesuai kebutuhan Project.
                                </p>
                                <button className="bg-black text-white rounded-xl font-semibold py-2 px-4">
                                    Hubungi
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FAQ */}
                    <div>
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="border-b py-6 border-slate-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 120}
                                data-aos-duration="800"
                                data-aos-once="true"
                            >
                                <button 
                                    onClick={() => toggleFAQ(index)} 
                                    className="flex justify-between items-center w-full text-left"
                                >
                                    <h3 className="text-md font-semibold text-gray-700 mb-2 hover:text-black duration-100">
                                        {faq.pertanyaan}
                                    </h3>
                                    <span className="text-2xl text-gray-700">
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
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