from .serializers import *

#from api.permissions import *

from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action, api_view, permission_classes

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError, transaction
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse

from parks.models import *

class RatingViewSet(viewsets.ModelViewSet):
	queryset = Rating.objects.all()
	serializer_class = RatingSerializer
	filterset_fields = ('__all__')
	http_method_names = ['get','post','put','patch','delete']
