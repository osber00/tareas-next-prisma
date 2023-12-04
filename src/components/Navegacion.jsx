import Link from "next/link";

const Navegacion = () => {
  return (
    <nav className='flex justify-between items-center uppercase font-semibold'>
      <Link href='/' className='text-blue-500 hover:text-white transition-all'>
        Inicio
      </Link>
      <ul className='flex justify-between text-sm gap-2'>
        <li>
          <Link href='/info' className='hover:text-blue-500 transition-all'>
            Información
          </Link>
        </li>
        <li>
          <Link
            href='/tareas/crear'
            className='hover:text-blue-500 transition-all'>
            Nueva tarea
          </Link>
        </li>
        <li>
          <Link href='/usuarios' className='hover:text-blue-500 transition-all'>
            Usuarios
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
