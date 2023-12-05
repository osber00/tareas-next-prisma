import { prismaClient } from "@/services/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const tarea = await prismaClient.tareas.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(tarea);
};

export const PUT = async (request, { params }) => {
  const { titulo, descripcion, usuario_id, realizada } = await request.json();
  const updateTarea = await prismaClient.tareas.update({
    data: {
      titulo: titulo,
      descripcion: descripcion,
      usuario_id: usuario_id,
      realizada: realizada,
    },
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(updateTarea);
};

export const DELETE = async (request, { params }) => {
  const deleteTarea = await prismaClient.tareas.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(deleteTarea);
};
