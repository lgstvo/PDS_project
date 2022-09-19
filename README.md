# Sistema de Agendamento e Disponibilização de Aulas Particulares

## Sobre o Sistema
O sistema consiste em uma plataforma para auxiliar pessoas buscando auxilio com aprendizado, permitindo que pessoas busquem e ofereçam aulas particulares, através de uma interface amigável. Alunos poderão buscar por outras pessoas oferecendo aulas na plataforma e iniciar um bate-papo. O pagamento é deixado a cargo dos integrantes. Após a aula, alunos podem avaliar professores, assim como professores poderão avaliar os alunos. Ambas as médias das notas serão exibidas no perfil.

### Features
- Autenticação de usuário
- Oferta e Demanda de aulas em estilo marketplace
- Avaliação de perfis
- Busca com filtro de tópico
- Bate-papo
- Estatísticas no perfil
- Calendário com aulas marcadas

## Tecnologias
- Front-end: React
- Back-end:  Node.js
- Database:  Postgresql

## Grupo:
- Bruno Ferreira: Software Engineer Back-End
- Isabelle Vieira: Software Engineer Front-End
- Luís Gustavo: Software Engineer Back-End
- Victoria Saliba: Software Engineer Front-End

## Backlog

### Tarefas Técnicas:
    Modelar e Criar o BD (PostGreSQL) [Bruno] [Luis]
    Preparar ambiente de dev back (Node, VSCode) [Bruno] [Luis]
    Preparar ambiente de dev front (React) [Isabelle] [Victoria]


### Histórias:

> Como professor, eu desejo disponibilizar as aulas para marcação
    
Tarefas:
* Implementar Interface Web [Isabelle] [Victoria]
* Criar rota para criar aulas [Bruno] [Luis]
* Criar rota para atualizar aulas [Bruno] [Luis]
* Criar rota para buscar uma aula [Bruno] [Luis]
*****
> Como um aluno, eu desejo saber as aulas disponíveis
    
Tarefas:
* Implementar interface Web de Listagem [Isabelle] [Victoria]
* Criar rota para listagem, com filtro, das aulas [Bruno] [Luis]
*****
> Como um aluno, desejo avaliar um professor que me deu aula

Tarefas:
* Implementar Interface Web de Avaliação [Isabelle] [Victoria]
* Criar rota para criação de avaliação do professor [Bruno] [Luis]
* Criar validação de aula já assistida para permitir avaliação [Bruno] [Luis]
*****
> Como um aluno, desejo saber quais aulas possuo marcadas

Tarefas
* Criar calendário na interface Web com as aulas marcadas [Isabelle] [Victoria]
* Criar rota para buscar as aulas marcadas por um aluno [Bruno] [Luis]
*****
> Como um aluno, eu quero saber as estatísticas do perfil de um professor
Tarefas:
* Criar interface web do perfil do professor [Isabelle] [Victoria]
* Criar interface web de autenticação[Isabelle] [Victoria]
* Criar rota para busca de perfil [Bruno] [Luis]
* Criar rota para atualizar perfil [Bruno] [Luis]
* Criar rota para criação de perfil [Bruno] [Luis]
* Criar rota de autenticação [Bruno] [Luis]
