from django.conf.urls import url, patterns, include
from django.contrib.auth.models import User, Group
from django.db import models
from rest_framework import viewsets, routers
from base.models import DjangularJSModelMixin

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    model = User

class GroupViewSet(viewsets.ModelViewSet):
    model = Group

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

def get_viewset(model):
    class GenericViewSet(viewsets.ModelViewSet):
        model = model
    return GenericViewSet

all_models = models.get_models(include_auto_created=True)
global_viewsets = []
for model in all_models:
    if(issubclass(model, DjangularJSModelMixin)):
        router.register(model.__name__, get_viewset(model))




