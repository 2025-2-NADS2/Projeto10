const mysql = require('mysql2/promise');

// 1. Configuração da Pool usando variáveis de ambiente
const dbPool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    // ⚠️ MELHORIA: Sempre prefira senhas fortes e evite credenciais vazias em produção!
    password: process.env.DB_PASSWORD || '', 
    database: process.env.DB_NAME || 'instituto_alma_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/**
 * Tenta estabelecer uma conexão inicial com o banco de dados.
 * Se falhar, registra o erro e encerra o processo do servidor.
 */
async function testDbConnection() {
    try {
        const connection = await dbPool.getConnection();
        console.log("✅ Conexão com o banco de dados MySQL estabelecida com sucesso!");
        connection.release(); // Libera a conexão para a pool
    } catch (err) {
        console.error("ERRO GRAVE: Falha ao conectar ao banco de dados MySQL!");
        console.error("Detalhes do erro:", err.message);
        console.error("---");
        console.error("Verifique se o seu serviço MySQL/MariaDB está rodando.");
        console.error("Verifique as credenciais (HOST, USER, PASSWORD, DB_NAME).");
        

        process.exit(1);
    }
}

// Executa a função de teste ao iniciar o módulo
testDbConnection();

// Exporta a pool para ser usada nas outras partes do seu código
module.exports = dbPool;