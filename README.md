FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://www.google.com/search?q=https://encrypted-tbn0.gstatic.com/images%3Fq%3Dtbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeGJVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE%26usqp%3DCAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

Portal Interativo Instituto Alma

Grupo 10 / Os Três Mosqueteiros

Integrantes

<a href="https://www.linkedin.com/in/bianca-morais-655464212/">Bianca Morais</a>, <a href="https://www.linkedin.com/in/victorbarq/">Enzo Mancio</a>, <a href="https://www.linkedin.com/in/murillo-lueders-azeredo-diniz-costa-07638a301/">Murillo Lueders</a>, <a href="https://www.linkedin.com/in/victorbarq/">Pedro Cheles </a>

Professores Orientadores

<a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino Gomes</a>, <a href="https://www.linkedin.com/in/francisco-escobar/"> Francisco de Souza Escobar </a>, <a href="https://www.linkedin.com/in/jbuesso/">José Carlos Buesso Junior</a>, <a href="https://www.linkedin.com/in/ronaldo-araujo-pinto-3542811a/">Ronaldo Araujo Pinto</a>, <a href="https://www.linkedin.com/in/victorbarq/">Victor Bruno Alexander Rosetti de Quiroz</a>

Descrição

<p align="center">
<!-- Imagem removida pois o link é local e o texto era irrelevante. -->
<small><i>Projeto Fullstack (React, Node.js, MySQL) para a ONG Instituto Alma.</i></small>
</p>

Estamos desenvolvendo um site para uma ONG com o objetivo de aproximar as pessoas do trabalho realizado pela instituição. A nova plataforma vai permitir que visitantes conheçam melhor as causas que a ONG apoia, acompanhem campanhas ativas e façam doações de forma simples, rápida e segura (utilizando a API Stripe).

Mais do que facilitar o apoio, o site foi pensado para promover transparência e confiança. Cada doação poderá ser acompanhada de perto, mostrando como e onde os recursos estão sendo aplicados. Dessa forma, queremos fortalecer o vínculo entre a ONG e seus apoiadores, incentivando mais pessoas a participarem e contribuírem para transformar vidas.





🛠 Estrutura de Pastas (Fullstack)

A estrutura reflete a arquitetura do projeto:

-Raiz




|




|-->documentos




   |-->antigos




   |Documentação.docx




|-->imagens




|-->instituto-alma-backend/ (Servidor Node.js, Express, MySQL e Stripe)




   |-->config/ (Conexão com Banco de Dados)




   |-->controllers/ (Lógica de Negócio e Pagamento)




   |-->routes/ (Definição das APIs REST)




   |-->server.js




|-->instituto-alma-frontend/ (Aplicação React)




   |-->src/ (Código React, Componentes, Pages)




|readme.md



💻 Configuração para Desenvolvimento

Para rodar este projeto em ambiente de desenvolvimento (localhost), você precisa ter o Node.js e o MySQL Server instalados.

1. Banco de Dados

Crie o banco de dados no MySQL (ex: instituto_alma_db) e execute os scripts SQL para criar a tabela de doações:

CREATE TABLE doacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stripe_id VARCHAR(255) NOT NULL UNIQUE,
    valor_reais DECIMAL(10, 2) NOT NULL,
    status_doacao VARCHAR(50) NOT NULL, -- Ex: 'aprovada', 'pendente', 'falhou'
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


2. Variáveis de Ambiente (Backend)

No diretório instituto-alma-backend/, defina as chaves de API do Stripe (Modo de Teste) e as credenciais do MySQL no terminal (ou em um arquivo .env localmente):

# Defina a chave secreta do Stripe (sk_test_...)
export STRIPE_SECRET_KEY="SUA_CHAVE_SECRETA_sk_test_AQUI"
# Defina a chave secreta do Webhook (whsec_...)
export STRIPE_WEBHOOK_SECRET="SUA_CHAVE_WEBHOOK_whsec_AQUI"

# Credenciais do MySQL (Ajuste conforme seu db.js)
export DB_HOST="localhost"
export DB_USER="root"
export DB_PASSWORD="sua_senha"
export DB_NAME="instituto_alma_db"


3. Instalação de Dependências

Instale as dependências para ambos os projetos. Certifique-se de executar npm install nas duas pastas.

# Dentro de instituto-alma-backend/
npm install

# Dentro de instituto-alma-frontend/
npm install


4. Inicialização dos Servidores

O projeto deve ser iniciado em dois terminais separados.

Terminal

Pasta

Comando

URL (Padrão)

Terminal 1 (Backend)

instituto-alma-backend

npm start (ou npm run dev)

http://localhost:4000

Terminal 2 (Frontend)

instituto-alma-frontend

npm start (ou npm run dev)

http://localhost:5173

Para testar o Webhook de pagamento (necessário para a atualização final do status no MySQL), inicie o Stripe CLI em um terceiro terminal:

# Terminal 3: Webhook Listener
stripe listen --forward-to localhost:4000/api/stripe-webhook


📋 Licença/License

Licença Creative Commons Atribuição 4.0 Internacional

Este trabalho está licenciado sob uma Licença Creative Commons Atribuição 4.0 Internacional (CC BY 4.0).

Você é livre para:

Compartilhar — copiar e redistribuir o material em qualquer suporte ou formato.

Adaptar — remixar, transformar e criar a partir do material para qualquer fim, mesmo que comercial.

Para mais detalhes, veja a licença completa.

🎓 Referências

Aqui estão as referências usadas no projeto.

https://github.com/iuricode/readme-template

https://github.com/gabrieldejesus/readme-model

https://chooser-beta.creativecommons.org/

https://freesound.org/

https://www.toptal.com/developers/gitignore

Músicas por: <a href="https://freesound.org/people/DaveJf/sounds/616544/"> DaveJf </a> e <a href="https://freesound.org/people/DRFX/sounds/338986/"> DRFX </a> ambas com Licença CC 0.

Documentação Oficial Stripe API (Para integração de pagamentos).
