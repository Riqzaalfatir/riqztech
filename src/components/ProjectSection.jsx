import { useState } from "react"
import { projects } from "../lib/projectdata"
import ProjectCard from "../card/ProjectCard"

const ProjectSection = () => {
  const [active, setActive] = useState("all")
  const [lihatsemua, setLihatSemua] = useState(false)

  const filteredProjects =
  active === "all"
    ? projects
    : projects.filter((item) => item.kategori === active)

  const displayProject = lihatsemua
   ? filteredProjects
   : filteredProjects.slice(0,6)
  return (
  <section 
  id="project"
  className="py-20"
>
  <div className="max-w-7xl mx-auto px-4">
    
    <div 
      className="text-center mb-12"
      data-aos="fade-up"
    >
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
        Portfolio Projects
      </h2>

      <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto">
        Showcase project saya yang merepresentasikan kemampuan,
        portfolio, dan pengalaman  pendekatan saya dalam menyelesaikan project.
      </p>
    </div>

    <div 
      className="flex justify-center gap-3 mb-12"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {["all", "web", "ui", "fullstack"].map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`text-xs sm:text-sm md:text-md px-5 py-2 rounded-md border transition font-semibold ${
            active === cat
              ? "bg-black text-white border-black"
              : "border-slate-300 text-black"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>

    <div 
      className="grid md:grid-cols-3 gap-6 auto-rows-fr items-stretch"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {displayProject.map((item, i) => (
        <div
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <ProjectCard project={item} />
        </div>
      ))}
    </div>

    {filteredProjects.length > 6 && (
      <div className="text-center mt-10">
        <a onClick={() => setLihatSemua(!lihatsemua)}
                className="cursor-pointer text-sm font-semibold  text-slate-700 hover:opacity-60 transition">
                  {lihatsemua ? "Tampilkan lebih Sedikit ->" : "Lihat Semua ->"}
                </a>
      </div>
    )}

  </div>
</section>
  )
}

export default ProjectSection