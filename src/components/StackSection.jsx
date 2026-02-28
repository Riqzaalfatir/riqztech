const StackSection = () => {
  return (
    <section className='pt-30'>
      <div className="max-w-7xl mx-auto px-4">

        <div className='flex flex-col md:flex-row md:justify-between mb-20 gap-6'>
          <h2 className='text-4xl font-bold'>
            Tech Stack & Expertise
          </h2>

          <p className='text-slate-600 text-sm max-w-md md:text-right'>
            Technologies I use to build scalable, performant, and modern web applications.
          </p>
        </div>

        {/* STACK GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">

          <img src="/Git..png" alt='Git' width={70} height={70} />
          <img src="/axios.png" alt='Axios' width={70} height={70} />
          <img src="/shadcn.png" alt='Shadcn' width={70} height={70} />
          <img src="/redux.png" alt='Redux' width={70} height={70} />

        </div>

      </div>
    </section>
  )
}

export default StackSection