[cite\_start]A página "Nossas Atividades" é um local para publicar ações e projetos do Instituto Alma[cite: 45]. A estrutura de dados para cada postagem (Noticia) deve conter todos os seus atributos, facilitando o gerenciamento e a exibição do conteúdo.


Estrutura: Atividade (ou Postagem)

Atributos:
- id: identificador único (cd_noticias)
- titulo: título da publicação (titulo_noticia)
- data: data da publicação (data_noticia)
- autor: nome do autor (autor)
- conteudo: corpo do texto da publicação (conteudo)
- imagem: URL para a imagem associada (imagem)


*Representação em uma lista:*

[cite\_start]A entrega exige que você crie uma lista com essas estruturas[cite: 91]. No seu código, você pode representar isso como uma lista de objetos ou dicionários.


lista_atividades = [
    {
        "id": 1,
        "titulo": "Primeira Etapa da Campanha Concluída",
        "data": "2024-07-20",
        "autor": "Equipe Alma",
        "conteudo": "Concluímos a primeira fase da campanha de agasalho com sucesso.",
        "imagem": "/imagens/campanha-agasalho-fase1.jpg"
    },
    # Outros objetos de atividades seriam adicionados aqui
]


### *2. Estrutura de Dados para 'Transparência'*

[cite\_start]A página "Transparência" exibe relatórios e documentos[cite: 47]. A estrutura de dados para cada relatório deve incluir as informações necessárias para que os usuários possam identificá-lo e acessá-lo.


Estrutura: Relatorio

Atributos:
- id: identificador único (cd_relatorio)
- tipo: tipo do relatório (tipo_relatorio)
- data: data do relatório (data_relatorio)
- valor_gasto: valor monetário (valor_gasto)
- caminho_pdf: URL para o arquivo PDF (caminho_pdf)


*Representação em uma lista:*

Assim como na estrutura de atividades, você criará uma lista de objetos para os relatórios.


lista_relatorios = [
    {
        "id": 1,
        "tipo": "Relatório de Prestação de Contas",
        "data": "2024-09-15",
        "valor_gasto": 45000.50,
        "caminho_pdf": "/relatorios/prestacao-de-contas-2024.pdf"
    },
    # Outros objetos de relatórios seriam adicionados aqui
]