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
#from api.v1.router import api_urlpatterns as api_v1
from django.contrib.staticfiles.templatetags.staticfiles import static
from django.views.generic import RedirectView
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path


from parks.api.v1.router import api_urlpatterns as parks_api_v1

urlpatterns = [
    path('', views.index, name='index'),
    path('api/v1/parks/', include(parks_api_v1)),

	path(r'polls/', include('polls.urls', namespace = "polls")),
	path('admin/', admin.site.urls),
	path(r'chat/', include('chat.urls', namespace="chat")),
    path(r'pic/', include('pic.urls', namespace="pic")),
	path(r'RJcount/',include('RJcount.urls', namespace="RJcount")),
	path(r'Parks/', include('parks.urls', namespace="parks")),
]
