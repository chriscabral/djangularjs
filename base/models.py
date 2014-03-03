from django.db import models
from django.contrib.auth.models import User

class DjangularJSModelMixin:
    """
        Adding this mixin to a model will create an API end point for the model.
    """
    pass

class TodoTask(models.Model, DjangularJSModelMixin):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    completed = models.BooleanField(default=False)
    owner = models.ForeignKey(User)
