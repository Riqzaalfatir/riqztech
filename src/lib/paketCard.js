import { FaUser, FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";

export const paketCard = [
  {
    judul: "PAKET SISWA",
    harga: "Rp 99.000",
    deskripsi: "Solusi cepat dan edukatif untuk tugas logika pemrograman dasar.",
    include: [
      "Penyelesaian Bug & Error",
      "Logika Dasar (Loop / Array)",
      "Penjelasan Struktur Kode",
      "Format Kode Standar Industri",
    ],
    icon: FaUser,
    highlight: false,
  },
  {
    judul: "MAHASISWA PLUS",
    harga: "Rp 499.000",
    deskripsi:
      "Aplikasi dinamis siap pakai untuk kebutuhan praktikum, project kampus, atau tugas akhir.",
    include: [
      "Landing Page / Web Dinamis",
      "Integrasi Database Dasar",
      "Fitur CRUD (Input / Edit / Hapus)",
      "Dokumentasi Logika Lengkap",
    ],
    icon: FaGraduationCap,
    highlight: true, // default paling gelap
  },
  {
    judul: "PERSONAL PRO",
    harga: "Rp 999.000",
    deskripsi:
      "Ekosistem digital lengkap untuk portfolio profesional atau brand personal Anda.",
    include: [
      "Web Application",
      "Dashboard Admin Panel",
      "Optimasi SEO & Performa",
      "Custom UI/UX ",
      "Gratis Deploy",
    ],
    icon: FaBriefcase,
    highlight: false,
  },
  {
    judul: "BUSINESS",
    harga: "Lebih lanjut",
    deskripsi:
      "Solusi digital skala bisnis dengan performa tinggi dan sistem terintegrasi.",
    include: [
      "Sistem Fullstack Custom",
      "Multi Role Admin",
      "API Integration",
      "Optimasi Security",
      "Gratis Maintenance 1 Bulan",
    ],
    icon: FaRocket,
    highlight: false,
  },
];