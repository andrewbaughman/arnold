from django.shortcuts import render
import requests, json, datetime, os, subprocess
from parks.models import *
from django.views import View
import requests, json, datetime, os, subprocess
from django.http import JsonResponse
from django.db import IntegrityError, transaction


def index(request):
	return render(request, 'parks/index.html')

def park(request, parkname):
	return render(request, 'parks/park.html', { 'parkname': parkname })

class AjaxVoteOne(View):
	def post(self,request):
		ret = {}
		try:
			park_name = request.POST.get('park_name')
			park = Rating.objects.get_or_create(park_name=park_name)
			park_rating = park.park_rating
			park_numvotes = park.park_votes
			park_numvotes += 1
			park_rating += 1
			park_rating = (park_rating / park_numvotes)
			park.save()
			ret['status'] = 'OK'
		except:
			print('oops. voteone failed in view')
			ret['status'] = 'ERROR'
class AjaxGetRoselandRating(View):
	def get(self, request):
		ret = {}
		try:
			park = Rating.objects.get(park_name = 'roseland')
			ret['park_rating'] = park.park_rating
			ret['park_votes'] = park.park_votes
			ret['status'] = 'OK'
		except Exception as e:
			print('oops. get roseland rating failed in view: ' + str(e))
			ret['status'] = 'ERROR'
		return JsonResponse(ret)