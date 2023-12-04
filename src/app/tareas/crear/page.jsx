const NuevaTareaPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center uppercase">Crear tarea</h1>
      <form className="bg-slate-800 py-3 px-2 mt-6 flex flex-col justify-center rounded-md">
        <div className="flex flex-col py-3 px-3">
          <label htmlFor="titulo" className="text-lg px-1 py-1">Título</label>
          <input id="titulo" className="py-2 px-2 rounded-sm" placeholder="Título de la tarea" autoComplete="off" />
        </div>
        <div className="flex flex-col py-3 px-3">
          <label htmlFor="titulo" className="text-lg px-1 py-1">Descripción</label>
          <textarea className="py-2 px-2 rounded-sm" placeholder="Descripción de la tarea" rows='5'></textarea>
        </div>
        <div className="text-right my-3 mx-3">
          <button className="bg-blue-600 py-2 px-2 rounded-sm uppercase text-sm font-semibold">Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default NuevaTareaPage