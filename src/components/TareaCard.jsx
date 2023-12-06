"use client";

import { useRouter } from "next/navigation";

const TareaCard = ({ tarea }) => {
  const route = useRouter();
  const { id, titulo, descripcion, realizada } = tarea;
  return (
    <div className='bg-blue-600 py-4 px-3 my-1 rounded-sm'>
      <h2 className='font-semibold text-lg'>
        {titulo}
        <div
          className={
            realizada
              ? "py-1 px-1 bg-green-400 rounded-md"
              : "py-1 px-1 bg-orange-400 rounded-md"
          }></div>
      </h2>
      <p>{descripcion}</p>
      <div className='flex justify-between items-center mt-2'>
        <button
          onClick={() => route.push(`/tareas/editar/${id}`)}
          className='bg-orange-300 text-orange-950 uppercase text-xs py-2 font-semibold px-4 rounded-md'>
          Editar
        </button>
        <button className='bg-red-400 text-gray-900 uppercase text-xs py-2 font-semibold px-4 rounded-md'>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TareaCard;
