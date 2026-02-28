type Project = {
  id: number
  judul: string
  keterangan: string
  gambar: string
  tech: string[]
  kategori: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-lg overflow-hidden border border-slate-300 shadow-lg hover:scale-[1.02] transition duration-300 bg-white flex flex-col h-full">

      <div className="w-full aspect-[16/9] overflow-hidden">
  <img
    src={project.gambar}
    alt={project.judul}
    className="w-full h-full object-cover block"
  />
</div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-xl font-bold mb-2">
          {project.judul}
        </h3>

        <p className="text-sm text-slate-600 mb-4">
          {project.keterangan}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="border border-slate-300 text-slate-700 px-2 py-1 rounded-lg text-xs shadow-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard