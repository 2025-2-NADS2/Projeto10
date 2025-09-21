const db = require('../config/db');

class Campanha {
    constructor(cd_campanha, nome_campanha, meta_arrecadacao, inicio, fim) {
        this.cd_campanha = cd_campanha;
        this.nome_campanha = nome_campanha;
        this.meta_arrecadacao = meta_arrecadacao;
        this.inicio = inicio;
        this.fim = fim;
    }

    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM Campanha');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM Campanha WHERE cd_campanha = ?', [id]);
        return rows[0];
    }
    
    async save() {
        const sql = `
            INSERT INTO Campanha (nome_campanha, meta_arrecadacao, inicio, fim)
            VALUES (?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [this.nome_campanha, this.meta_arrecadacao, this.inicio, this.fim]);
        this.cd_campanha = result.insertId;
        return this;
    }
}

module.exports = Campanha;