import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json('Obtener usuarios')
}

export function POST(request) {
    return NextResponse.json('Crear Usuario')
}
