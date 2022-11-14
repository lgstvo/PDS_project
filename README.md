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

## Arquitetura Hexgonal
- Razão da Escolha: Optmaos pelo uso desta arquitetura para permitir a separação da camada de domínio do restante do código, e isolar a comunicação com os meios externos, como o front end ou o BD, de forma que a a tecnologia utilizada em cada parte não interfira no funcionamento da API. Por ex, se o BD for mudado para o MYSQL, não afeta o restante do código de domínio, que está isolado.
- Detalhamento: Possuímos na pasta adapters os nossos adaptadores, que servem como meio de comunicação entre as requests que recebemos, e envia as informações relevantes para o nosso adaptador, separados por objeto do domínio (Perfil e Aula). Os adaptadores se comunicam então com as nossas classes de domínio, neste caso chamadas services. Estas contemplam nossas regras de negócio. Quando necessário elas se comunicam com as ports (chamadas de repostiories), partes que implementam as informações do BD, como as queries.
- Controllers: Foram criados como uma maneira de encapsular a lógica das nossas requisições separadamente da lógica de roteamento das mesmas, para permitir que mudanças feitas no funcionamento do código não afete as rotas.


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

## Wireframe

O wireframe está disponível neste [link do figma](https://www.figma.com/file/bnuJb2HpAWOEypPzWPMhtw/Aulas-Particulares?node-id=802%3A1831)
