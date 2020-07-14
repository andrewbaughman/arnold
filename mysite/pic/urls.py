from django.urls import path

from . import views

app_name = 'pic'

urlpatterns = [
	path('', views.index, name='index'),
]