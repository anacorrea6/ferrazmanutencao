# 🔐 Checklist de Segurança para Produção

Antes de fazer deploy, verifique todos esses itens!

## 🔒 Segurança de Credenciais

- [ ] `.env` NÃO está commitado no git
- [ ] `.env.example` tem valores de exemplo FICTÍCIOS
- [ ] `JWT_SECRET` foi alterado (mínimo 32 caracteres)
- [ ] `DB_PASSWORD` é uma senha forte
- [ ] Nenhuma credencial está no código

## 🌐 Rede e CORS

- [ ] `ALLOWED_ORIGINS` está configurado apenas para seu domínio
- [ ] HTTPS está habilitado (certificado SSL/TLS)
- [ ] Rate limiting está ativo
- [ ] Firewall configurado

## 📊 Logs e Monitoramento

- [ ] Logs estão sendo coletados em `logs/`
- [ ] Sistema de alertas configurado
- [ ] Backup de logs automatizado
- [ ] Monitoramento de performance ativo

## 🗄️ Banco de Dados

- [ ] Backups automatizados habilitados
- [ ] Permissões de usuário DB restritivas
- [ ] Índices otimizados
- [ ] Queries em prepared statements (já implementado)
- [ ] SQL Injection protection verificada

## 📝 Logs de Auditoria

- [ ] Todas as ações críticas estão sendo logadas
- [ ] Request ID está sendo rastreado
- [ ] User ID registrado em mutações
- [ ] IP de origem registrado

## 🔐 Autenticação

- [ ] JWT implementado
- [ ] Refresh tokens configurados
- [ ] Token expiry configurado
- [ ] Senha hash com bcrypt (implementar)

## 📦 Dependências

- [ ] Todas as dependências verificadas para vulnerabilidades
```bash
npm audit
npm audit fix
```

- [ ] Dependências atualizadas regularmente
- [ ] Licenses verificadas (comercial/legal)

## 🚀 Deploy

- [ ] `NODE_ENV=production` configurado
- [ ] `npm ci` (não `npm install`) usado
- [ ] PM2 ou similar em produção
- [ ] Restart automático em falha
- [ ] Load balancer configurado

## 📱 API

- [ ] Versão de API definida (/v1/)
- [ ] Deprecation warnings em endpoints antigos
- [ ] Rate limiting por usuário
- [ ] Input validation em todos endpoints
- [ ] Output sanitization implementado

## 🧪 Testes

- [ ] Testes de segurança rodados
- [ ] Testes de carga realizados
- [ ] Testes de SQL Injection
- [ ] Testes de autenticação

## 📚 Documentação

- [ ] Swagger/OpenAPI atualizado
- [ ] README com setup instruções
- [ ] API documentation publicado
- [ ] Runbook de incidente criado

## 🆘 Resposta a Incidentes

- [ ] Processo de resposta a incidentes documentado
- [ ] Contatos de segurança definidos
- [ ] Plano de rollback preparado
- [ ] Comunicação com usuários planejada

---

**Quando tudo estiver marcado, seu backend está pronto para produção!** ✅
