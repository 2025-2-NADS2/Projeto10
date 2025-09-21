/Site-Instituto-Alma
├── src/
│ ├── config/
│ │ └── db.js         # Configuração da conexão com o banco de dados
│ ├── controllers/
│ │ ├── authController.js   # Lógica de autenticação (login, cadastro)
│ │ └── doacaoController.js # Lógica de doação
│ ├── models/
│ │ └── Usuario.js    # Representação da tabela Usuario
│ ├── routes/
│ │ ├── authRoutes.js     # Rotas para autenticação
│ │ └── doacaoRoutes.js   # Rotas para doações
│ └── server.js       # Arquivo principal do servidor
└── package.json
└── .env              # Variáveis de ambiente