from parks.models import *
from rest_framework import serializers

class RatingSerializer(serializers.ModelSerializer):
	class Meta:
		model = Rating
		fields = ('__all__')

