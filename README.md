[PT](https://github.com/uadson/django-realtime-project/blob/main/README.md) | [EN](https://github.com/uadson/django-realtime-project/blob/main/README_EN.md)

## Boas Vindas

Este é um exemplo básico de uma aplicação em tempo real construída com o Django
Framework do Python.

Um exemplo comum de uma aplicação em tempo real é uma aplicação web de mensagens
como um chat por exemplo, onde duas se comunicam através de meios de comunicação
diferentes em diferentes locais de forma instantânea.

#### Framework:

    Framework Django - versão 4

#### Bibliotecas utilizadas no projeto:

    - django-channels
    - banco de dados Redis
    - django-bootstrap4


#### Instalação

    O gerenciador de pacotes/dependências utilizado é o Pipenv.

##### Instalando o pipenv:


    pip install pipenv
    
Para instalar os pacotes e dependêcia do projeto:
    
    pipenv install
    

A qualquer momento você pode atualizar os pacotes/dependências digitando o 
    comando:
    
    pipenv update
    

Para ativar o ambiente virtual digite o comando:

    pipenv shell
    

e digitar os comandos de gerenciamento e execução do servidor no Django ou:

    pipenv run python manage.py runserver
    
para executar o servidor local por exemplo.

##### Utilizando o gerenciador de pacotes pip:

Criando um ambiente virtual:
    
    python -m venv .venv

Ativando o ambiente virtual:

Linux:

    source .venv/bin/activate


Windows:

    .venv/Scripts activate
    

Instalando os pacotes (com o ambiente virtual ativado):

    pip install -r requirements.txt


#### Projeto:

    A ideia é a construção de uma aplicação web como um serviço de mensagens
    (chat), onde um usuário irá fazer o login e poderá ser comunicar com outros
    usuário logados.