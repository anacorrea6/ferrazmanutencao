# 📚 Melhores Práticas - Backend Ferraz

Guia de desenvolvimento para manter o backend seguro, escalável e de qualidade.

## 🎯 Padrões de Código

### 1. Tratamento de Erros
Sempre lance erros com estrutura consistente:
```javascript
throw {
    status: 400,
    mensagem: 'Descrição clara do erro',
    details: {
        campo: 'valor_inválido'
    }
}
```

### 2. Validação de Entrada
Sempre valide dados de entrada:
```javascript
// ❌ ERRADO
const { id } = req.params
const artigo = await ArtigoService.getById(id)

// ✅ CORRETO
const schema = Joi.object({ id: Joi.number().positive().required() })
const { error, value } = schema.validate(req.params)
if (error) return res.status(400).json({ sucesso: false, erro: error })
```

### 3. Logging
Log informações úteis para debugging:
```javascript
// ✅ CORRETO
logger.info({
    requestId: req.id,
    userId: req.user?.id,
    action: 'artigo_criado',
    artigoId: result.id
})

// ❌ ERRADO
console.log('Artigo criado')
```

### 4. Resposta Consistente
Sempre responda no mesmo formato:
```javascript
// ✅ CORRETO
res.json({
    sucesso: true,
    dados: artigo,
    mensagem: 'Artigo recuperado com sucesso'
})

// ❌ ERRADO
res.json(artigo)
res.json({ artigo })
```

## 🔒 Segurança

### 1. Nunca Confie em Input do Usuário
```javascript
// ❌ ERRADO
const query = `SELECT * FROM artigos WHERE id = ${req.params.id}`

// ✅ CORRETO
const [rows] = await pool.query(
    'SELECT * FROM artigos WHERE id = ?',
    [req.params.id]
)
```

### 2. Proteja Dados Sensíveis
```javascript
// ❌ ERRADO
logger.info(`Usuário login: ${email} com senha ${password}`)

// ✅ CORRETO
logger.info(`Login attempt para ${email} (não logue senhas!)`)
```

### 3. Use Variáveis de Ambiente
```javascript
// ❌ ERRADO
const secret = 'minha_senha_super_secreta'

// ✅ CORRETO
const secret = process.env.JWT_SECRET
```

## 📊 Performance

### 1. Use Índices no Banco
```sql
-- Adicione índices em campos buscados frequentemente
CREATE INDEX idx_artigo_slug ON artigos(slug);
CREATE INDEX idx_artigo_categoria ON artigos(categoria_id);
```

### 2. Implemente Paginação
```javascript
// ✅ CORRETO
const limit = 10
const offset = (page - 1) * limit
const [rows] = await pool.query(
    'SELECT * FROM artigos LIMIT ? OFFSET ?',
    [limit, offset]
)
```

### 3. Cache Estratégico
```javascript
// Para dados que mudam pouco
const cacheService = {
    get: (key) => /* retorna do cache */,
    set: (key, value, ttl) => /* salva no cache */
}
```

## 🧪 Testes

### 1. Teste Fluxos Críticos
```javascript
describe('ArtigoController', () => {
    test('deve retornar 404 para artigo inexistente', async () => {
        const res = await request(app).get('/artigos/999')
        expect(res.status).toBe(404)
    })
})
```

### 2. Teste Validação
```javascript
test('deve rejeitar slug inválido', async () => {
    const invalid = 'SLUG_INVÁLIDO!!!'
    const res = await request(app).post('/artigos').send({
        slug: invalid
    })
    expect(res.status).toBe(400)
})
```

## 📝 Documentação

### 1. Documente Funções Críticas
```javascript
/**
 * Recupera um artigo pelo ID
 * @param {number} id - ID do artigo
 * @returns {Promise<Object|null>} Artigo ou null
 * @throws {Error} Se ID é inválido
 */
async function getArtigoById(id) {
    // ...
}
```

### 2. Mantenha Swagger Atualizado
Sempre que adicionar endpoint, atualize Swagger

### 3. Documente Mudanças
Use conventional commits:
```
feat: adicionar validação de artigos
fix: corrigir bug em listagem
security: atualizar dependências
```

## 🚀 Deployment

### 1. Checklist Pre-Deploy
- [ ] Todos testes passando
- [ ] Sem console.log() no código
- [ ] Variáveis de ambiente configuradas
- [ ] Backup do banco preparado
- [ ] Rollback plan definido

### 2. Monitorar Pós-Deploy
- [ ] Verificar logs de erro
- [ ] Monitorar performance
- [ ] Testar endpoints críticos
- [ ] Verificar alertas

## 🔍 Code Review

Checklist para revisar código:
- [ ] Segurança (sem SQL injection, XSS)
- [ ] Validação de entrada
- [ ] Tratamento de erro
- [ ] Logging adequado
- [ ] Testes inclusos
- [ ] Performance OK
- [ ] Sem hardcoding
- [ ] Nomes descritivos

## 📞 Suporte e Escalação

### Quando Escalar?
- [ ] Erro crítico em produção
- [ ] Data breach suspeito
- [ ] Performance degradada > 50%
- [ ] Banco de dados indisponível

### Processo de Escalação
1. Notifique lead técnico
2. Abra incident no rastreador
3. Prepare rollback
4. Comunique com stakeholders
5. Implemente fix ou rollback

---

**Seguindo essas práticas, seu backend será robusto, seguro e fácil de manter!** 💪
