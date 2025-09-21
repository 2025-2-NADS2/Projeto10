const db = require('../config/db');
const bcrypt = require('bcryptjs');

class Usuario {
    constructor(cd_cliente, nome_completo, telefone, cpf, cep, nome_usuario, senha, email) {
        this.cd_cliente = cd_cliente;
        this.nome_completo = nome_completo;
        this.telefone = telefone;
        this.cpf = cpf;
        this.cep = cep;
        this.nome_usuario = nome_usuario;
        this.senha = senha;
        this.email = email;
    }

    // Método estático para buscar um usuário pelo nome de usuário
    static async findByUsername(nome_usuario) {
        const [rows] = await db.execute('SELECT * FROM Usuario WHERE nome_usuario = ?', [nome_usuario]);
        return rows[0];
    }
    
    // Método estático para buscar um usuário pelo e-mail
    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM Usuario WHERE email = ?', [email]);
        return rows[0];
    }

    // Método para criar um novo usuário no banco de dados
    async save() {
        // Criptografa a senha antes de salvar
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(this.senha, salt);

        const sql = `
            INSERT INTO Usuario (nome_completo, telefone, cpf, cep, nome_usuario, senha, email)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [
            this.nome_completo,
            this.telefone,
            this.cpf,
            this.cep,
            this.nome_usuario,
            senhaHash,
            this.email
        ]);
        this.cd_cliente = result.insertId;
        return this;
    }
}

module.exports = Usuario;