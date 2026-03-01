import { useEffect } from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import AOS from "aos"
import "aos/dist/aos.css"

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <section 
      id="footer" 
      className="px-4 sm:px-6 lg:px-4 py-10"
      data-aos="fade-up"
    >
      <footer className="bg-neutral-900 text-neutral-300 rounded-[32px] md:rounded-[48px] px-6 sm:px-10 md:px-12 py-12 md:py-16 relative overflow-hidden">

        {/* Background Text */}
        <h1 
          className="absolute inset-0 flex items-center justify-center 
          text-[80px] sm:text-[120px] md:text-[200px] 
          font-bold text-white/2 pointer-events-none select-none"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          RiqzTech
        </h1>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* BRAND */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-6" data-aos="fade-down" data-aos-delay="100">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/Maulanariqza.jpeg" alt="" className="object-cover object-bottom" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                RiqzTech
              </h2>
            </div>

            <p 
              className="text-neutral-400 leading-relaxed max-w-sm text-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Membangun identitas digital yang kuat dan berkarakter.
              Membantu brand Anda tampil lebih percaya diri dan profesional di dunia online.
            </p>

            <div 
              className="flex gap-3 sm:gap-4 mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[FaGithub, FaLinkedin, FaTwitter, HiOutlineMail].map(
                (Icon, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={400 + i * 100}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* SITEMAP */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xs sm:text-sm tracking-widest text-neutral-500 mb-6">
              SITEMAP
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {["Home", "About", "Project", "Layanan", "Testimoni", "FAQ"].map(
                (item, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={300 + i * 100}>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* AVAILABILITY */}
          <div data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-xs sm:text-sm tracking-widest text-neutral-500 mb-6">
              AVAILABILITY
            </h3>

            <div 
              className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                <p className="text-white text-sm font-semibold">
                  TERSEDIA UNTUK PROJECT
                </p>
              </div>

              <p className="text-neutral-400 text-xs leading-relaxed">
                Saat ini saya membuka kesempatan untuk proyek freelance dan kolaborasi strategis.
                Mari wujudkan ide Anda menjadi project web yang kuat dan berdampak.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div 
          className="border-t border-neutral-800 my-10 md:my-12"
          data-aos="fade-in"
          data-aos-delay="600"
        />

        {/* Bottom */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <p className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            Dibuat dengan
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-white">
              NIAT BAIK
            </span>
            Oleh RiqzTech ID
          </p>

          <p>© 2026 — Bandung, ID</p>
        </div>
      </footer>
    </section>
  )
}

export default Footer