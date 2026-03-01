import { FaCheck } from "react-icons/fa";

const PaketCard = ({
  judul,
  harga,
  deskripsi,
  include,
  icon: Icon,
  highlight,
  isActive,
  onHover,
  onLeave,
}) => {
  return (
    <div 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`h-full flex flex-col justify-between p-8 relative 
      rounded-[26px] transition duration-300 ease-in-out
      ${
        isActive
          ? "bg-white shadow-xl border-2 border-black scale-105"
          : "bg-white shadow-md border border-gray-200 scale-100"
      }`}
    >
      {highlight && isActive && (
        <div className="absolute top-8 right-8 text-xs bg-black text-white px-3 py-1 rounded-full">
          TERPOPULER
        </div>
      )}

      {/* CONTENT */}
      <div className="flex flex-col h-full">

        <div
          className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-6 transition duration-300 ${
            isActive ? "bg-black" : "bg-gray-300"
          }`}
        >
          <Icon className={`text-lg ${isActive ? "text-white" : "text-black"}`} />
        </div>

        <p className="text-sm tracking-widest text-gray-400 mb-2">
          {judul}
        </p>

        <h2 className="text-4xl font-bold mb-4">{harga}</h2>

        <p className="text-gray-800 text-sm mb-4">
          {deskripsi}
        </p>

        <div className="border border-slate-200 mb-4"></div>

        {/* LIST */}
        <div className="space-y-4 text-sm text-gray-700 flex-grow">
          {include.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <FaCheck className="text-black text-xs" />
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button
          className={`mt-10 rounded-full py-3 px-4 text-sm tracking-widest transition duration-300 ${
            isActive
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