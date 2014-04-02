djangularjs
===

A project template for a single page app in django that uses, angularjs, bootstrap, and the django-rest-framework. This project template has made several opinionated decisions, so be wary.  


Prerequisites
===
* Virtualbox (https://www.virtualbox.org/wiki/Downloads) 4.3.6r91406
* Vagrant (http://www.vagrantup.com/downloads.html) Vagrant 1.4.3
* Python and Django

Getting Started
===
For the following commands, replace projectname with a project name of your choosing. 

    $ django-admin.py startproject --template=https://github.com/chriscabral/djangularjs/archive/master.zip --extension=py,rst,md projectname
    $ cd projectname
    $ vagrant up
    $ vagrant ssh
    $ cd /vagrant
    $ python manage.py syncdb
    $ python manage.py migrate
    $ python manage.py runserver 0.0.0.0:8000
    
Go to your local web browers and visit http://localhost:8000 and see what happens. 
OR
visit http://localhost:8000/api/v1/ to see the self documenting API. 


Todo
===
* Auto register all models to the admin.
* Add mysql to installation script.
* Add mysql as default database.
* Testing mail ready status.
* Add RabbitMQ to isntallation script.
* Add celery for distributed tasks.
* Ensure it is deployable to heroku.
* Change install scripts to use chef solo and librarian.
