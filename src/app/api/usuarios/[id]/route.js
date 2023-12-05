import { NextResponse } from "next/server";

export function GET(request, {params}) {
    return NextResponse.json(`Obtener usuario ${params.id}`)
}

export function PUT(request, {params}) {
    return NextResponse.json(`Actualizar usuario ${params.id}`)
}

export function DELETE(request, {params}) {
    return NextResponse.json(`Eliminando usuario ${params.id}`)
}

