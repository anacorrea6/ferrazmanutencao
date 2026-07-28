'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { resolveImageUrl } from "@/utils/imageUrl";
import { DEFAULT_ARTICLES } from "@/data/defaultArticles";
import { useEffect, useState } from "react";
import { projectTraceSource } from 'next/dist/build/swc/generated-native';

export default function Artigos() {
    const [artigos, setArtigos] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        async function buscarArtigo() {
            try {
                const res = await fetch('/api/artigos')
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.mensagem || 'Falha ao carregar dados')
                }

                const lista = Array.isArray(data) ? data : (data.dados || data.artigos || [])
                setArtigos(lista)
            } catch (err) {
                console.error("Erro ao buscar artigos:", err)
                setErro(err.message || 'Erro ao conectar ao servidor')
            } finally {
                setCarregando(false)
            }
        }

        buscarArtigo()
    }, [])

    const baseList = artigos.length > 0 ? artigos : DEFAULT_ARTICLES
    const listToRender = baseList.slice(0,3)

    return (
        <>
            <Header />

            <main>
                <section className="blog" id="blog" style={{ paddingTop: '140px', minHeight: '80vh' }}>
                    <div className="blog__container">
                        <h2 className="section-title">ARTIGOS DO BLOG</h2>
                        
                        {carregando && (
                            <div className="artigos__message artigos__message--info">
                                <p>Carregando Artigos...</p>
                            </div>
                        )}

                        {erro && !carregando && artigos.length === 0 && (
                            <div className="artigos__message artigos__message--error" style={{ marginBottom: '30px' }}>
                                <p>Exibindo artigos recomendados ({erro})</p>
                            </div>
                        )}

                        {!carregando && listToRender.length === 0 ? (
                            <p className="text-gray-500 text-center">Nenhum artigo encontrado!</p>
                        ) : (
                            <div className="blog__grid">
                                {listToRender.map((artigo, index) => {
                                    const titleText = artigo.titulo || artigo.categoria_nome || 'Artigo Ferraz'
                                    const descText = artigo.resumo || artigo.descricao || ''
                                    const defaultImg = DEFAULT_ARTICLES[index % DEFAULT_ARTICLES.length]?.imagem || '/img/blog_cycle_time.png'
                                    const imgSrc = resolveImageUrl(artigo.imagem_capa || artigo.imagem, defaultImg)
                                    const targetSlug = artigo.slug || artigo.id || index + 1

                                    return (
                                        <article className="blog-card" key={artigo.id || index}>
                                            <div className="blog-card__img-container">
                                                <img className="blog-card__img" src={imgSrc} alt={titleText} />
                                            </div>
                                            <div className="blog-card__body">
                                                <h3 className="blog-card__title">{titleText}</h3>
                                                <p className="blog-card__desc">{descText}</p>
                                                <Link href={`/artigos/${targetSlug}`} className="blog-card__link">
                                                    Ler artigo <ArrowRight className="blog-card__link-icon" />
                                                </Link>
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
            <WhatsAppBtn />
        </>
    )
}
