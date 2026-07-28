export const DEFAULT_PROJECTS = [

    {
        id: 4,
        slug: 'manutencao-preventiva-sistema-hidraulico-injetora',
        titulo: 'Manutenção Preventiva no Sistema Hidráulico de Injetoras',
        resumo: 'Aprenda a identificar contaminantes no óleo e evitar desgaste prematuro de bombas e válvulas proporcionais.',
        categoria_nome: 'Hidráulica & Fluidos',
        imagem: '/img/blog_hydraulic_system.png',
        imagem_capa: '/img/blog_hydraulic_system.png',
        usuario_nome: 'Ferraz Manutenção',
        criado_em: '2026-07-10T11:00:00.000Z',
        tempo_leitura: '5 min de leitura',
        conteudo: `O óleo hidráulico é o "sangue" das injetoras hidráulicas e híbridas. A contaminação do fluido por partículas sólidas ou água é responsável por mais de 70% das falhas em bombas e válvulas proporcionais.

### 1. Análise de Contaminação (Contagem de Partículas ISO 4406)
- Realize coletas periódicas de óleo para verificação de viscosidade, índice de acidez e contagem de partículas.
- Mantenha o nível de limpeza do óleo dentro do padrão exigido pelo fabricante da válvula proporcional (geralmente ISO 16/14/11 ou superior).

### 2. Controle Rígido de Temperatura do Óleo
- A temperatura ideal do óleo hidráulico deve ser mantida entre **40°C e 50°C**.
- Temperaturas acima de 55°C aceleram a oxidação do óleo, degradam vedações de gaxeta e diminuem a viscosidade do fluido, provocando vazamentos internos.

### 3. Substituição de Filtros de Retorno e Sucção
- Substitua os elementos filtrantes de acordo com o indicador de saturação do painel ou a cada 2.000 horas de operação.
- Nunca opere a máquina com o alarme de filtro obstruído ativo.

A Ferraz Manutenção realiza filtragem offline (dialise de óleo) e manutenção completa em blocos e bombas hidráulicas.`
    },
    {
        id: 5,
        slug: 'como-identificar-desgaste-rosca-plastificacao',
        titulo: 'Como Identificar o Desgaste no Cilindro e Rosca de Plastificação',
        resumo: 'Perda de vazão, instabilidade de dosagem e queima de material podem ser sinais de folga excessiva no conjunto de plastificação.',
        categoria_nome: 'Mecânica Industrial',
        imagem: '/img/blog_screw_wear.png',
        imagem_capa: '/img/blog_screw_wear.png',
        usuario_nome: 'Ferraz Manutenção',
        criado_em: '2026-07-18T16:20:00.000Z',
        tempo_leitura: '7 min de leitura',
        conteudo: `O conjunto formado pelo cilindro (canhão), rosca e anel de bloqueio (valvula de retenção) sofre desgaste natural devido à abrasão e corrosão dos polímeros e aditivos.

### Principais Sintomas de Desgaste
1. **Aumento no Tempo de Dosagem**: A rosca gira mas o material demora a retornar, indicando refluxo de polímero fundido pelas cristas dos dentes.
2. **Inconstância no Peso das Peças**: Variação na quantidade de plástico injetado a cada ciclo devido ao vazamento no anel de bloqueio.
3. **Pontos Pretos e Material Queimado**: Acúmulo de resina em folgas excessivas que sofre degradação térmica prolongada.

### Como Diagnosticar
- **Medição Interna com Suta/Micrômetro**: Durante paradas programadas, limpe o canhão e meça o diâmetro interno em diversos pontos ao longo do comprimento.
- **Teste de Retenção de Carga**: Trave a dosagem e aplique pressão de injeção manual para observar se a rosca recua involuntariamente.

Caso precise de mapeamento de desgaste ou recuperação Bimetálica para roscas e cilindros, conte com o suporte da Ferraz Manutenção.`
    },
    {
        id: 6,
        slug: 'vantagens-retrofitting-painel-injetoras-antigas',
        titulo: 'Vantagens do Retrofitting de Painel em Injetoras Antigas',
        resumo: 'Atualizar o CLP e a IHM de máquinas antigas garante maior precisão no processo, economia de energia e fim da escassez de peças.',
        categoria_nome: 'Automação & Processos',
        imagem: '/img/blog_retrofitting_panel.png',
        imagem_capa: '/img/blog_retrofitting_panel.png',
        usuario_nome: 'Ferraz Manutenção',
        criado_em: '2026-07-25T08:45:00.000Z',
        tempo_leitura: '5 min de leitura',
        conteudo: `Injetoras com mecânica e estrutura em bom estado muitas vezes entram em desuso por obsolescência da placa eletrônica principal ou falhas recorrentes em IHMs antigas.

O **Retrofitting** consiste na substituição completa do sistema de controle antigo por um CLP industrial moderno e IHM touch screen de alta performance (como KeBa, Techmation ou Austria Micro).

### Principais Benefícios

- **Reposição Simplificada**: Fim da dependência de placas obsoletas e caras no mercado de usados.
- **Gráficos de Injeção em Tempo Real**: Telas modernas com curvas de pressão, velocidade e histórico detalhado de alarmes.
- **Repetibilidade e Precisão**: Respostas mais rápidas do CLP resultam em peças com menor variação dimensional.
- **Integração com Indústria 4.0**: Comunicação via protocolo OPC-UA / Modbus TCP para monitoramento remoto de produção.

Renove a frota de máquinas da sua empresa sem o alto investimento de comprar equipamentos novos. Fale com os especialistas em automação da Ferraz Manutenção.`
    }
]

export function getProjectsBySlugOrDefault(slug, apiData = null) {
    if (apiData) return apiData;

    if (!slug) return null;

    const normalizedSlug = String(slug).toLowerCase();

    // Procura por slug ou id
    const found = DEFAULT_PROJECTS.find(
        pro => pro.slug.toLowerCase() === normalizedSlug || String(pro.id) === normalizedSlug
    );

    return found || null;
}
