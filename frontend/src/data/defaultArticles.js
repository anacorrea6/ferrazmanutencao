export const DEFAULT_ARTICLES = [
    {
        id: 1,
        slug: 'como-reduzir-tempo-de-ciclo-injetora',
        titulo: 'Como Reduzir o Tempo de Ciclo em Injetoras de Plástico',
        resumo: 'Saiba quais parâmetros de injeção, recalque e resfriamento impactam diretamente a produtividade da sua linha industrial.',
        categoria_nome: 'Automação & Processos',
        imagem: '/img/blog_cycle_time.png',
        imagem_capa: '/img/blog_cycle_time.png',
        usuario_nome: 'Ferraz Manutenção',
        criado_em: '2026-06-15T10:00:00.000Z',
        tempo_leitura: '5 min de leitura',
        conteudo: `O tempo de ciclo é uma das variáveis mais críticas na indústria de transformação de plásticos. Reduzir alguns segundos no ciclo de injeção pode significar um ganho de produtividade de 10% a 25% ao final do mês, otimizando o consumo energético e reduzindo custos operacionais.

### 1. Otimização do Tempo de Resfriamento
O tempo de resfriamento representa frequentemente entre 60% e 70% do tempo total de ciclo. 
Para otimizá-lo sem comprometer a qualidade estrutural da peça:
- Verifique a vazão e temperatura dos canais de refrigeração do molde.
- Mantenha os canais desincrustados para garantir a máxima troca térmica.
- Ajuste a temperatura do molde de acordo com a resina utilizada (ex: PP, ABS, PA66).

### 2. Ajuste dos Tempos de Injeção e Recalque
- **Velocidade de Injeção**: Trabalhe com perfis de velocidade bem ajustados (multi-estágio) para preencher a cavidade rapidamente sem gerar queimaduras ou rebarbas.
- **Ponto de Comutação**: Garanta que a transição de injeção para recalque ocorra no momento exato (geralmente a 95-98% do preenchimento da cavidade).
- **Tempo de Recalque**: O recalque deve durar apenas o tempo necessário para o congelamento do canal de alimentação (gate seal time).

### 3. Movimentação Rápida da Máquina e Extração
- Utilize placas de fecho rápido com controle proporcional de velocidade e pressão.
- Sincronize a extração mecânica ou robótica com a abertura do molde para eliminar tempos mortos.
- Realize a dosagem do material em paralelo com o tempo de resfriamento.

### Conclusão
A otimização de ciclo não é apenas sobre acelerar a máquina, mas sim sobre eliminar desperdícios térmicos e mecânicos no processo. A Ferraz Manutenção oferece consultoria técnica especializada e parametrização de injetoras para máxima eficiência produtiva.`
    },
    {
        id: 2,
        slug: 'erro-e04-inovance-causas',
        titulo: 'Erro E04.00 em Inversores Inovance: Principais Causas e Como Resolver',
        resumo: 'Entenda o significado do alarme de sobrecorrente E04 em inversores de frequência Inovance e o passo a passo para diagnóstico técnico.',
        categoria_nome: 'Eletrônica & Servo Drives',
        imagem: '/img/blog_inovance_error.png',
        imagem_capa: '/img/blog_inovance_error.png',
        usuario_nome: 'Ferraz Manutenção',
        criado_em: '2026-06-20T14:30:00.000Z',
        tempo_leitura: '6 min de leitura',
        conteudo: `O código de erro E04.00 (ou E04) em inversores de frequência e servo drives da marca Inovance indica uma ocorrência de **Sobrecorrente Durante a Aceleração ou Operação em Regime**.

Esse alarme é disparado pelo sistema de proteção interna quando a corrente de saída do inversor ultrapassa o limite de segurança predefinido, evitando danos aos módulos IGBT.

### Principais Causas do Erro E04.00

1. **Sobre-elevação de Carga Mecânica ou Travamento**:
   - Falha mecânica na bomba hidráulica, rolamentos ou fuso da injetora.
   - Presença de detritos ou rigidez excessiva no sistema de acionamento.

2. **Parâmetros de Aceleração/Desaceleração Inadequados**:
   - Rampa de aceleração muito curta (tempo de ramp-up agressivo).
   - Ganho de torque inicial elevado (Torque Boost) desajustado.

3. **Problemas no Motor Elétrico ou Cabeamento**:
   - Curto-circuito ou fuga de isolamento nas fases UVW do motor.
   - Cabo de potência danificado ou com folga nos terminais.

4. **Falha do Módulo de Potência (IGBT) ou Placa de Controle**:
   - Desgaste dos capacitores do barramento DC ou falha na leitura dos sensores de corrente (CTs).

### Passo a Passo para Diagnóstico e Solução

- **Passo 1**: Desconecte os cabos do motor e teste o inversor em vazio. Se o erro E04 persistir ao ligar o drive sem motor, a falha é interna no inversor.
- **Passo 2**: Meça a resistência de isolamento do motor utilizando um Megômetro entre fases e terra.
- **Passo 3**: Verifique o histórico de carga no painel do inversor para identificar picos de corrente nos últimos ciclos.
- **Passo 4**: Ajuste o parâmetro de tempo de aceleração (F0-17 / F0-18 dependendo da série da Inovance) aumentando gradativamente.

Se o problema persistir, a Ferraz Manutenção possui bancada de testes dedicada para diagnóstico e reparo de inversores e servo acionamentos Inovance, Haitian e KeBa.`
    },
    {
        id: 3,
        slug: 'evitar-quebra-correia-sincronizada-injetora',
        titulo: 'Como Evitar Quebra de Correia Sincronizada em Injetoras Elétricas',
        resumo: 'Dicas práticas de manutenção preditiva e alinhamento a laser para aumentar a vida útil das correias sincronizadoras em injetoras.',
        categoria_nome: 'Mecânica Industrial',
        imagem: '/img/blog_belt_drive.png',
        imagem_capa: '/img/blog_belt_drive.png',
        usuario_nome: 'Ferraz Manutenção',
        criado_em: '2026-07-02T09:15:00.000Z',
        tempo_leitura: '4 min de leitura',
        conteudo: `Nas injetoras elétricas e híbridas modernas, as correias sincronizadoras são responsáveis por transmitir o movimento dos servo motores para os fusos de esferas (fechamento, extração e plastificação).

Uma quebra de correia inesperada pode causar paradas severas de produção, danos aos fusos e custos elevados de reposição.

### 1. Tensão Correta da Correia (Frequencímetro Sonoro)
Trabalhar com a correia muito frouxa provoca o salto de dentes (skipping), enquanto a tensão excessiva degrada precocemente os cordonéis internos de fibra de vidro/aço e os rolamentos dos fusos.
- Sempre utilize um **medidor de tensão por frequência de vibração** (frequencímetro óptico/sonoro) de acordo com a especificação do fabricante da máquina.

### 2. Alinhamento Preciso de Polias a Laser
O desalinhamento angular ou paralelo faz com que a correia trabalhe forcida contra os flanges das polias, desgastando lateralmente os dentes e desfocando a distribuição de carga.
- Utilize ferramentas de alinhamento a laser em todas as intervenções de manutenção.

### 3. Inspeção Visual Periódica e Limpeza
- **Resíduos de Óleo e Graxa**: Derramamentos de fluidos hidráulicos deterioram o composto de borracha de nitrila ou poliuretano da correia.
- **Acúmulo de Poeira Plástica**: Partículas abrasivas entre a polia e os dentes aceleram o desgaste mecânico.

### 4. Plano de Troca Preventiva
Respeite o limite de horas de operação estabelecido no plano de manutenção da máquina. Correias que trabalham em regimes de alta aceleração devem ser substituídas preventivamente a cada 12.000 a 16.000 horas operacionais.

Deseja um diagnóstico do sistema de acionamento das suas máquinas? Entre em contato com nossa equipe técnica da Ferraz Manutenção.`
    }
]

export function getArticleBySlugOrDefault(slug, apiData = null) {
    if (apiData) return apiData;

    if (!slug) return null;

    const normalizedSlug = String(slug).toLowerCase();
    
    // Procura por slug ou id
    const found = DEFAULT_ARTICLES.find(
        art => art.slug.toLowerCase() === normalizedSlug || String(art.id) === normalizedSlug
    );

    return found || null;
}
