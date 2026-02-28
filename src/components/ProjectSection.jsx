import { useState } from "react"
import { projects } from "../lib/projectdata"
import ProjectCard from "../card/ProjectCard"

const ProjectSection = () => {
  const [active, setActive] = useState("All")

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) => item.kategori === active)

  return (
    <section id="project"
     className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">Featured Projects</h2>
          <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto">
            Showcase project terbaik saya yang merepresentasikan kemampuan,
            pengalaman, dan pendekatan saya dalam menyelesaikan masalah.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {["All", "Web", "Ui", "Fullstack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-md px-5 py-2 rounded-md border transition font-semibold ${
                active === cat
                  ? "bg-black text-white border-black"
                  : "border-slate-300 text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr items-stretch">
          {filteredProjects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection