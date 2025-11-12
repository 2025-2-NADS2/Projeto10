# 💻 Portal Interativo Instituto Alma 💚

## 🎓 Portal Interativo - Instituto Alma | Grupo 10: Os Três Mosqueteiros


[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)](url-do-seu-projeto)
[![Licença](https://img.shields.io/badge/Licença-CC%20BY%204.0-green)](./LICENSE.md)
[![Stack](https://img.shields.io/badge/Stack-Fullstack-red)](url-do-seu-projeto)


## Integrantes: <a href="https://www.linkedin.com/in/bianca-morais-655464212">Bianca Ferreira Morais </a>, Enzo Mancio, <a href="https://www.linkedin.com/in/pedro-cheles-lopes-42b783224/)"> Pedro Cheles Lopes </a>, <a href="https://www.linkedin.com/in/murillo-lueders-azeredo-diniz-costa-07638a301/">Murillo Lueders Azeredo 

## Professores Orientadores: <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar </a>, <a href="https://www.linkedin.com/in/victorbarq/">Victor Quiroz</a>, <a href="https://www.linkedin.com/in/jbuesso/">José Carlos, <a href="https://www.linkedin.com/in/ronaldo-araujo-pinto-3542811a/">Ronaldo Araujo Pinto, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10//">Eduardo Savino Gomes
## Descrição

---

## 📝 Sobre o Projeto: Introdução e Propósito

Este projeto **Fullstack** (React, Node.js, MySQL) consiste no desenvolvimento de um **Portal Interativo** para a Organização Não Governamental (ONG) **Instituto Alma**.

### Problema e Solução
A plataforma visa resolver o desafio de **aproximação e engajamento** entre o Instituto Alma e seus potenciais apoiadores.

* **Objetivo:** Criar um ambiente online que promova **transparência e confiança**.
* **Diferencial:** Além de apresentar as causas, a nova plataforma integra um fluxo de doação simples, rápido e seguro (via **API Stripe**), permitindo que os doadores acompanhem como e onde os recursos estão sendo aplicados.

Dessa forma, fortalecemos o vínculo com os apoiadores e incentivamos a participação e a contribuição ativa para a transformação de vidas.

---

## 🛠️ Tecnologias Utilizadas (Stack)

O projeto é desenvolvido com uma arquitetura **Fullstack** e utiliza as seguintes tecnologias:

### Frontend
| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca JavaScript para construção da interface de usuário (UI). |

### Backend
| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução para o servidor. |
| **Express.js** | Framework web para a criação das APIs REST. |

### Banco de Dados & Pagamentos
| Tecnologia | Descrição |
| :--- | :--- |
| **MySQL** | Sistema de gerenciamento de banco de dados relacional. |
| **Stripe API** | Integração para processamento de pagamentos seguro (doações). |

---

## ✨ Funcionalidades do Portal

As principais features implementadas no Portal Interativo incluem:

* ✅ **Doação Segura:** Processamento de doações via Stripe, garantindo segurança e confiabilidade.
* 📊 **Transparência:** Acompanhamento simplificado de prestação de contas.
* 📰 **Conteúdo Dinâmico:** Apresentação detalhada das causas e iniciativas apoiadas pela ONG.
* 📱 **Responsividade:** Design adaptativo para todos os dispositivos.

---

## ⚙️ Configuração para Desenvolvimento (Setup)

Para rodar o projeto em seu ambiente de desenvolvimento local (`localhost`), você precisará do **Node.js** e do **MySQL Server** instalados.

### 1. Estrutura de Pastas (Fullstack)
O projeto adota uma estrutura modularizada, separando claramente o Frontend do Backend:

Raiz/
|
|--> documentos/
|   |          
|   |   
|   |--> Documentação.docx      
|
|--> executáveis/
|   |--> windows/                
|   |--> android/                
|   |--> HTML/                  
|
|--> imagens/                   
|
|--> src/                        
|   |
|   |--> Backend/              
|   |   |--> node_modules/       
|   |   |--> config/             
|   |   |--> routes/            
|   |   |--> controllers/       
|   |   |--> models/             
|   |   |--> server.js (ou index.js) 
|   |   |--> package.json
|   |   |
|   |--> Frontend/             
|   |   |--> node_modules/      
|   |   |--> public/           
|   |   |--> src/                
|   |   |   |--> assets/         
|   |   |   |--> components/
|   |   |   |--> pages/
|   |   |   |--> App.js
|   |   |--> package.json
|
|--> .gitignore                  
|--> readme.md                  
=======
## 🎯 Visão Geral e Objetivos

* **Objetivo Geral:** Criar um site institucional funcional, responsivo, com conteúdo dinâmico e integração para doações online.
* **Funcionalidades Core:** Apresentar o Instituto, divulgar eventos, criar um portal de doações, garantir transparência (relatórios), e estabelecer uma ouvidoria.
* **Requisitos:** O projeto é conduzido por alunos do 2º semestre de Análise e Desenvolvimento de Sistemas.

---

## 🚀 Tecnologias e Links de Deploy

| Camada | Tecnologia | Status de Deploy | Link de Acesso |
| :--- | :--- | :--- | :--- |
| **Frontend (Site)** | React, JavaScript, HTML5, CSS3, Bootstrap | ✅ Publicado | `https://dev.to/lilxyzz/netlify-vs-vercel-2024-free-hosting-face-off-oo9` |
| **Backend (API)** | Node.js, Express, C#, MySQL | ✅ Ativo | `https://docs.railway.com/maturity/compare-to-render` |
| **Serviços** | JWT, Multer, Nodemailer | ✅ Implementados | N/A |

---

## 📁 Estrutura do Repositório

A organização do projeto separa o código-fonte (`src/`) dos demais ativos e documentação.


Raiz/ ├── documentos/ # Documentação do PI, diagramas, e protótipos (Figma). ├── executáveis/ # Builds finais do projeto. ├── imagens/ # Assets visuais brutos. ├── src/ │ ├── Backend/ # Código da API REST (Node.js/Express) │ └── Frontend/ # Código do Cliente (React) ├── .gitignore # Ignora node_modules, .env, e pastas de build. └── README.md # ESTE ARQUIVO

---

## 🛠️ Guia de Instalação e Execução Local

Para rodar o projeto localmente, inicie o Backend (API) e o Frontend (Site) separadamente.

### 1. Backend (API)

| Ação | Comando/Instrução |
| :--- | :--- |
| **Acesso** | `cd src/Backend` |
| **Instalação** | `npm install` |
| **Configuração** | Crie o arquivo **`.env`** (ver modelo abaixo) e configure as credenciais do MySQL local. |
| **Execução** | `npm run dev` (API sobe em `http://localhost:4000`) |

### 2. Frontend (Site)

| Ação | Comando/Instrução |
| :--- | :--- |
| **Acesso** | `cd src/Frontend` |
| **Instalação** | `npm install` |
| **Ajuste da URL** | A `API_BASE_URL` no `config.js` deve ser definida como **`http://localhost:4000`** para testes locais. |
| **Execução** | `npm start` (O site será aberto em `http://localhost:3000`) |

---

## ⚙️ Modelo de Configuração (.env)

O arquivo **`.env`** deve ser criado na pasta **`src/Backend`** e preenchido.

```ini
# SERVER
SERVER_PORT=4000
NODE_ENV=development
FRONTEND_URL=[URL_PÚBLICA_DO_NETLIFY_OU_http://localhost:3000]

# DATABASE (MySQL Local)
DB_HOST=localhost
DB_USER=root
DB_PASS=[SUA_SENHA_MYSQL]
DB_NAME=alma

# JWT
JWT_SECRET=[SUA_CHAVE_SECRETA_FORTE]
JWT_EXPIRES_IN=1d

# EMAIL (Nodemailer - Para Ouvidoria)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=[SEU_EMAIL_GMAIL]
MAIL_PASS=[SUA_SENHA_DE_APP_GMAIL]

# 🧪 Rotas e Testes da API (Backend)

Este documento lista as rotas principais da API do Instituto Alma, que é estruturada para gerenciar todas as funcionalidades dinâmicas do site (Eventos, Usuários, Login, etc.).

---

## 🔒 Rotas de Acesso e Gestão

A URL base para todas as rotas da API é:
* **Produção (Deploy):** `https://docs.railway.com/maturity/compare-to-render`
* **Local:** `http://localhost:4000`

| Módulo | Funcionalidade | Método | Rota | Requer Autorização (JWT)? |
| :--- | :--- | :--- | :--- | :--- |
| **Autenticação** | Login (Retorna Token) | `POST` | `/api/auth/login` | Não |
| **Eventos** | Criar/Upload (Admin) | `POST` | `/api/events` | Sim |
| **Eventos** | Listar todos | `GET` | `/api/events` | Não |
| **Usuário** | Ver Perfil | `GET` | `/api/users/me` | Sim |
| **Ouvidoria** | Envio de Feedback | `POST` | `/api/feedback` | Não |
| **Health Check** | Status do Sistema | `GET` | `/health` | Não |

---

## 🛡️ Requisitos de Segurança e Qualidade

O projeto foi desenvolvido seguindo os seguintes padrões de qualidade e segurança:

* **HTTPS:** Proteção de dados sensíveis garantida (HTTPS) em ambiente de produção.
* **Autenticação:** Sistema de login para área administrativa com rotas protegidas por **JWT** (JSON Web Tokens).
* **Design:** Interface amigável (`UX/UI`).
* **Responsividade:** O site é totalmente responsivo para dispositivos móveis.
>>>>>>> b0458b1d8610a2662f8a44eb51b0d37acb63080c
