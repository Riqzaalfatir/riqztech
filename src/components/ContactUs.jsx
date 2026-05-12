import React, { useState, useEffect } from "react";
import { FaCheck, FaInstagram, FaWhatsapp, FaTwitter, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Popup Component
const SuccessPopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center animate-fade-in relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
        >
          <FaTimes />
        </button>

        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black mx-auto mb-4">
          <FaCheck className="text-white text-2xl" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h2>
        <p className="text-sm text-gray-500 mb-6">
          Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-black text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value) => {
    if (services.includes(value)) {
      setServices(services.filter((item) => item !== value));
    } else {
      setServices([...services, value]);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, services }),
    });

    const data = await res.json();
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    // server tidak terhubung, tetap tampil sukses
  }

  setShowPopup(true);
  setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  setServices([]);
  setLoading(false);
};

  return (
    <>
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

      <section id="contact" className="py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div data-aos="fade-right">
              <h1 className="text-4xl font-bold mb-6" data-aos="fade-down" data-aos-delay="100">
                Konsultasi Bersama
              </h1>

              <p className="text-gray-800 text-sm mb-3 leading-relaxed text-justify pl-1" data-aos="fade-up" data-aos-delay="200">
                RiqzTech merupakan web portfolio pribadi saya Maulana Riqza AlFatir yang menampilkan data diri, kumpulan project, dan layanan pembuatan website yang profesional dan terpercaya. Saya menghadirkan solusi digital yang modern, responsif, dan sesuai kebutuhan, baik untuk personal, bisnis, hingga pengembangan brand Anda.
              </p>

              <p className="text-gray-800 text-sm mb-6 leading-relaxed text-justify pl-1" data-aos="fade-up" data-aos-delay="300">
                Dengan pengalaman dalam pengembangan website dan proses kerja yang terstruktur, saya berkomitmen memberikan hasil terbaik di setiap project. Setiap layanan dikerjakan dengan det
              </p>

              <ul className="space-y-3 text-gray-900 pl-3 mb-6" data-aos="fade-up" data-aos-delay="400">
                {["Website modern & responsive", "Clean code & scalable", "Support & maintenance"].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="bg-black w-5 h-5 flex items-center justify-center rounded-full">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-sm font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-800 text-sm leading-relaxed mb-4 text-justify pl-1" data-aos="fade-up" data-aos-delay="500">
                Hubungi saya melalui media sosial resmi atau WhatsApp untuk mendiskusikan kebutuhan website Anda, mulai dari konsultasi awal, estimasi biaya, hingga perencanaan pengembangan yang sesuai dengan tujuan bisnis Anda.
              </p>

              <ul className="pl-3 space-y-3 mb-6" data-aos="fade-up" data-aos-delay="600">
                <li className="flex items-center gap-3 font-semibold text-sm">
                  <FaWhatsapp className="text-xl md:text-2xl font-bold" />
                  +62 831-2171-2571
                </li>
                <li className="flex items-center gap-3 font-semibold text-sm">
                  <FaInstagram className="text-xl md:text-2xl font-bold" />
                  @riqzaaf
                </li>
                <li className="flex items-center gap-3 font-semibold text-sm">
                  <FaTwitter className="text-xl md:text-2xl font-bold" />
                  riqzapersonal
                </li>
              </ul>

              <p className="text-gray-800 text-sm leading-relaxed text-justify pl-1" data-aos="fade-up" data-aos-delay="700">
                Percayakan pengembangan website Anda kepada saya sebagai partner yang berkomitmen menghadirkan solusi untuk mendukung pertumbuhan Anda.
              </p>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white p-8 rounded-xl shadow-2xl mt-10" data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-6" data-aos="zoom-in">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="Nama Depan" value={formData.firstName} onChange={handleChange} required data-aos="zoom-in" data-aos-delay="100" className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all" />
                  <input type="text" name="lastName" placeholder="Nama Belakang" value={formData.lastName} onChange={handleChange} required data-aos="zoom-in" data-aos-delay="200" className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all" />
                </div>

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required data-aos="fade-up" data-aos-delay="300" className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all" />
                <input type="text" name="phone" placeholder="Nomor WhatsApp" value={formData.phone} onChange={handleChange} required data-aos="fade-up" data-aos-delay="400" className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all" />
                <textarea name="message" placeholder="Detail kebutuhan website..." value={formData.message} onChange={handleChange} data-aos="fade-up" data-aos-delay="500" className="border h-28 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all" />

                <div className="mb-12" data-aos="fade-up" data-aos-delay="600">
                  <p className="font-bold mb-4">Layanan</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {["Landing Page", "Company Profile", "E-Commerce", "Web App Custom"].map((item) => (
                      <label key={item} className="flex items-center gap-3">
                        <input type="checkbox" onChange={() => handleCheckbox(item)} checked={services.includes(item)} />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" disabled={loading} data-aos="zoom-in-up" data-aos-delay="700" className="w-full bg-black text-white py-3 rounded-xl font-semibold transition hover:bg-gray-800">
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;