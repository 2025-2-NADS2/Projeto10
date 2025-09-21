const db = require('../config/db');

class Noticia {
    constructor(cd_noticias, cd_campanha, titulo_noticia, data_noticia, autor, conteudo, imagem) {
        this.cd_noticias = cd_noticias;
        this.cd_campanha = cd_campanha;
        this.titulo_noticia = titulo_noticia;
        this.data_noticia = data_noticia;
        this.autor = autor;
        this.conteudo = conteudo;
        this.imagem = imagem;
    }

    // Método para buscar todas as notícias
    static async getAll() {
        const [rows] = await db.execute('SELECT * FROM Noticias ORDER BY data_noticia DESC');
        return rows;
    }

    // Método para buscar uma notícia por ID
    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM Noticias WHERE cd_noticias = ?', [id]);
        return rows[0];
    }

    // Método para salvar uma nova notícia
    async save() {
        const sql = `
            INSERT INTO Noticias (cd_campanha, titulo_noticia, data_noticia, autor, conteudo, imagem)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [this.cd_campanha, this.titulo_noticia, this.data_noticia, this.autor, this.conteudo, this.imagem]);
        this.cd_noticias = result.insertId;
        return this;
    }

    // Método para atualizar uma notícia
    async update() {
        const sql = `
            UPDATE Noticias
            SET cd_campanha = ?, titulo_noticia = ?, data_noticia = ?, autor = ?, conteudo = ?, imagem = ?
            WHERE cd_noticias = ?
        `;
        const [result] = await db.execute(sql, [this.cd_campanha, this.titulo_noticia, this.data_noticia, this.autor, this.conteudo, this.imagem, this.cd_noticias]);
        return result.affectedRows > 0;
    }

    // Método para deletar uma notícia
    static async delete(id) {
        const [result] = await db.execute('DELETE FROM Noticias WHERE cd_noticias = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = Noticia;