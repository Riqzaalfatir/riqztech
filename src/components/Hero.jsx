import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero"
      className='min-h-screen w-full py-18 md:py-24'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="">
            <span className='py-2 px-4 border text-xs border-slate-200 shadow-lg rounded-full font-semibold italic'>Frontend Developer</span>
            <div className='space-y-5 pt-8'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>Crafting digital<br />experiences with <br /><span className='italic'>precision</span></h1>
              <div className="mt-6 lg:hidden">
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
              <p className=' text-sm md:text-md lg:text-lg max-w-lg leading-6 md:leading-8'>Hi, I'm Maulana Riqza Al-Fatir - a Frontend Developer spacielizazingin React, Next.js and Typescript. I build scalable prformant web applications that users love</p>
              <div className="sm:hidden flex items-center gap-6 pl-1 mb-8">
                <span className="text-sm md:text-md text-gray-500 tracking-wide">Follow :</span>

                <div className="flex items-center gap-5 text-gray-600 dark:text-gray-400">
                  <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl md:text-2xl hover:text-black dark:hover:text-white transition duration-300" />
                  </a>

                  <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl  md:text-2xl hover:text-black dark:hover:text-white transition duration-300" />
                  </a>

                  <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl  md:text-2xl hover:text-black dark:hover:text-white transition duration-300" />
                  </a>
                </div>
              </div>
              <div className="space-x-8 flex items-center">
                <button className="px-6 py-3 bg-black text-white rounded-xl 
                   font-medium tracking-wide
                   hover:bg-gray-800 transition duration-300 text-xs sm:text-sm md:text-lg">
                  Free Project
                </button>
                <a href="/CV-Maulana Riqza Al-Fatir..pdf" download
                 className="px-6 py-3 border border-slate-300 shadow-md rounded-xl 
                   font-medium tracking-wide
                   hover:bg-black hover:text-white transition duration-300  text-xs sm:text-sm md:text-lg">
                  Download CV
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 pt-6 pl-2">
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
          <div className="hidden md:block">
            <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden">

              {/* IMAGE */}
              <img
                src="/Maulana Riqza.jpeg"
                alt=""
                className="w-full aspect-[4/5] object-cover"
              />

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* TOP TEXT */}
              <div className="absolute top-6 left-6 text-white">
                <h2 className="text-2xl font-bold">Maulana Riqza Al-Fatir</h2>
                <p className="text-sm text-gray-200">Universitas Komputer Indonesia</p>
              </div>

              {/* BOTTOM INFO BAR */}
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

                <button className="text-sm text-white border border-white/40 px-3 py-1 rounded-lg hover:bg-white hover:text-black transition">
                  Contact Me
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
