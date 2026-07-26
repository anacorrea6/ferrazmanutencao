import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:3000'

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url)
        const res = await fetch(`${BACKEND_URL}/servicos?${searchParams.toString()}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-BFF-Agent': 'NextJS-BFF'
            },
            next: { revalidate: 60 } // Revalida a cada 60 segundos (ISR)
        })

        if (!res.ok) {
            throw new Error(`Erro do backend: ${res.statusText}`)
        }

        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('BFF Error /api/servicos:', error)
        return NextResponse.json(
            { sucesso: false, mensagem: 'Erro de comunicação no BFF', erro: error.message },
            { status: 500 }
        )
    }
}
