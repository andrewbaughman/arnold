from django.urls import path

from . import views

app_name = 'RJcount'

urlpatterns = [
	path('', views.index, name='index'),
]
