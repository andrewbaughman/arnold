from django.shortcuts import render

def index(request):
	return render(request, 'parks/index.html')

def park(request, parkname):
	return render(request, 'parks/park.html', { 'parkname': parkname })
