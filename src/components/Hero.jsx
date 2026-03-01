import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
  <section id="hero"
  data-aos="zoom-out"
  className='min-h-screen w-full py-18 md:py-24'>

  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-wrap items-center justify-between gap-10">

      <div>
        <span
          data-aos="fade-right"
          data-aos-delay="100"
          className='py-2 px-4 border text-xs border-slate-200 shadow-lg rounded-full font-semibold italic'>
          Frontend Developer
        </span>

        <div className='space-y-5 pt-8'>

          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Crafting digital<br />experiences with <br />
            <span className='italic'>
              <TypeAnimation
                sequence={[
                  "precision",
                  3500,
                  "quality",
                  3500,
                  "performance",
                  3500,
                  "detail",
                  3500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mt-6 lg:hidden">
            <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden">

              <img
                src="/Maulana Riqza.jpeg"
                alt=""
                className="w-full aspect-[4/5] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute top-6 left-6 text-white">
                <h2 className="text-md md:text-lg lg:text-2xl font-bold">Maulana Riqza Al-Fatir</h2>
                <p className="text-xs md:text-sm text-gray-200">Universitas Komputer Indonesia</p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 
      bg-black/60 backdrop-blur-md 
      rounded-xl px-4 py-3 
      flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gray-400 rounded-full overflow-hidden">
                    <img src="/Maulanariqza.jpeg" alt="" className="object-cover object-bottom" />
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    <p>@riqzapersonal</p>
                    <span className="text-green-400 text-xs">Online</span>
                  </div>
                </div>

                <button className="text-xs md:text-sm text-white border border-white/40 px-3 py-2 rounded-lg hover:bg-white hover:text-black transition">
                  Contact Me
                </button>

              </div>
            </div>
          </div>

          <p
            data-aos="fade-right"
            data-aos-delay="350"
            className=' text-sm md:text-md lg:text-lg max-w-lg leading-6 md:leading-8'>
            Halo, saya Maulana Riqza Al-Fatir Seorang Frontend Developer yang berfokus pada pengembangan website modern, cepat, dan skalabel menggunakan React, Next.js, dan TypeScript.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="sm:hidden flex items-center gap-6 pl-1 mb-8">

            <span className="text-sm md:text-md text-gray-500 tracking-wide">Follow :</span>

            <div className="flex items-center gap-5 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/riqzaalfatir" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl md:text-2xl hover:text-black dark:hover:text-white transition duration-300" />
              </a>

              <a href="https://www.linkedin.com/in/maulana-riqza-al-fatir-aa0595321/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl  md:text-2xl hover:text-black dark:hover:text-white transition duration-300" />
              </a>

              <a href="https://instagram.com/riqzaaf" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl  md:text-2xl hover:text-black dark:hover:text-white transition duration-300" />
              </a>
            </div>
          </div>

          <div
            data-aos="flip-up"
            data-aos-delay="450"
            className="space-x-8 flex items-center">

            <a href="#services"
              className="px-6 py-3 bg-black text-white rounded-xl 
                   font-medium tracking-wide
                   hover:bg-gray-800 transition duration-300 text-xs sm:text-sm md:text-lg">
              Fee Project
            </a>

            <a href="/CV-Maulana Riqza Al-Fatir..pdf" download
              className="px-6 py-3 border border-slate-300 shadow-md rounded-xl 
                   font-medium tracking-wide
                   hover:bg-black hover:text-white transition duration-300  text-xs sm:text-sm md:text-lg">
              Download CV
            </a>

          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="hidden md:flex items-center gap-6 pt-6 pl-2">

          <span className="text-sm md:text-md text-gray-500 tracking-wide">Follow</span>

          <div className="flex items-center gap-5 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-black dark:hover:text-white transition duration-300" />
            </a>

            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-black dark:hover:text-white transition duration-300" />
            </a>

            <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-black dark:hover:text-white transition duration-300" />
            </a>
          </div>
        </div>

      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="hidden md:block">

        <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden">

          <img
            src="/Maulana Riqza.jpeg"
            alt=""
            className="w-full aspect-[4/5] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute top-6 left-6 text-white">
            <h2 className="text-2xl font-bold">Maulana Riqza Al-Fatir</h2>
            <p className="text-sm text-gray-200">Universitas Komputer Indonesia</p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 
                  bg-black/60 backdrop-blur-md 
                  rounded-xl px-4 py-3 
                  flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-400 rounded-full overflow-hidden">
                <img src="/Maulanariqza.jpeg" alt="" className="object-cover object-bottom" />
              </div>
              <div className="text-white text-sm">
                <p>@riqzapersonal</p>
                <span className="text-green-400 text-xs">Online</span>
              </div>
            </div>

            <a href="https://wa.me/6283102851438"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white border border-white/40 px-3 py-1 rounded-lg hover:bg-white hover:text-black transition">
              Hubungi
            </a>

          </div>
        </div>

      </div>

    </div>
  </div>
</section>
  )
}

export default Hero
