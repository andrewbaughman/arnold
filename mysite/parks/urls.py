from django.urls import path
from django.conf.urls import include
from django.contrib import admin
from parks import views as park_views
from . import views

app_name = 'parks'

urlpatterns = [
	path('', views.index, name='index'),
	path('<str:<parkname>/', views.park, name='park'),
	path('ajax/voteone/', park_views.AjaxVoteOne.as_view(), name='ajax_vote_one'),
	path('ajax/getroselandrating/', park_views.AjaxGetRoselandRating.as_view(), name='ajax_get_roseland_rating'),
]
