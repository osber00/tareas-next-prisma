import TareaCard from "@/components/TareaCard";
import { prismaClient } from "@/services/database";

const HomePage = async () => {
  const tareas = await prismaClient.tareas.findMany({
    where:{
      realizada: false
    }
  })
  console.log(tareas)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {tareas.map(tarea => (
        <TareaCard tarea={tarea}/>
      ))}
    </div>
  );
};

export default HomePage;