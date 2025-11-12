Este repositório contém o projeto completo do site institucional para o \*\*Instituto Alma\*\*, desenvolvido como Projeto Interdisciplinar (PI).

\#\# 🎯 Visão Geral e Objetivos

\* \*\*Objetivo Geral:\*\* Criar um site institucional funcional, responsivo, com conteúdo dinâmico e integração para doações online.  
\* \*\*Funcionalidades Core:\*\* Apresentar o Instituto, divulgar eventos, criar um portal de doações, garantir transparência (relatórios), e estabelecer uma ouvidoria.  
\* \*\*Requisitos:\*\* O projeto é conduzido por alunos do 2º semestre de Análise e Desenvolvimento de Sistemas.

\---

\#\# 🚀 Tecnologias e Links de Deploy

| Camada | Tecnologia | Status de Deploy | Link de Acesso |  
| :--- | :--- | :--- | :--- |  
| \*\*Frontend (Site)\*\* | React, JavaScript, HTML5, CSS3, Bootstrap | ✅ Publicado | \`https://dev.to/lilxyzz/netlify-vs-vercel-2024-free-hosting-face-off-oo9\` |  
| \*\*Backend (API)\*\* | Node.js, Express, C\#, MySQL | ✅ Ativo | \`https://docs.railway.com/maturity/compare-to-render\` |  
| \*\*Serviços\*\* | JWT, Multer, Nodemailer | ✅ Implementados | N/A |

\---

\#\# 📁 Estrutura do Repositório

A organização do projeto separa o código-fonte (\`src/\`) dos demais ativos e documentação.

Raiz/ ├── documentos/ \# Documentação do PI, diagramas, e protótipos (Figma). ├── executáveis/ \# Builds finais do projeto. ├── imagens/ \# Assets visuais brutos. ├── src/ │ ├── Backend/ \# Código da API REST (Node.js/Express) │ └── Frontend/ \# Código do Cliente (React) ├── .gitignore \# Ignora node\_modules, .env, e pastas de build. └── README.md \# ESTE ARQUIVO

\---

\#\# 🛠️ Guia de Instalação e Execução Local

Para rodar o projeto localmente, inicie o Backend (API) e o Frontend (Site) separadamente.

\#\#\# 1\. Backend (API)

| Ação | Comando/Instrução |  
| :--- | :--- |  
| \*\*Acesso\*\* | \`cd src/Backend\` |  
| \*\*Instalação\*\* | \`npm install\` |  
| \*\*Configuração\*\* | Crie o arquivo \*\*\`.env\`\*\* (ver modelo abaixo) e configure as credenciais do MySQL local. |  
| \*\*Execução\*\* | \`npm run dev\` (API sobe em \`http://localhost:4000\`) |

\#\#\# 2\. Frontend (Site)

| Ação | Comando/Instrução |  
| :--- | :--- |  
| \*\*Acesso\*\* | \`cd src/Frontend\` |  
| \*\*Instalação\*\* | \`npm install\` |  
| \*\*Ajuste da URL\*\* | A \`API\_BASE\_URL\` no \`config.js\` deve ser definida como \*\*\`http://localhost:4000\`\*\* para testes locais. |  
| \*\*Execução\*\* | \`npm start\` (O site será aberto em \`http://localhost:3000\`) |

\---

\#\# ⚙️ Modelo de Configuração (.env)

O arquivo \*\*\`.env\`\*\* deve ser criado na pasta \*\*\`src/Backend\`\*\* e preenchido.

\`\`\`ini  
\# SERVER  
SERVER\_PORT=4000  
NODE\_ENV=development  
FRONTEND\_URL=\[URL\_PÚBLICA\_DO\_NETLIFY\_OU\_http://localhost:3000\]

\# DATABASE (MySQL Local)  
DB\_HOST=localhost  
DB\_USER=root  
DB\_PASS=\[SUA\_SENHA\_MYSQL\]  
DB\_NAME=alma

\# JWT  
JWT\_SECRET=\[SUA\_CHAVE\_SECRETA\_FORTE\]  
JWT\_EXPIRES\_IN=1d

\# EMAIL (Nodemailer \- Para Ouvidoria)  
MAIL\_HOST=smtp.gmail.com  
MAIL\_PORT=587  
MAIL\_USER=\[SEU\_EMAIL\_GMAIL\]  
MAIL\_PASS=\[SUA\_SENHA\_DE\_APP\_GMAIL\]

\# 🧪 Rotas e Testes da API (Backend)

Este documento lista as rotas principais da API do Instituto Alma, que é estruturada para gerenciar todas as funcionalidades dinâmicas do site (Eventos, Usuários, Login, etc.).

\---

\#\# 🔒 Rotas de Acesso e Gestão

A URL base para todas as rotas da API é:  
\* \*\*Produção (Deploy):\*\* \`https://docs.railway.com/maturity/compare-to-render\`  
\* \*\*Local:\*\* \`http://localhost:4000\`

| Módulo | Funcionalidade | Método | Rota | Requer Autorização (JWT)? |  
| :--- | :--- | :--- | :--- | :--- |  
| \*\*Autenticação\*\* | Login (Retorna Token) | \`POST\` | \`/api/auth/login\` | Não |  
| \*\*Eventos\*\* | Criar/Upload (Admin) | \`POST\` | \`/api/events\` | Sim |  
| \*\*Eventos\*\* | Listar todos | \`GET\` | \`/api/events\` | Não |  
| \*\*Usuário\*\* | Ver Perfil | \`GET\` | \`/api/users/me\` | Sim |  
| \*\*Ouvidoria\*\* | Envio de Feedback | \`POST\` | \`/api/feedback\` | Não |  
| \*\*Health Check\*\* | Status do Sistema | \`GET\` | \`/health\` | Não |

\---

\#\# 🛡️ Requisitos de Segurança e Qualidade

O projeto foi desenvolvido seguindo os seguintes padrões de qualidade e segurança:

\* \*\*HTTPS:\*\* Proteção de dados sensíveis garantida (HTTPS) em ambiente de produção.  
\* \*\*Autenticação:\*\* Sistema de login para área administrativa com rotas protegidas por \*\*JWT\*\* (JSON Web Tokens).  
\* \*\*Design:\*\* Interface amigável (\`UX/UI\`).  
\* \*\*Responsividade:\*\* O site é totalmente responsivo para dispositivos móveis.  
