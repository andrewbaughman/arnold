from django.db import models
from django.conf import settings

class Rating(models.Model):
	id = models.AutoField(primary_key=True)
	park_name = models.CharField(max_length=512, default="")
	park_rating = models.IntegerField(default=0)
	park_votes = models.IntegerField(default=0)