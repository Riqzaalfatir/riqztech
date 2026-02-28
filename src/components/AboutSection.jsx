import { FiCode, FiStar, FiDownload } from "react-icons/fi"

const AboutSection = () => {
  return (
    <section id="about"
     className='mb-20 py-10'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-7">
              Crafting Digital 
              <span className="block">Experiences That Matter</span>
            </h2>

            <p className="text-slate-700 text-sm mb-4 text-justify">
              Saya adalah mahasiswa Teknik Informatika semester 1 di Universitas Komputer Indonesia (kelas karyawan) dengan minat pada pengembangan web modern. Saya membangun aplikasi menggunakan React, Next.js, TypeScript, dan Tailwind CSS dengan fokus pada clean code dan performa.
            </p>

            <p className="text-slate-700 text-sm mb-4 text-justify">
              Saya merupakan alumni SMK Medikacom Bandung angkatan 2025 dan aktif mengembangkan proyek pribadi untuk meningkatkan kemampuan teknis serta memahami praktik industri secara langsung.
            </p>

            <p className="text-slate-700 text-sm mb-10 text-justify">
              Saat ini saya terus belajar dan memperdalam fundamental, sambil mengerjakan project pribadi untuk menambah pengalaman dan membangun portofolio yang solid.
            </p>

              <div className="space-y-8 mt-10 md:hidden mb-10">
            
            {/* Keahlian */}
            <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-slate-100 p-4 rounded-xl shrink-0">
                  <FiCode className="text-black text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Keahlian</h3>
                  <p className="text-gray-500 text-sm text-justify">
                    Berpengalaman membangun aplikasi web yang scalable dengan teknologi modern dan praktik terbaik.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Clean Code */}
              <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl">
                    <FiStar className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                    <p className="text-gray-500 text-sm text-justify">
                      Menulis kode yang terstruktur, mudah dipelihara, dan scalable untuk jangka panjang.
                    </p>
                  </div>
                </div>
              </div>

              {/* Performa */}
              <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl">
                    <FiDownload className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performa</h3>
                    <p className="text-gray-500 text-sm text-justify">
                      Mengoptimalkan kecepatan dan efisiensi di setiap proyek yang dikembangkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-3 text-center gap-8">
                <div>
                  <h2 className="text-xl font-bold">100%</h2>
                  <p className="text-gray-500 mt-2 text-sm">Komitmen Kualitas</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Fast</h2>
                  <p className="text-gray-500 mt-2 text-sm">Delivery</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Clean</h2>
                  <p className="text-gray-500 mt-2 text-sm">Development</p>
                </div>
              </div>
            </div>

          </div>

            {/* Stats */}
            <div className="grid grid-cols-3 mb-10">
              {[
                { value: "15+", label: "Proyek Diselesaikan" },
                { value: "1K+", label: "Commit GitHub" },
                { value: "100%", label: "Fokus Kualitas" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 md:space-x-6">
                  <div className="w-1 h-16 bg-black rounded"></div>
                  <div>
                    <h2 className='text-2xl  md:text-3xl font-bold'>{item.value}</h2>
                    <p className='text-gray-500 mt-2 text-xs md:text-sm'>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className='py-3 px-6 bg-black text-white font-semibold text-sm md:text-md rounded-md hover:opacity-80 transition w-full md:w-auto'>
              Mulai Project 
            </button>
          </div>

          <div className="space-y-8 mt-10 hidden md:block">
            
            {/* Keahlian */}
            <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-slate-100 p-4 rounded-xl shrink-0">
                  <FiCode className="text-black text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Keahlian</h3>
                  <p className="text-gray-500 text-sm text-justify">
                    Berpengalaman membangun aplikasi web yang scalable dengan teknologi modern dan praktik terbaik.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Clean Code */}
              <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl">
                    <FiStar className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                    <p className="text-gray-500 text-sm text-justify">
                      Menulis kode yang terstruktur, mudah dipelihara, dan scalable untuk jangka panjang.
                    </p>
                  </div>
                </div>
              </div>

              {/* Performa */}
              <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-slate-100 p-4 rounded-xl">
                    <FiDownload className="text-black text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Performa</h3>
                    <p className="text-gray-500 text-sm text-justify">
                      Mengoptimalkan kecepatan dan efisiensi di setiap proyek yang dikembangkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-3 text-center gap-8">
                <div>
                  <h2 className="text-xl font-bold">100%</h2>
                  <p className="text-gray-500 mt-2 text-sm">Komitmen Kualitas</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Fast</h2>
                  <p className="text-gray-500 mt-2 text-sm">Delivery</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Clean</h2>
                  <p className="text-gray-500 mt-2 text-sm">Development</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection