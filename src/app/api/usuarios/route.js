import { prismaClient } from "@/services/database";
import { NextResponse } from "next/server";

export const GET = async() => {
    const usuarios = await prismaClient.usuarios.findMany()
    return NextResponse.json(usuarios)
}

export const POST = (request) => {
    return NextResponse.json('Crear Usuario')
}
