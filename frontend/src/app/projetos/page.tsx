'use client'
import { useState, useEffect } from 'react'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Cpu, Share2, Binary } from 'lucide-react'
import { resolveImageUrl } from '@/utils/imageUrl'

const DEFAULT_PROJECTS = [
    {
        id: 1,
        categoria: 'INTEGRAÇÃO EUROMAP67',
        icon: Cpu,
        imagem: '/img/project_euromap.png',
        descricao: 'Desenvolvimento de Interface Euromap67 em injetoras Haitian (KEBA), Comunicação ONBOARD e maior confiabilidade no processo.'
    },
    {
        id: 2,
        categoria: 'SISTEMA IOT INDUSTRIAL',
        icon: Share2,
        imagem: '/img/project_iot.png',
        descricao: 'Monitoramento online de máquinas e consumo energético em tempo real. Relatórios e gráficos acessíveis pelo celular e computador.'
    },
    {
        id: 3,
        categoria: 'ENGENHARIA REVERSA DE EPROM',
        icon: Binary,
        imagem: '/img/project_eprom.png',
        descricao: 'Leitura, análise e reconstrução de memórias de CLPS para habilitação de funções e recuperação de equipamentos.'
    }
]

export default function Projects() {

    const [projetos, setProjetos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        async function buscarProjetos() {
            try {
                // Faz a chamada para a rota BFF
                const res = await fetch('/api/projetos')
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.mensagem || 'Falha ao carregar dados')
                }

                // Tratar o retorno: o backend retorna { sucesso: true, dados: [...], total: N }
                const lista = Array.isArray(data) ? data : (data.dados || data.projetos || [])
                setProjetos(lista)
            } catch (err) {
                setErro(err.message)
            } finally {
                setCarregando(false)
            }
        }

        buscarProjetos()
    }, [])

    if (carregando) {
        return <p className="text-center p-8 text-gray-500">Carregando Projetos...</p>
    }

    if (erro) {
        return <p className="text-center p-8 text-red-500">Erro: {erro}</p>
    }

    const listToRender = projetos.length > 0 ? projetos : DEFAULT_PROJECTS

    return (
        <>
            <Header />
            <main>
                <section className="projects" id="projetos">
                    <div className="projects__container">
                        <h2 className="section-title section-title--dark">PROJETOS REALIZADOS</h2>
                        {listToRender.length === 0 ? (
                            <p className="text-gray-500">Nenhum projeto encontrado.</p>
                        ) : (
                            // Grid para organizar os cards
                            <div className="projects__grid">
                                {listToRender.map((projeto, index) => {
                                    const categoryText = projeto.servico_titulo || projeto.categoria || projeto.titulo
                                    const descText = projeto.resumo || projeto.descricao_detalhada || projeto.descricao
                                    const imgSrc = resolveImageUrl(
                                        projeto.imagem_capa || projeto.imagem,
                                        DEFAULT_PROJECTS[index % DEFAULT_PROJECTS.length].imagem
                                    )

                                    return (
                                        <article key={projeto.id || index} className="project-card">
                                            <div className="project-card__header">
                                                <span className="project-card__category">{categoryText}</span>
                                            </div>
                                            <div className="project-card__img-container">
                                                <img 
                                                    src={imgSrc} 
                                                    alt={projeto.titulo || categoryText} 
                                                    className="project-card__img"
                                                />
                                            </div>
                                            <div className="project-card__body">
                                                <p className="project-card__desc">{descText}</p>
                                            </div>
                                        </article>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
