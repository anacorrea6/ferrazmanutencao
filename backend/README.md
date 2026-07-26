# 🔧 Backend - Ferraz Manutenção Industrial

Backend seguro e escalável para apresentação de serviços, projetos e portfólio de MEI em automação industrial.

## 🎯 Features

- ✅ Autenticação JWT
- ✅ Validação de entrada com Joi
- ✅ Logging estruturado
- ✅ Rate limiting
- ✅ Security headers com Helmet
- ✅ Compressão gzip
- ✅ Tratamento centralizado de erros
- ✅ Request ID único
- ✅ Documentação com Swagger (em breve)

## 📋 Requisitos

- Node.js 18+
- MySQL 8.0+
- npm ou yarn

## 🚀 Instalação

```bash
# 1. Clone o repositório
git clone <seu-repo>
cd backend

# 2. Instale dependências
npm install

# 3. Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas credenciais

# 4. Crie o banco de dados (veja schema.sql)
mysql -u root -p < schema.sql

# 5. Inicie o servidor
npm start

# Desenvolvimento com hot-reload
npm run dev
```

## 🔒 Segurança

### Variáveis de Ambiente Obrigatórias
- `JWT_SECRET` - Chave secreta para JWT (mude em produção!)
- `DB_PASSWORD` - Senha do banco de dados
- `ALLOWED_ORIGINS` - URLs permitidas para CORS

### Boas Práticas Implementadas
1. **Headers Seguros** - Helmet protege contra XSS, Clickjacking
2. **Rate Limiting** - Proteção contra DDoS/brute force
3. **Validação** - Todos os dados são validados com Joi
4. **Logging** - Erros e requisições são registrados
5. **CORS Configurado** - Apenas origens autorizadas
6. **Sem Exposição de Stack** - Errors não expõem stack em produção

## 📁 Estrutura do Projeto

```
src/
├── config/          # Configurações
├── controllers/     # Lógica de requisição
├── services/        # Lógica de negócio
├── repositories/    # Acesso a dados
├── middlewares/     # Middlewares Express
├── validators/      # Esquemas Joi
├── utils/          # Utilitários (logger, etc)
├── routes/         # Definição de rotas
├── app.js          # Configuração Express
└── server.js       # Entry point
```

## 🔌 Endpoints

### Artigos
- `GET /artigos` - Listar todos
- `GET /artigos/:id` - Por ID
- `GET /artigos/slug/:slug` - Por slug
- `POST /artigos` - Criar (autenticado)
- `PUT /artigos/:id` - Atualizar (autenticado)
- `DELETE /artigos/:id` - Deletar (autenticado)

## 🧪 Testes

```bash
# Executar testes
npm test

# Com coverage
npm run test:coverage
```

## 📊 Monitoramento

Logs são salvos em `logs/`:
- `combined.log` - Todas as requisições
- `error.log` - Apenas erros

Cada requisição tem um `X-Request-Id` para rastreamento.

## 📈 Performance

- Compressão gzip habilitada
- Connection pool configurado
- Índices de banco otimizados
- Rate limiting por IP

## 🛠️ Próximos Passos

- [ ] Autenticação JWT completa
- [ ] Swagger/OpenAPI
- [ ] Testes unitários
- [ ] CI/CD pipeline
- [ ] Docker + Docker Compose
- [ ] Caching com Redis

## 📝 Licença

ISC

## ✍️ Autor

Seu Nome / Ferraz Automação Industrial
