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

export default function Projects({ projetos = [] }) {
    const list = projetos.length > 0 ? projetos : DEFAULT_PROJECTS

    return (
        <section className="projects" id="projetos">
            <div className="projects__container">
                <h2 className="section-title section-title--dark">PROJETOS REALIZADOS</h2>
                <div className="projects__grid">
                    {list.map((item, index) => {
                        const IconComponent = item.icon || DEFAULT_PROJECTS[index % DEFAULT_PROJECTS.length].icon
                        const categoryText = item.servico_titulo || item.categoria || item.titulo
                        const descText = item.resumo || item.descricao_detalhada || item.descricao
                        const imgSrc = resolveImageUrl(item.imagem_capa || item.imagem, '/img/project_euromap.png')

                        return (
                            <article key={item.id || index} className="project-card">
                                <div className="project-card__header">
                                    <span className="project-card__category">{categoryText}</span>
                                    <IconComponent className="project-card__header-icon" />
                                </div>
                                <div className="project-card__img-container">
                                    <img 
                                        src={imgSrc} 
                                        alt={item.titulo || categoryText} 
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
                <div className="projects__actions">
                    <a href="/projetos" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--shadow">
                        FALAR SOBRE SEU PROJETO
                    </a>
                </div>
            </div>
        </section>
    )
}
