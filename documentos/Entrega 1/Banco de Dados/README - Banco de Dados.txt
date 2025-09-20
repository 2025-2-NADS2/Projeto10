-- Ativar foreign keys
PRAGMA foreign_keys = ON;

-- Limpar tabelas e views existentes (se houver)
DROP VIEW IF EXISTS DoacoesDetalhes;
DROP TABLE IF EXISTS Noticias;
DROP TABLE IF EXISTS Relatorio;
DROP TABLE IF EXISTS Doacao;
DROP TABLE IF EXISTS Campanha;
DROP TABLE IF EXISTS Usuario;
DROP TABLE IF EXISTS Ouvidoria;

-- ========================================
-- CRIANDO TABELAS
-- ========================================

-- Tabela Usuario (base - sem dependências)
CREATE TABLE Usuario (
    cd_cliente INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_completo TEXT NOT NULL,
    telefone TEXT,
    cpf TEXT UNIQUE,
    cep TEXT,
    nome_usuario TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- Tabela Campanha (base - sem dependências)
CREATE TABLE Campanha (
    cd_campanha INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_campanha TEXT NOT NULL,
    meta_arrecadacao REAL,
    inicio DATE,
    fim DATE
);

-- Tabela Doacao (depende de Usuario e Campanha)
CREATE TABLE Doacao (
    cd_doacao INTEGER PRIMARY KEY AUTOINCREMENT,
    cd_cliente INTEGER NOT NULL,
    cd_campanha INTEGER NOT NULL,
    nome_doacao TEXT NOT NULL,
    tipo_doacao TEXT NOT NULL,
    forma_arrecadacao TEXT,
    status_arrecadacao TEXT DEFAULT 'Pendente',
    CONSTRAINT fk_doacao_usuario FOREIGN KEY (cd_cliente)
        REFERENCES Usuario(cd_cliente),
    CONSTRAINT fk_doacao_campanha FOREIGN KEY (cd_campanha)
        REFERENCES Campanha(cd_campanha)
);

-- Tabela Relatorio (depende de Campanha)
CREATE TABLE Relatorio (
    cd_relatorio INTEGER PRIMARY KEY AUTOINCREMENT,
    cd_campanha INTEGER NOT NULL,
    tipo_relatorio TEXT NOT NULL,
    valor_gasto REAL,
    data_relatorio DATE NOT NULL,
    caminho_pdf TEXT, -- Nova coluna para o caminho do arquivo PDF
    CONSTRAINT fk_relatorio_campanha FOREIGN KEY (cd_campanha)
        REFERENCES Campanha(cd_campanha)
);

-- Tabela Noticias (depende de Campanha)
CREATE TABLE Noticias (
    cd_noticias INTEGER PRIMARY KEY AUTOINCREMENT,
    cd_campanha INTEGER NOT NULL,
    titulo_noticia TEXT NOT NULL,
    data_noticia DATE NOT NULL,
    autor TEXT,
    conteudo TEXT,
    imagem TEXT, -- Nova coluna para o caminho da imagem
    CONSTRAINT fk_noticias_campanha FOREIGN KEY (cd_campanha)
        REFERENCES Campanha(cd_campanha)
);

-- Nova tabela para a ouvidoria
CREATE TABLE Ouvidoria (
    cd_mensagem INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_remetente TEXT NOT NULL,
    email_remetente TEXT NOT NULL,
    assunto TEXT,
    mensagem TEXT NOT NULL,
    data_envio DATE NOT NULL
);

-- ========================================
-- CRIANDO ÍNDICES PARA PERFORMANCE
-- ========================================

-- Índices para Usuario
CREATE INDEX idx_usuario_email ON Usuario(email);
CREATE INDEX idx_usuario_telefone ON Usuario(telefone);
CREATE INDEX idx_usuario_cpf ON Usuario(cpf);

-- Índices para Doacao
CREATE INDEX idx_doacao_cliente ON Doacao(cd_cliente);
CREATE INDEX idx_doacao_campanha ON Doacao(cd_campanha);
CREATE INDEX idx_doacao_status ON Doacao(status_arrecadacao);

-- Índices para Relatorio
CREATE INDEX idx_relatorio_campanha ON Relatorio(cd_campanha);

-- Índices para Noticias
CREATE INDEX idx_noticias_campanha ON Noticias(cd_campanha);
CREATE INDEX idx_noticias_data ON Noticias(data_noticia);

-- Índices para Campanha
CREATE INDEX idx_campanha_nome ON Campanha(nome_campanha);

-- ========================================
-- CRIANDO VIEW (Requisito da disciplina Banco de Dados)
-- ========================================
-- View para visualizar doações com informações do doador e da campanha
CREATE VIEW DoacoesDetalhes AS
SELECT
    D.cd_doacao,
    D.nome_doacao,
    D.tipo_doacao,
    D.forma_arrecadacao,
    D.status_arrecadacao,
    U.nome_completo AS nome_doador,
    U.email AS email_doador,
    C.nome_campanha
FROM Doacao AS D
INNER JOIN Usuario AS U ON D.cd_cliente = U.cd_cliente
INNER JOIN Campanha AS C ON D.cd_campanha = C.cd_campanha;


-- ========================================
-- CRIANDO INSERT PARA TESTES
-- ========================================

-- Inserir dados de teste nas tabelas originais
INSERT INTO Usuario (nome_completo, telefone, cpf, nome_usuario, senha, email) VALUES
('João Silva Santos', '11999999999', '12345678901', 'joao123', 'senha123', 'joao@email.com'),
('Maria Oliveira', '11888888888', '98765432100', 'maria456', 'senha456', 'maria@email.com');

INSERT INTO Campanha (nome_campanha, meta_arrecadacao, inicio, fim) VALUES
('Campanha do Agasalho 2024', 50000.00, '2024-06-01', '2024-08-31'),
('Natal Solidário', 30000.00, '2024-11-01', '2024-12-25');

INSERT INTO Doacao (cd_cliente, cd_campanha, nome_doacao, tipo_doacao, forma_arrecadacao) VALUES
(1, 1, 'Doação de Roupas', 'Roupas', 'Entrega'),
(2, 1, 'Doação em Dinheiro', 'Dinheiro', 'PIX');

-- Inserir dados de teste nas novas tabelas
INSERT INTO Ouvidoria (nome_remetente, email_remetente, assunto, mensagem, data_envio) VALUES
('Pedro Martins', 'pedro@email.com', 'Dúvida sobre Doação', 'Olá, gostaria de saber como fazer uma doação com cartão de crédito.', '2025-09-18');

INSERT INTO Relatorio (cd_campanha, tipo_relatorio, valor_gasto, data_relatorio, caminho_pdf) VALUES
(1, 'Relatório de Prestação de Contas', 45000.50, '2024-09-15', '/relatorios/prestacao-de-contas-2024.pdf');

INSERT INTO Noticias (cd_campanha, titulo_noticia, data_noticia, autor, conteudo, imagem) VALUES
(1, 'Primeira Etapa da Campanha Concluída', '2024-07-20', 'Equipe Alma', 'Concluímos a primeira fase da campanha de agasalho com sucesso.', '/imagens/campanha-agasalho-fase1.jpg');

-- ========================================
-- VERIFICAÇÃO DAS TABELAS
-- ========================================

-- Verificar criação
SELECT 'Tabelas e índices criados com sucesso!' as resultado;
SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;
SELECT name FROM sqlite_master WHERE type='view' ORDER BY name;
SELECT name, tbl_name FROM sqlite_master WHERE type='index' AND name LIKE 'idx_%' ORDER BY tbl_name;