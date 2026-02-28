import React, { useState } from "react";
import { FaCheck, FaInstagram, FaWhatsapp, FaTwitter  } from "react-icons/fa";

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

  // FIXED: handleChange (typo dibenerkan)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Pesan Berhasil Dikirim!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setServices([]);
      } else {
        alert("Gagal mengirim pesan");
      }
    } catch (error) {
      alert("Server Tidak Terhubung");
    }

    setLoading(false);
  };

  return (
    <section id="contact"
     className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Hubungi Riqztech
            </h1>

            <p className="text-gray-800 text-sm mb-3 leading-relaxed text-justify pl-1">
              RiqzTech adalah web portfolio pribadi saya yang menampilkan data diri, kumpulan project, serta layanan pembuatan website yang profesional dan terpercaya. Saya menghadirkan solusi digital yang modern, responsif, dan sesuai kebutuhan, baik untuk personal, bisnis, hingga pengembangan brand Anda.
            </p>

            <p className="text-gray-800 text-sm mb-6 leading-relaxed text-justify pl-1">
              Dengan pengalaman dalam pengembangan website dan proses kerja yang terstruktur, saya berkomitmen memberikan hasil terbaik di setiap project. Setiap layanan dikerjakan dengan det
            </p>

            <ul className="space-y-3 text-gray-900 pl-3 mb-6">
              <li className="flex items-center gap-4">
                <div className="bg-black w-5 h-5 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-sm font-bold">Website modern & responsive</span>
              </li>

              <li className="flex items-center gap-4">
                <div className="bg-black w-5 h-5 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-sm font-bold">Clean code & scalable</span>
              </li>

              <li className="flex items-center gap-4">
                <div className="bg-black w-5 h-5 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-sm font-bold">Support & maintenance</span>
              </li>
            </ul>

            <p className="text-gray-800 text-sm leading-relaxed mb-4 text-justify pl-1">Hubungi kami melalui media sosial resmi atau WhatsApp untuk mendapatkan informasi harga, ketersediaan mobil, serta promo terbaru dari Kurnia Rental Mobil.</p>

            <ul className="pl-3 space-y-3 mb-6 ">
              <li className="flex items-center gap-3 font-semibold text-sm">
                <FaWhatsapp className="text-xl md:text-2xl font-bold" />
                +62 831-0285-1438
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

            <p className="text-gray-800 text-sm leading-relaxed text-justify pl-1">Percayakan perjalanan Anda bersama Kurnia Rental Mobil. Kami siap menjadi partner transportasi terbaik untuk setiap kebutuhan Anda.</p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-xl shadow-2xl mt-10">
            <h2 className="text-2xl font-semibold mb-6">
              Hubungi Kami
            </h2>

            {/* FIXED: Form tidak langsung ditutup */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nama Depan"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Nama Belakang"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all"
              />

              <input
                type="text"
                name="phone"
                placeholder="Nomor WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border h-8 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all"
              />

              <textarea
                name="message"
                placeholder="Detail kebutuhan website..."
                value={formData.message}
                onChange={handleChange}
                className="border h-28 p-2 text-sm rounded-lg w-full border-slate-300 hover:border-black transition-all"
              />

              <div className="mb-12">
                <p className="font-bold mb-4">Layanan</p>
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 text-sm">
                  {[
                    "Landing Page",
                    "Company Profile",
                    "E-Commerce",
                    "Web App Custom",
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckbox(item)}
                        checked={services.includes(item)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold transition"
              >
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;