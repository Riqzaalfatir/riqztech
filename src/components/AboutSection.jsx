import { FiCode, FiStar, FiDownload } from "react-icons/fi"

const AboutSection = () => {
  return (
   <section id="about"
  data-aos="zoom-out"
  className='mb-10 py-10'>

  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      <div>

        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-7">
          Mengenal Lebih
          <span className="block">dengan Developer</span>
        </h2>

        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-slate-700 text-sm mb-4 text-justify">
          Saya merupakan alumni SMK Medikacom Bandung angkatan 2025 dan aktif mengembangkan project puntuk meningkatkan kemampuan teknis serta industri secara langsung.
        </p>

        <p
          data-aos="fade-right"
          data-aos-delay="300"
          className="text-slate-700 text-sm mb-4 text-justify leading-6">
          Saat ini saya sebagai mahasiswa aktif Teknik Informatika semester 1 menuju 2 Universitas Komputer Indonesia program kelas Karyawan dengan minat pada web development. Saya membangun project menggunakan React, Next.js, TypeScript, dan Tailwind CSS dengan fokus pada clean code dan performa.
        </p>

        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="text-slate-700 text-sm mb-10 text-justify">
            Saya selalu optimis belajar dan memperdalam fundamental, untuk menambah pengalaman dan membangun portofolio yang solid.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="450"
          className="space-y-8 mt-10 md:hidden mb-10">

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

            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

          <div
            data-aos="flip-up"
            data-aos-delay="650"
            className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
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

        <div
          data-aos="fade-right"
          data-aos-delay="700"
          className="grid grid-cols-3 mb-10">
          {[
            { value: "Focus", label: "Commitment" },
            { value: "Efisien", label: "Attention" },
            { value: "Detail", label: "Komunikasi" },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4 md:space-x-6">
              <div className="w-1 h-16 bg-black rounded"></div>
              <div>
                <h2 className='text-xl md:text-2xl font-bold'>{item.value}</h2>
                <p className='text-gray-500 mt-2 text-xs md:text-sm'>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          data-aos="flip-up"
          data-aos-delay="750"
          className='py-3 px-6 bg-black text-white font-semibold text-sm md:text-md rounded-md hover:opacity-80 transition w-full md:w-auto'>
          Mulai Project
        </button>

      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="space-y-8 mt-10 hidden md:block">

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

          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

        <div
          data-aos="flip-up"
          data-aos-delay="600"
          className="bg-white border border-slate-300 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
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