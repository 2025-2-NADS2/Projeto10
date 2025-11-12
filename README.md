# 💻 Portal Interativo Instituto Alma 💚

## 🎓 Portal Interativo - Instituto Alma | Grupo 10: Os Três Mosqueteiros


[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)](url-do-seu-projeto)
[![Licença](https://img.shields.io/badge/Licença-CC%20BY%204.0-green)](./LICENSE.md)
[![Stack](https://img.shields.io/badge/Stack-Fullstack-red)](url-do-seu-projeto)


## Integrantes: <a href="https://www.linkedin.com/in/bianca-morais-655464212">Bianca Ferreira Morais </a>, <a href="https://www.linkedin.com/in/pedro-cheles-lopes-42b783224/)"> Pedro Cheles Lopes </a>, <a href="https://www.linkedin.com/in/murillo-lueders-azeredo-diniz-costa-07638a301/">Murillo Lueders Azeredo 

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
