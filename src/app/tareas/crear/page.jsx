"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NuevaTareaPage = () => {
  const route = useRouter();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    const usuario_id = 2;

    const req = await fetch("/api/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, descripcion, usuario_id }),
    });

    const res = await req.json();
    console.log(res);
    route.refresh();
    route.push("/");
  };
  return (
    <div className='flex justify-center items-center'>
      <form
        onSubmit={handleForm}
        className='bg-slate-800 py-3 px-2 mt-6 rounded-md w-3/4'>
        <h1 className='text-2xl font-bold text-center uppercase'>
          Crear tarea
        </h1>
        <div className='flex flex-col py-3 px-3'>
          <label htmlFor='titulo' className='text-lg px-1 py-1'>
            Título de la tarea
          </label>
          <input
            id='titulo'
            className='py-2 px-2 rounded-sm text-gray-700'
            placeholder='Título de la tarea'
            autoComplete='off'
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-3 px-3'>
          <label htmlFor='descripcion' className='text-lg px-1 py-1'>
            Descripción
          </label>
          <textarea
            className='py-2 px-2 rounded-sm text-gray-700'
            id='descripcion'
            placeholder='Descripción de la tarea'
            rows='5'
            onChange={(e) => setDescripcion(e.target.value)}></textarea>
        </div>
        <div className='text-right my-3 mx-3'>
          <button className='bg-blue-600 py-2 px-2 rounded-md uppercase text-sm font-semibold'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NuevaTareaPage;
