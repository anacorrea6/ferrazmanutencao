import { ArrowRight } from 'lucide-react'
import { resolveImageUrl } from '@/utils/imageUrl'

const DEFAULT_ARTICLES = [
    {
        id: 1,
        titulo: 'Como reduzir o tempo de ciclo de uma Injetora',
        resumo: 'Saiba quais parâmetros impactam diretamente a produtividade da sua linha.',
        imagem: '/img/blog_cycle_time.png',
        slug: 'como-reduzir-tempo-de-ciclo-injetora'
    },
    {
        id: 2,
        titulo: 'Erro E04.00 em Inovance: principais causas',
        resumo: 'Entenda como identificar e solucionar esse erro comum em inversores de frequência.',
        imagem: '/img/blog_inovance_error.png',
        slug: 'erro-e04-inovance-causas'
    },
    {
        id: 3,
        titulo: 'Como evitar quebra de correia sincronizada em Injetoras',
        resumo: 'Dicas práticas de manutenção preditiva para aumentar a vida útil da correia.',
        imagem: '/img/blog_belt_drive.png',
        slug: 'evitar-quebra-correia-sincronizada-injetora'
    }
]

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
                                <a href={`#artigo-${item.id}`} className="blog-card__link">
                                    Ler artigo <ArrowRight className="blog-card__link-icon" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="blog__actions">
                    <a href="https://wa.me/message/IFPDRYP2S3WLG1" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                        VER TODOS OS ARTIGOS
                    </a>
                </div>
            </div>
        </section>
    )
}
