const db = require('../config/db');

class Relatorio {
    constructor(cd_relatorio, cd_campanha, tipo_relatorio, valor_gasto, data_relatorio, caminho_pdf) {
        this.cd_relatorio = cd_relatorio;
        this.cd_campanha = cd_campanha;
        this.tipo_relatorio = tipo_relatorio;
        this.valor_gasto = valor_gasto;
        this.data_relatorio = data_relatorio;
        this.caminho_pdf = caminho_pdf;
    }

    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM Relatorio');
        return rows;
    }

    static async findByCampaign(campaignId) {
        const [rows] = await db.execute('SELECT * FROM Relatorio WHERE cd_campanha = ?', [campaignId]);
        return rows;
    }

    async save() {
        const sql = `
            INSERT INTO Relatorio (cd_campanha, tipo_relatorio, valor_gasto, data_relatorio, caminho_pdf)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [
            this.cd_campanha,
            this.tipo_relatorio,
            this.valor_gasto,
            this.data_relatorio,
            this.caminho_pdf
        ]);
        this.cd_relatorio = result.insertId;
        return this;
    }
}

module.exports = Relatorio;