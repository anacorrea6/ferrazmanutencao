
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { resolveImageUrl } from '@/utils/imageUrl'
import { getProjectsBySlugOrDefault, DEFAULT_PROJECTS } from '@/data/defaultProjects'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag, ChevronRight, AlertCircle, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:3000'

async function fetchProjectsFromBackendOrFallback(slug: string) {
    if (!slug) return null

    try {
        // Tenta buscar por slug no backend
        let res = await fetch(`${BACKEND_URL}/projetos/slug/${encodeURIComponent(slug)}`, {
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' }
        })

        if (!res.ok && !isNaN(Number(slug))) {
            // Tenta buscar por ID se for número
            res = await fetch(`${BACKEND_URL}/projetos/${slug}`, {
                cache: 'no-store',
                headers: { 'Content-Type': 'application/json' }
            })
        }

        if (res.ok) {
            const json = await res.json()
            const backendProjects = json.dados || json.projetos || json
            if (backendProjects && (backendProjects.titulo || backendProjects.id)) {
                return backendProjects
            }
        }
    } catch (error) {
        console.warn(`[getArtigo] Erro ao conectar ao backend para o slug '${slug}':`, error)
    }

    // Fallback para artigos estáticos locais
    return getProjectsBySlugOrDefault(slug)
}

function formatInlineText(text: string) {
    if (!text) return text
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>
        }
        return part
    })
}

function renderFormattedContent(content: string) {
    if (!content) return null

    const paragraphs = content.split(/\n\s*\n/)

    return paragraphs.map((block, idx) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        if (trimmed.startsWith('### ')) {
            return <h3 key={idx}>{trimmed.replace('### ', '')}</h3>
        }
        if (trimmed.startsWith('## ')) {
            return <h2 key={idx}>{trimmed.replace('## ', '')}</h2>
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            const items = trimmed.split('\n').filter(line => line.trim().length > 0)
            return (
                <ul key={idx}>
                    {items.map((item, i) => (
                        <li key={i}>{formatInlineText(item.replace(/^[-*]\s*/, ''))}</li>
                    ))}
                </ul>
            )
        }
        if (/^\d+\.\s/.test(trimmed)) {
            const items = trimmed.split('\n').filter(line => line.trim().length > 0)
            return (
                <ol key={idx}>
                    {items.map((item, i) => (
                        <li key={i}>{formatInlineText(item.replace(/^\d+\.\s*/, ''))}</li>
                    ))}
                </ol>
            )
        }

        return <p key={idx}>{formatInlineText(trimmed)}</p>
    })
}

function formatDate(dateString?: string) {
    if (!dateString) return 'Publicado recentemente'
    try {
        const date = new Date(dateString)
        if (isNaN(date.getTime())) return dateString
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    } catch {
        return dateString
    }
}

