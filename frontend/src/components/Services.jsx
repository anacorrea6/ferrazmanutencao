import { Cpu, Network, Code2, RefreshCw, Cog, ShieldCheck } from 'lucide-react'

const DEFAULT_SERVICES = [
    { id: 1, titulo: 'ROBÔS CARTESIANOS E ANTROPOMÓRFICOS', icon: Cpu },
    { id: 2, titulo: 'INTEGRAÇÃO EUROMAP', icon: Network },
    { id: 3, titulo: 'PROGRAMAÇÃO CLP & IHM', icon: Code2 },
    { id: 4, titulo: 'RETROFIT E MODERNIZAÇÃO', icon: RefreshCw },
    { id: 5, titulo: 'ENGENHARIA REVERSA', icon: Cog },
    { id: 6, titulo: 'ADEQUAÇÃO NR-12', icon: ShieldCheck }
]

export default function Services({ servicos = [] }) {
    const list = servicos.length > 0 ? servicos : DEFAULT_SERVICES


    return (
        <section className="services" id="servicos">
            <div className="services__container">
                <h2 className="section-title">NOSSOS SERVIÇOS</h2>
                <div className="services__grid"> {/*Mudar para display flex */}
                    {list.map((item, index) => {
                        const IconComponent = item.icon || DEFAULT_SERVICES[index % DEFAULT_SERVICES.length].icon
                        return (
                            <div key={item.id || index} className="service-card">
                                <div className="service-card__icon-wrapper">
                                    <IconComponent className="service-card__icon" />
                                </div>
                                <h3 className="service-card__title">{item.titulo}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className="services__actions">
                    <a href="https://wa.me/message/IFPDRYP2S3WLG1" target="_blank" rel="noopener noreferrer" className="btn btn--outline" >
                        SOLICITAR CONSULTORIA TÉCNICA
                    </a>
                </div>
            </div>
        </section>
    )
}
