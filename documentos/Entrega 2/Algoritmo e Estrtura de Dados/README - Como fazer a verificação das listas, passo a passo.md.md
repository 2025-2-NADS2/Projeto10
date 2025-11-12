# 🧩 Projeto Instituto Alma — Estrutura de Dados

Este projeto demonstra a leitura de dados armazenados em um banco **MySQL**, utilizando **Node.js** e o conceito de **modelagem e organização modular** em JavaScript.  
As informações lidas são referentes às **atividades do Instituto Alma** e seus **documentos de transparência**.

---

## 📋 Pré-requisitos

Antes de rodar o projeto, certifique-se de que possui instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- Um editor de código (ex: VS Code)

---

## ⚙️ Configuração do Banco de Dados

1. Crie um banco de dados chamado:
   ```sql
   CREATE DATABASE instituto_alma_db;
   ```

2. Crie as tabelas necessárias:

   ```sql
   CREATE TABLE atividades (
     id INT AUTO_INCREMENT PRIMARY KEY,
     titulo VARCHAR(255) NOT NULL,
     descricao TEXT NOT NULL,
     imagem_url_1 VARCHAR(255),
     imagem_url_2 VARCHAR(255),
     imagem_url_3 VARCHAR(255),
     imagem_url_4 VARCHAR(255)
   );
   ```

   ```sql
   CREATE TABLE documentos (
     id INT AUTO_INCREMENT PRIMARY KEY,
     titulo VARCHAR(255) NOT NULL,
     arquivo_url VARCHAR(255) NOT NULL
   );
   ```

3. Insira alguns registros para teste, por exemplo:
   ```sql
   INSERT INTO atividades (titulo, descricao, imagem_url_1) 
   VALUES ('Ação Solidária', 'Entrega de alimentos para famílias em vulnerabilidade.', 'imagem1.jpg');
   ```

---

## 📁 Estrutura de Pastas

```
📦 Estutura de Dados
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 db.config.js
 ┣ 📜 data.model.js
 ┣ 📜 Atividade.js
 ┣ 📜 Documento.js
 ┣ 📜 main.js
 ┣ 📜 Transparencia.js
 ┗ 📜 test-db.js
```

---

## 🔐 Arquivo `.env`

Crie um arquivo chamado **.env** na raiz do projeto e adicione:

```
MYSQL_URL=mysql://app_user@127.0.0.1:3306/instituto_alma_db
```

> 💡 O usuário e senha devem corresponder às credenciais do seu MySQL local.  
> Caso use `root`, ajuste o valor da URL.

---

## 📦 Instalação de Dependências

Execute no terminal:

```bash
npm install mysql2 dotenv
```

---

## 🚀 Como Executar o Projeto

1. **Teste a conexão com o banco:**
   ```bash
   node -r dotenv/config -e "require('./data.model')" dotenv_config_path=.env
   ```
   Se estiver tudo certo, aparecerá:
   ```
   ✅ Conexão MySQL estabelecida com sucesso!
   ```

2. **Execute o projeto principal:**
   ```bash
   node main.js
   ```

   A saída esperada é algo como:

   ```
   🚀 Iniciando demonstração da Estrutura de Dados...
   ======= NOSSAS ATIVIDADES (Lidas do DB) =======
   🗓️ 12/11/2025 - PROJETO MATERNAR
   ...
   ======= DOCUMENTOS DE TRANSPARÊNCIA (Lidos do DB) =======
   📄 Estatuto do Instituto Alma (Arquivo Público) - URL: estatuto.pdf
   ✅ Execução finalizada.
   ```

---

## 🧠 Explicação dos Arquivos

| Arquivo | Função |
|----------|--------|
| **main.js** | Arquivo principal; executa a demonstração e exibe os dados. |
| **data.model.js** | Responsável por acessar o banco e buscar as informações. |
| **db.config.js** | Configura a conexão MySQL usando `dotenv`. |
| **Atividade.js** | Define a estrutura (classe) de uma atividade. |
| **Documento.js** | Define a estrutura (classe) de um documento. |
| **Transparencia.js** | Script complementar de leitura dos documentos. |
| **.env** | Guarda de forma segura a URL do banco de dados. |

---

## 🧩 Erros Comuns

| Erro | Solução |
|------|----------|
| ❌ `ER_BAD_FIELD_ERROR` | Verifique se o nome das colunas no SELECT correspondem aos do banco. |
| ❌ `MYSQL_URL não encontrada` | Confirme se o `.env` está criado e no mesmo diretório do projeto. |
| ❌ `Access denied for user` | Ajuste o usuário e senha da URL de conexão MySQL. |

---

## 👨‍🏫 Dica para Avaliação

> Basta abrir o projeto no VS Code, configurar o `.env`, rodar `npm install` e depois `node main.js`.  
> O script fará a leitura automática dos dados e exibirá no console.

---

## 📚 Autor
**Instituto Alma — Projeto de Estrutura de Dados**  
Desenvolvido por Bianca Morais.
