import { ArrowRight } from 'lucide-react'
import { resolveImageUrl } from '@/utils/imageUrl'
import { DEFAULT_ARTICLES } from '@/data/defaultArticles'

export default function Blog({ artigos = [] }) {
    const list = artigos.length > 0 ? artigos : DEFAULT_ARTICLES

    return (
        <section className="blog" id="blog">
            <div className="blog__container">
                <h2 className="section-title">ARTIGOS DO BLOG</h2>
                <div className="blog__grid">
                    {list.map((item, index) => (
                        <article key={item.id || index} className="blog-card">
                            <div className="blog-card__img-container">
                                <img 
                                    src={resolveImageUrl(item.imagem || item.imagem_capa, '/img/blog_cycle_time.png')} 
                                    alt={item.titulo} 
                                    className="blog-card__img" 
                                />
                            </div>
                            <div className="blog-card__body">
                                <h3 className="blog-card__title">{item.titulo}</h3>
                                <p className="blog-card__desc">{item.resumo}</p>
                                <a href={`/artigos/${item.slug || item.id}`} className="blog-card__link">
                                    Ler artigo <ArrowRight className="blog-card__link-icon" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="blog__actions">
                    <a href="/artigos" className="btn btn--primary">
                        VER TODOS OS ARTIGOS
                    </a>
                </div>
            </div>
        </section>
    )
}

