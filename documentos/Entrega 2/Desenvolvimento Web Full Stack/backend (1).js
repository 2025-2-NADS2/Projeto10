// dbService.js
const mysql = require('mysql2/promise');

// 1. Configuração da Conexão (Ajuste com seus dados)
const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root', // Use o seu usuário do Workbench
    password: '', // Use a sua senha
    database: 'instituto_alma_db'
};

// 2. Função principal para obter a conexão e as listas
async function getDadosDoBanco() {
    let connection;
    try {
        // Conectar ao banco de dados
        connection = await mysql.createConnection(dbConfig);
        console.log("Conexão MySQL estabelecida com sucesso.");

        // Consultas SQL: A ordem (ORDER BY) é importante
        const sqlAtividades = "SELECT id, titulo, data_inicio, descricao FROM atividades ORDER BY data_inicio DESC";
        const sqlDocumentos = "SELECT id, nome_documento, data_publicacao, link_arquivo FROM documentos ORDER BY data_publicacao DESC";
        
        // 3. Execução das Consultas e Geração das Listas
        
        // Resultados virão como [rows, fields]. Usamos apenas 'rows'.
        const [listaAtividades] = await connection.execute(sqlAtividades);
        const [listaDocumentos] = await connection.execute(sqlDocumentos);

        // 4. Retorna as listas de objetos JavaScript
        return {
            atividades: listaAtividades,
            documentos: listaDocumentos
        };

    } catch (error) {
        console.error("Erro ao acessar o banco de dados:", error);
        // Em caso de erro, retorne listas vazias ou lance o erro.
        return { atividades: [], documentos: [] };
    } finally {
        // Garantir que a conexão seja fechada
        if (connection) {
            await connection.end();
            console.log("Conexão MySQL encerrada.");
        }
    }
}

module.exports = {
    getDadosDoBanco
};