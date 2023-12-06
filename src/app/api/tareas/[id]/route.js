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
  const datos = await request.json();
  const updateTarea = await prismaClient.tareas.update({
    where: {
      id: Number(params.id),
    },
    data: datos,
  });
  return NextResponse.json(updateTarea);
};

export const DELETE = async (request, { params }) => {
  try {
    const deleteTarea = await prismaClient.tareas.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(deleteTarea);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
