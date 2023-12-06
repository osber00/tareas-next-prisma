import Link from "next/link"

const NotFound = () => {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-8rem)]">
        <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-400 mb-1">Página no encontrada</h1>
            <Link href='/' className="bg-blue-500 py-1 px-3 rounded-md text-sm font-semibold hover:bg-blue-600 transition-all">Volver al Inicio</Link>
        </div>
    </section>
  )
}

export default NotFound