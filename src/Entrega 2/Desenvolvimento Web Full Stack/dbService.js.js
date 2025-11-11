const mysql = require('mysql2/promise');


const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root', 
    password: '', 
    database: 'instituto_alma_db'
};


async function getDadosDoBanco() {
    let connection;
    try {
    
        connection = await mysql.createConnection(dbConfig);
        console.log("Conexão MySQL estabelecida com sucesso.");

     
        const sqlAtividades = "SELECT id, titulo, data_inicio, descricao FROM atividades ORDER BY data_inicio DESC";
        const sqlDocumentos = "SELECT id, nome_documento, data_publicacao, link_arquivo FROM documentos ORDER BY data_publicacao DESC";
        
        
       
        const [listaAtividades] = await connection.execute(sqlAtividades);
        const [listaDocumentos] = await connection.execute(sqlDocumentos);

      
        return {
            atividades: listaAtividades,
            documentos: listaDocumentos
        };

    } catch (error) {
        console.error("Erro ao acessar o banco de dados:", error);
     
        return { atividades: [], documentos: [] };
    } finally {
   
        if (connection) {
            await connection.end();
            console.log("Conexão MySQL encerrada.");
        }
    }
}

module.exports = {
    getDadosDoBanco
};
