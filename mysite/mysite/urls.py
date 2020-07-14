"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from mysite import views

urlpatterns = [
    path('', views.index, name='index'),
	path(r'polls/', include('polls.urls', namespace = "polls")),
	path('admin/', admin.site.urls),
	path(r'chat/', include('chat.urls', namespace="chat")),
    path(r'pic/', include('pic.urls', namespace="pic")),
	path(r'RJcount/',include('RJcount.urls', namespace="RJcount")),
	path(r'Parks/', include('parks.urls', namespace="parks")),
]
