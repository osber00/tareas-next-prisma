"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NuevaTareaPage = ({ params }) => {
  const route = useRouter();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [realizada, setRealizada] = useState(false);
  const [usuario_id, setUsuario_id] = useState("");
  const [editando, setEditando] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  //Consultar para editar
  const fetchTarea = async (tareaid) => {
    const req = await fetch(`/api/tareas/${tareaid}`);
    const res = await req.json();
    if (res != null) {
      setTitulo(res.titulo);
      setUsuario_id(res.usuario_id);
      setRealizada(res.realizada);
      setDescripcion(res.descripcion);  
    }else{
      route.back()
    }
    
  };

  const fetchUsuarios = async () => {
    const req = await fetch("/api/usuarios");
    const res = await req.json();
    setUsuarios(res);
    //console.log(res);
  };

  useEffect(() => {
    fetchUsuarios();
    if (params.id) {
      setEditando(true);
      fetchTarea(params.id);
    }
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    if (editando) {
      //console.log(usuario_id);
      const req = await fetch(`/api/tareas/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, descripcion, usuario_id, realizada }),
      });

      const res = await req.json();
    } else {
      const req = await fetch("/api/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, descripcion, usuario_id }),
      });
    }
    route.refresh();
    route.push("/");
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleForm}
        className="bg-slate-800 py-3 px-2 mt-6 rounded-md w-3/4"
      >
        <h1 className="text-2xl font-bold text-center uppercase">
          {editando ? "Editar" : "Crear"} tarea
        </h1>

        <div className="flex flex-col py-3 px-3">
          <label htmlFor="titulo" className="text-lg px-1 py-1">
            Título de la tarea
          </label>
          <input
            id="titulo"
            className="py-2 px-2 rounded-sm text-gray-700"
            placeholder="Título de la tarea"
            autoComplete="off"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo}
          />
        </div>

        <div className="flex flex-col py-3 px-3">
          <label htmlFor="descripcion" className="text-lg px-1 py-1">
            Descripción
          </label>
          <textarea
            className="py-2 px-2 rounded-sm text-gray-700"
            id="descripcion"
            placeholder="Descripción de la tarea"
            rows="5"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          ></textarea>
        </div>

        <div className="flex flex-col py-3 px-3">
          <label htmlFor="usuario" className="text-lg px-1 py-1">
            Usuario
          </label>
          <select
            className="py-2 px-2 rounded-sm text-gray-700"
            id="usuario"
            placeholder="Usuario"
            onChange={(e) => setUsuario_id(Number(e.target.value))}
            value={usuario_id}
            required
          >
            <option value="">Seleccione un usuario</option>
            {usuarios.map((usuario) => (
              <option value={usuario.id} key={usuario.id}>
                {usuario.nombre}
              </option>
            ))}
          </select>
        </div>

        {editando && (
          <div className="py-2 px-3 rounded-sm">
            <input
              className="py-1 px-1 mr-1"
              type="checkbox"
              checked={realizada}
              value={realizada}
              onChange={(e) => setRealizada(!realizada)}
            />{" "}
            {realizada ? "Realizada" : "Pendiente"}
          </div>
        )}
        <div className="text-right my-3 mx-3">
          <button className="bg-blue-600 py-2 px-2 rounded-md uppercase text-sm font-semibold">
            {editando ? "Confirmar" : " Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NuevaTareaPage;
