from django.conf.urls import url
from rest_framework import routers
from . import views
from django.urls import path

router = routers.DefaultRouter()
api_urlpatterns = [
	path('pairingmode/select/', views.post_pair, name='pairingmode')
] + router.urls
