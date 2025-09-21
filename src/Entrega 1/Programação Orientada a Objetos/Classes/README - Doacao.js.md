const db = require('../config/db');

class Doacao {
    constructor(cd_doacao, cd_cliente, cd_campanha, nome_doacao, tipo_doacao, forma_arrecadacao, status_arrecadacao) {
        this.cd_doacao = cd_doacao;
        this.cd_cliente = cd_cliente;
        this.cd_campanha = cd_campanha;
        this.nome_doacao = nome_doacao;
        this.tipo_doacao = tipo_doacao;
        this.forma_arrecadacao = forma_arrecadacao;
        this.status_arrecadacao = status_arrecadacao || 'Pendente';
    }

    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM Doacao');
        return rows;
    }

    static async findByUserId(userId) {
        const [rows] = await db.execute('SELECT * FROM Doacao WHERE cd_cliente = ?', [userId]);
        return rows;
    }

    async save() {
        const sql = `
            INSERT INTO Doacao (cd_cliente, cd_campanha, nome_doacao, tipo_doacao, forma_arrecadacao, status_arrecadacao)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [
            this.cd_cliente,
            this.cd_campanha,
            this.nome_doacao,
            this.tipo_doacao,
            this.forma_arrecadacao,
            this.status_arrecadacao
        ]);
        this.cd_doacao = result.insertId;
        return this;
    }
}

module.exports = Doacao;