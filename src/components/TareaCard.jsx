const TareaCard = ({tarea}) => {
  const {titulo, descripcion} = tarea
  return (
    <div className='bg-blue-600 py-4 px-3 my-1 rounded-sm'>
      <h2 className='font-semibold text-lg'>{titulo}</h2>
      <p>{descripcion}</p>
      <div className='flex justify-between items-center mt-2'>
        <button className='bg-orange-300 text-orange-950 uppercase text-xs py-2 font-semibold px-4 rounded-md'>
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
