import { FaCheck } from "react-icons/fa";

const PaketCard = ({
  judul,
  harga,
  deskripsi,
  include,
  icon: Icon,
  highlight
}) => {
  return (
    <div
      className={`bg-white p-8 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 ${
        highlight
          ? "rounded-[26px] shadow-xl border-2 border-black scale-105"
          : "rounded-[26px] shadow-md border border-gray-200"
      }`}
    >
      {highlight && (
        <div className="absolute top-8 right-8 text-xs bg-black text-white px-3 py-1 rounded-full">
          TERPOPULER
        </div>
      )}

      <div>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mb-6">
          <Icon className="text-white text-lg" />
        </div>

        <p className="text-sm tracking-widest text-gray-400 mb-2">
          {judul}
        </p>

        <h2 className="text-4xl font-bold mb-4">{harga}</h2>

        <p className="text-gray-800 text-sm mb-4">{deskripsi}</p>

        <div className="border border-slate-200 mb-4"></div>

        <div className="space-y-4 text-sm text-gray-700">
          {include.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <FaCheck className="text-black text-xs" />
              <p>{item}</p>
            </div>
          ))}
        </div>
         <button
        className={`mt-10 rounded-full py-3 px-4 text-sm tracking-widest transition
        ${
          highlight
            ? "bg-black text-white hover:opacity-90"
            : "border border-gray-300 hover:bg-black hover:text-white"
        }`}
      >
        MULAI KONSULTASI →
      </button>
      </div>
    </div>
  );
};

export default PaketCard;