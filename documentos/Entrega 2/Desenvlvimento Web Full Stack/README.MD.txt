# 📚 README.md — Instituto Alma API

# 🌱 Instituto Alma – API Oficial
API RESTful completa construída em **Node.js + Express**, com suporte para **MySQL/PostgreSQL** (configurada para ser Render-ready), autenticação JWT, e módulos de gestão.

## ✅ Funcionalidades Principais
* **Usuários e Autenticação:** Gestão completa de perfis de usuário, Login, Logout, Sessões.
* **Segurança:** Implementação de JWT, BCrypt, Rate-limit, Helmet, e CORS.
* **Módulos de Gestão:** Doações, Eventos, Atividades, Transparência, Feedback, e Administração.
* **Serviços:** Uploads (Multer) para Imagens, Vídeos, e Documentos; Nodemailer para e-mail.
* **Monitoramento:** Sistema de Logs de Auditoria (`audit_logs`) e Health Check.

---

## 🚀 Tecnologias e Dependências
* **Node.js**
* **Express.js**
* **Banco de Dados:** MySQL ou PostgreSQL
* **Autenticação:** JWT (JSON Web Tokens) e BCrypt
* **Uploads:** Multer
* **Segurança:** Helmet, Express Rate Limit, CORS
* **Outros:** Nodemailer, UUID, Logger, Auditoria

---

## 📁 Estrutura do Código (src/Backend)

```bash
src/
├── app.js
├── server.js               # Arquivo principal que inicializa o servidor
├── healthCheck.js
├── config/                 # Configurações de serviços e DB
│   ├── db.js
│   └── uploadConfig.js
├── middleware/             # Lógicas que interceptam as requisições
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── securityMiddlewares.js
├── modules/                # Módulos de domínio (CRUD e Rotas)
│   ├── auth/               # Gerencia autenticação e sessões
│   ├── users/
│   ├── uploads/
│   ├── events/
│   ├── donations/
│   └── admin/
├── public/                 # Arquivos acessíveis publicamente (Uploads)
└── utils/                  # Utilitários (Logger, Audit, DB)