const Usuario = require('./Usuario');
const db = require('../config/db');

class Admin extends Usuario {
    constructor(cd_cliente, nome_completo, telefone, cpf, cep, nome_usuario, senha, email, is_admin = true) {
        super(cd_cliente, nome_completo, telefone, cpf, cep, nome_usuario, senha, email);
        this.is_admin = is_admin;
    }

    // Método para buscar um administrador por e-mail e garantir que ele tem privilégios de adm
    static async findAdminByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM Usuario WHERE email = ? AND is_admin = TRUE', [email]);
        return rows[0];
    }

    // Método para gerenciar conteúdo dinâmico
    static async gerenciarConteudo(acao, dados) {
        try {
            if (acao === 'adicionar') {
                // Lógica para adicionar uma nova notícia, campanha, etc.
                const sql = `INSERT INTO Noticias (titulo_noticia, conteudo) VALUES (?, ?)`;
                const [result] = await db.execute(sql, [dados.titulo, dados.conteudo]);
                return { success: true, message: 'Conteúdo adicionado com sucesso.', id: result.insertId };
            } else if (acao === 'atualizar') {
                // Lógica para atualizar um conteúdo existente
                const sql = `UPDATE Noticias SET titulo_noticia = ?, conteudo = ? WHERE cd_noticias = ?`;
                const [result] = await db.execute(sql, [dados.titulo, dados.conteudo, dados.id]);
                return { success: true, message: 'Conteúdo atualizado com sucesso.' };
            } else if (acao === 'remover') {
                // Lógica para remover um conteúdo
                const sql = `DELETE FROM Noticias WHERE cd_noticias = ?`;
                const [result] = await db.execute(sql, [dados.id]);
                return { success: true, message: 'Conteúdo removido com sucesso.' };
            }
        } catch (error) {
            console.error('Erro ao gerenciar conteúdo:', error);
            return { success: false, message: 'Erro ao gerenciar conteúdo.' };
        }
    }
}

module.exports = Admin;
