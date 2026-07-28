import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:3000'

export async function GET(request, { params }) {
    try {
        const resolvedParams = await params
        const slug = resolvedParams?.slug

        if (!slug) {
            return NextResponse.json({ sucesso: false, mensagem: 'Slug é obrigatório' }, { status: 400 })
        }

        // Tenta buscar por slug no backend
        let res = await fetch(`${BACKEND_URL}/projetos/slug/${encodeURIComponent(slug)}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-BFF-Agent': 'NextJS-BFF'
            },
            next: { revalidate: 60 }
        })

        // Se não encontrar por slug e for numérico, tenta buscar por ID
        if (!res.ok && !isNaN(slug)) {
            res = await fetch(`${BACKEND_URL}/projetos/${slug}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-BFF-Agent': 'NextJS-BFF'
                },
                next: { revalidate: 60 }
            })
        }

        if (!res.ok) {
            return NextResponse.json({ sucesso: false, mensagem: 'Artigo não encontrado' }, { status: res.status })
        }

        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('BFF Error /api/projetos/[slug]:', error)
        return NextResponse.json(
            { sucesso: false, mensagem: 'Erro de comunicação no BFF', erro: error.message },
            { status: 500 }
        )
    }
}
