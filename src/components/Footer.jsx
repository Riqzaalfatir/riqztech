import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  return (
    <section id="footer" className="px-4 sm:px-6 lg:px-4 py-10">
      <footer className="bg-neutral-900 text-neutral-300 rounded-[32px] md:rounded-[48px] px-6 sm:px-10 md:px-12 py-12 md:py-16 relative overflow-hidden">

        {/* Background Text */}
        <h1 className="absolute inset-0 flex items-center justify-center 
        text-[80px] sm:text-[120px] md:text-[200px] 
        font-bold text-white/2 pointer-events-none select-none">
          RiqzTech
        </h1>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/Maulanariqza.jpeg" alt="" className="object-cover object-bottom" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                RiqzTech
              </h2>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm text-sm">
              Membangun sistem digital yang kencang, aman, dan memikat.
              Fokus pada kualitas kode untuk skalabilitas bisnis Anda.
            </p>

            <div className="flex gap-3 sm:gap-4 mt-6">
              {[FaGithub, FaLinkedin, FaTwitter, HiOutlineMail].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="text-xs sm:text-sm tracking-widest text-neutral-500 mb-6">
              SITEMAP
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {["Home", "About", "Project", "Layanan", "Testimoni", "FAQ"].map(
                (item, i) => (
                  <li key={i}>
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
          <div>
            <h3 className="text-xs sm:text-sm tracking-widest text-neutral-500 mb-6">
              AVAILABILITY
            </h3>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                <p className="text-white text-sm font-semibold">
                  TERSEDIA UNTUK PROJECT
                </p>
              </div>

              <p className="text-neutral-400 text-xs leading-relaxed">
                Saat ini kami menerima proyek freelance dan kolaborasi
                strategis. Mari realisasikan ide Anda menjadi baris kode
                yang bernilai.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-10 md:my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4 text-center md:text-left">
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