import datetime

from django.db import models
from django.utils import timezone

# Create your models here.

class RJstats(models.Model):
	RJcount = models.IntegerField()
	pub_date = models.DateTimeField('date_published')
	RJseconds = models.IntegerField(default=0)
	RJminutes = models.IntegerField(default=0)
	RJhours = models.IntegerField(default=0)
	