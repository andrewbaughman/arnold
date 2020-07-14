# chat/urls.py
from django.urls import path
from django.conf.urls import include
from django.contrib import admin

from . import views

app_name = 'chat'

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:room_name>/', views.room, name='room'),
]
