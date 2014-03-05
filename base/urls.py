"""urlconf for the base application"""

from django.conf.urls import url, patterns, include
from base.api import router

urlpatterns = patterns('base.views',
    url(r'^login/$', 'login_view', name='login'),
    url(r'^logout/$', 'logout_view', name='logout'),
    url(r'^register/$', 'register_view', name='register'),
    url(r'^$', 'home', name='home'),
    url(r'^api/v1/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)