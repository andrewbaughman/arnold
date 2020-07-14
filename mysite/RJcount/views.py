from django.shortcuts import render

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.utils import timezone
from datetime import date


from .models import RJstats

# Create your views here.

def index(request):
	today = RJstats.objects.get(RJcount=3)
	return render(request, 'RJcount/index.html', {'today':today})