export default async function PageDetailsArtigos({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
    const resolvedParams = await params
    const slug = resolvedParams?.slug

    const projeto = await fetchProjectsFromBackendOrFallback(slug)

    if (!projeto) {
        return (
            <>
                <Header />
                <main className="article-page">
                    <div className="article-container" style={{ textAlign: 'center', padding: '80px 20px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 184, 0, 0.1)',
                            border: '1px solid rgba(255, 184, 0, 0.3)',
                            marginBottom: '24px'
                        }}>
                            <AlertCircle style={{ width: '40px', height: '40px', color: 'var(--color-primary)' }} />
                        </div>
                        <h1 style={{ fontFamily: 'var(--font-title)', fontSize: '2rem', marginBottom: '16px', color: '#fff' }}>
                            Projeto não encontrado
                        </h1>
                        <p style={{ color: 'var(--color-text-gray)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
                            O Projeto que você procurava não existe ou pode ter sido removido. Confira outros conteúdos em nosso blog.
                        </p>
                        <a href="/projetos" className="btn btn--primary">
                            <ArrowLeft style={{ width: '18px', height: '18px' }} /> Voltar para os projetos
                        </a>
                    </div>
                </main>
                <Footer />

            </>
        )
    }

    const categoryText = projeto.categoria_nome || projeto.categoria || 'CONHECIMENTO TÉCNICO'
    const authorText = projeto.usuario_nome || 'Ferraz Manutenção'
    const publishedDate = formatDate(projeto.criado_em || projeto.created_at)
    const readTime = projeto.tempo_leitura || '5 min de leitura'
    const coverSrc = resolveImageUrl(projeto.imagem_capa || projeto.imagem, '/img/blog_cycle_time.png')

    // Artigos relacionados (exclui o atual)
    const relatedProjects = DEFAULT_PROJECTS.filter(p => p.slug !== projeto.slug && String(p.id) !== String(projeto.id)).slice(0, 2)

    return (
        <>
            <Header />

            <main className="article-page">
                <div className="article-container">
                    {/* Breadcrumbs */}
                    <nav className="article-breadcrumb" aria-label="Navegação">
                        <a href="/" className="article-breadcrumb__link">Início</a>
                        <ChevronRight className="article-breadcrumb__separator" />
                        <a href="/projetos" className="article-breadcrumb__link">Projetos</a>
                        <ChevronRight className="article-breadcrumb__separator" />
                        <span className="article-breadcrumb__current">{projeto.titulo}</span>
                    </nav>

                    {/* Article Header */}
                    <header className="article-header">
                        <span className="article-category-badge">
                            <Tag style={{ width: '14px', height: '14px' }} />
                            {categoryText}
                        </span>
                        <h1 className="article-title">{projeto.titulo}</h1>

                        <div className="article-meta">
                            <div className="article-meta-item">
                                <User className="article-meta-icon" />
                                <span>{authorText}</span>
                            </div>
                            <div className="article-meta-item">
                                <Calendar className="article-meta-icon" />
                                <span>{publishedDate}</span>
                            </div>
                            <div className="article-meta-item">
                                <Clock className="article-meta-icon" />
                                <span>{readTime}</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="article-cover-wrapper">
                        <img src={coverSrc} alt={projeto.titulo} className="article-cover-img" />
                    </div>

                    {/* Summary / Lead Paragraph */}
                    {projeto.resumo && (
                        <div className="article-summary-box">
                            <div className="article-summary-title">Resumo do Projeto</div>
                            <p className="article-summary-text">{projeto.resumo}</p>
                        </div>
                    )}

                    {/* Article Body Content */}
                    <article className="article-content">
                        {renderFormattedContent(projeto.conteudo)}
                    </article>

                    {/* Extra Image Gallery (if present in API) */}
                    {projeto.imagens && projeto.imagens.length > 0 && (
                        <div style={{ marginBottom: '50px' }}>
                            <h3 style={{ fontFamily: 'var(--font-title)', color: '#fff', fontSize: '1.4rem', marginBottom: '20px' }}>
                                Galeria de Fotos Técnicas
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                {projeto.imagens.map((img: any, idx: number) => (
                                    <div key={img.id || idx} style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <img src={resolveImageUrl(img.url, coverSrc)} alt={img.texto_alternativo || `Imagem ${idx + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                        {img.legenda && (
                                            <p style={{ padding: '10px 14px', fontSize: '0.85rem', color: 'var(--color-text-gray)', backgroundColor: 'var(--color-card-dark)' }}>
                                                {img.legenda}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Signature Card */}
                    <div className="article-author-card">
                        <div className="article-author-avatar">FM</div>
                        <div>
                            <div className="article-author-name">Ferraz Manutenção Industrial</div>
                            <div className="article-author-bio">
                                Especialistas em automação, retrofit, reparo de placas eletrônicas e manutenção de injetoras industriais.
                            </div>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div className="article-cta-box">
                        <div className="article-cta-info">
                            <div className="article-cta-title">Precisa de suporte em suas máquinas industriais?</div>
                            <div className="article-cta-desc">
                                Entre em contato direto com nossos engenheiros para diagnósticos rápidos e orçamentos sem compromisso.
                            </div>
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511999999999&text=Olá!%20Li%20o%20artigo%20no%20site%20e%20gostaria%20de%20tirar%20uma%20dúvida."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--cta"
                        >
                            <MessageSquare style={{ width: '20px', height: '20px' }} /> Falar no WhatsApp
                        </a>
                    </div>

                    {/* Related Articles */}
                    {relatedProjects.length > 0 && (
                        <section className="article-related-section">
                            <h2 className="article-related-title">Outros Projetos recomendados</h2>
                            <div className="blog__grid">
                                {relatedProjects.map((rel) => (
                                    <article key={rel.id} className="blog-card">
                                        <div className="blog-card__img-container">
                                            <img src={rel.imagem} alt={rel.titulo} className="blog-card__img" />
                                        </div>
                                        <div className="blog-card__body">
                                            <h3 className="blog-card__title">{rel.titulo}</h3>
                                            <p className="blog-card__desc">{rel.resumo}</p>
                                            <a href={`/artigos/${rel.slug}`} className="blog-card__link">
                                                Ler Projeto <ArrowRight className="blog-card__link-icon" />
                                            </a>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Back link */}
                    <div style={{ marginTop: '40px', textAlign: 'center' }}>
                        <Link href="/artigos" className="btn btn--outline">
                            <ArrowLeft style={{ width: '16px', height: '16px' }} /> Voltar para Todos os Projetos
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    )
}