Teste para estágio Frontend e Full-Stack
Sobre a Ellos Design

A Ellos Design é uma agência de marketing e criação de sites localizada em Guarulhos / SP. Somos uma empresa em constante evolução e sempre estamos abertos para pessoas que gostem de tecnologia e queiram trabalhar na área, mas que principalmente queiram aprender e crescer com a nossa empresa.
Sobre o teste

Este é um teste prático que desenvolvemos para a avaliação dos candidatos participantes de nosso processo seletivo para vagas de Frontend ou Full-Stack.
Tecnologias para o desafio

Você deve utilizar as seguintes tecnologias para o desenvolvimento do teste:

    HTML5
    CSS
    JavaScript ou jQuery
    PHP (Para Full-Stack)
    MySQL (Para Full-Stack)

O que nos impressionaria no teste

    Utilização de um pré-processador para o CSS (De preferência o Sass)
    Aplicação de animações em CSS (Ex: Animações ao realizar scroll)
    Ver o teste rodando em live (Bucket estático S3, Heroku, Firebase Hosting, etc)
    Documentação do projeto (Com instruções para executar)

O que avaliaremos no seu teste

    Criatividade
    Organização do código
    Performance do código
    Boas práticas de desenvolvimento
    Documentação do código
    Adaptação mobile (layout responsivo)
    Documentação do projeto (Com instruções para executar)

Etapas para realização do teste

    Faça um fork desse projeto em sua conta do GitHub
    Realize o desafio proposto
    Faça um push para seu repositório com o desafio implementado
    Envie um email para (vagas@ellosdesign.com.br) com a URL do seu projeto avisando que você concluiu o teste

O desafio

Você deverá desenvolver uma landing page seguindo a estrutura exibida na imagem abaixo. Você pode utilizar os textos e imagens de sua preferência para a criação da página.
Full-Stack

Deixar o formulário da landing page funcional, onde ao preencher as informações e clicar para enviar, o formulário será submetido e os dados deverão ser gravados em um banco de dados (Neste caso será necessário nos enviar o arquivo SQL para podermos implementar o banco para avaliação do teste).

Important

Atenção: O mockup abaixo é apenas um esqueleto estrutural. Não queremos que você replique o design cinza e estático do modelo. Use sua criatividade para definir uma marca fictícia (ou real), escolher uma paleta de cores, tipografia e imagens que deem vida ao projeto. Sinta-se livre para adaptar o layout, desde que mantenha os elementos essenciais.

Template da página a ser desenvolvida

Boa sorte! Use sua criatividade e mostre do que você é capaz.

------------------------------------------------------------------------------------------------------
Ps Cortes:
Projeto de landing page com integração com backend.

A escolha da identidade visual foi escolhida baseado no estabelecimento do patrick, cores escuras com letras douradas.

Tecnlogias Utilizadas

* Frontend: HTML5, CSS3 e Javascript
* Backend: PHP 8
* Banco de dados: Mysql
* Servidor local: Xampp

Pré requisitos 
Para rodar esse projeto, você precisará ter instalado em sua máquina:

* XAMPP (Apache e Mysql)
* Um navegador web

Passo a Passo para rodar o projeto

1. Preparação dos arquivos
   Certifique-se de que a pasta do projeto esteja dentro do diretório raiz do xampp:
   C:\xampp\htdocs\
   
2. A estrutura de pastas deve seguir este padrão:

 Assets

    CSS/ — Estilização do site.

    Img/ — Identidade visual (Logo, Missão, Galeria).

    Javascript/ — Funções para mascáras, validações e animações.

 Backend

    bd.sql — Arquivo para importar no MySQL.

    salvar.php — Arquivo que contém a string de conexão com o banco de dados e que envia os dados que estiverem escritos no formulário para o banco de dados.

 Frontend

    index.html — Página da barbearia.

3. Ajustes de comunicação entre as pastas
   * No index.html (Frontend):
     O formulário deve apontar para a pasta vizinha:
     
     ##<form action="../Backend/salvar.php" method="POST">## (ignore as cerquilhas, servem apenas para exibir o comando escrito).
     
   * No salvar.php (Backend):
     O redirecionamento deve voltar para a pasta vizinha (Frontend)
     
    'window.location.href='../Frontend/index.html';' (ignore as aspas simples, servem apenas para exibir o comando escrito).
     
     
4. Acesso ao sistema
   Certifique que o XAMPP esteja ligado e que as opções Apache e Mysql estejam ligadas, abra o seu navegador e digite o endereço baseado na pasta no htdocs:
   http://localhost/NOME_DA_SUA_PASTA/Frontend/index.html

