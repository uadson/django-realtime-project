[PT](https://github.com/uadson/django-realtime-project/blob/main/README_PT.md) | [EN](https://github.com/uadson/django-realtime-project/blob/main/README_EN.md)

## Welcome

This is a basic example of a real-time application built with Django
Python Framework.

A common example of a real-time application is a web messaging application.
like a chat for example, where two communicate through media
different in different locations instantly.

#### Framework:

    Django Framework - version 4

#### Libraries used in the project:

    - django-channels
    - Redis database
    - django-bootstrap4


#### Installation

    The package/dependency manager used is Pipenv.

##### Installing pipenv:

    ```pip install pipenv
    ```
    To install the packages and project dependencies:
    
    ```pipenv install
    ```

    At any time you can update packages/dependencies by typing the
    command:

    ```pipenv update
    ```

    To activate the virtual environment, type the command:

    ```pipenv shell
    ```

    and type the server management and execution commands in Django or:

    ```pipenv run python manage.py runserver
    ```
    to run the local server for example.

##### Using the pip package manager:

    Creating a virtual environment:
    
    ```python -m venv .venv
    ```

    Activating the virtual environment:

    Linux:

    ```source .venv/bin/activate
    ```

    Windows:

    ```.venv/Scripts activate
    ```

    Installing the packages (with the virtual environment enabled):

    ```pip install -r requirements.txt
    ```

#### Project:

    The idea is to build a web application as a messaging service
    (chat), where a user will log in and be able to communicate with others
    logged in user.