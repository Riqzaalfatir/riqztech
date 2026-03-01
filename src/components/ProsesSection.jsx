import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

const ProsesSection = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    const lineheight = useSpring(rawHeight, {
        stiffness: 20,
        damping: 20
    })

    return (
        <section
            id="proses"
            ref={ref}
            className="relative py-20 md:pt-30 md:pb-30"
        >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

                {/* LEFT */}
                <div 
                    className="md:sticky md:top-24 self-start"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <div className="mb-6">
                        <h4 className="font-semibold mb-1 text-xs tracking-wider">
                            OUR PROCESS
                        </h4>
                        <div className="border w-16 md:w-21 border-slate-800"></div>
                    </div>

                    <div className="pl-1 md:pl-2">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight md:leading-16">
                            Metode Kerja <br />
                            <span className="text-gray-400">
                                Sistematis & <br /> Efektif
                            </span>
                        </h2>

                        <p className="text-gray-500 max-w-md text-sm sm:text-base md:text-md font-semibold leading-relaxed">
                            Pendekatan strategis dalam memahami kebutuhan bisnis menjadi fondasi pengembangan website yang terstruktur dan optimal
                        </p>
                    </div>
                </div>

                {/* RIGHT TIMELINE */}
                <div 
                    className="relative"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >

                    {/* LINE */}
                    <div className="absolute top-0 left-4.5 md:left-0 w-[2px] h-full bg-gray-300">
                        <motion.div
                            style={{ height: lineheight }}
                            className="w-full bg-black origin-top"
                        />
                    </div>

                    {/* STEP */}
                    {[
                        {
                            num: "01",
                            title: "Discovery & Strategy",
                            desc: "Pendalaman visi bisnis, analisis kebutuhan teknis, serta penyusunan roadmap pengembangan yang terarah dan efisien."
                        },
                        {
                            num: "02",
                            title: "Planning & Alignment",
                            desc: "Perancangan struktur website, pemetaan user flow, serta penetapan prioritas fitur dan timeline proyek."
                        },
                        {
                            num: "03",
                            title: "Development & Optimization",
                            desc: "Implementasi kode dengan standar industri disertai pengujian bertahap dan penyempurnaan berkelanjutan."
                        },
                        {
                            num: "04",
                            title: "Testing & Quality Assurance",
                            desc: "Pengujian menyeluruh, peningkatan keamanan sistem, serta optimalisasi performa sebelum peluncuran."
                        },
                        {
                            num: "05",
                            title: "Launch & Ongoing Support",
                            desc: "Deploy ke server produksi serta dukungan teknis dan pemeliharaan pasca peluncuran."
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative pl-12 md:pl-16 mb-14 md:mb-22"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            data-aos-duration="800"
                            data-aos-once="true"
                        >
                            <div className="absolute left-0 md:-left-6 w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-50 border border-gray-300 shadow-sm flex items-center justify-center font-semibold text-sm md:text-base">
                                {item.num}
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mb-6 md:mb-11 leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="border border-slate-800 w-10 md:w-12"></div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ProsesSection