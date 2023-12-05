import { prismaClient } from "@/services/database";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const tareas = await prismaClient.tareas.findMany();
  return NextResponse.json(tareas);
};

export const POST = async (request) => {
  const { titulo, descripcion, usuario_id } = await request.json();
  const newTarea = await prismaClient.tareas.create({
    data: {
      titulo: titulo,
      descripcion: descripcion,
      usuario_id: usuario_id,
    },
  });
  return NextResponse.json(newTarea);
};
