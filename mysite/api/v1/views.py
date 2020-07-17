from django.views.decorators.csrf import csrf_exempt
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from django.http import HttpResponse
import json
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def post_pair(request):

	#hardware_id = request.POST.get('hardware_id')
	#so_num = request.POST.get('so_num')
#
	#if hardware_id and so_num:
	#	session_name = 'pair_hw_to_' + str(so_num)
	#	channel_layer = get_channel_layer()
	#	async_to_sync(channel_layer.group_send)(
	#		session_name,
	#		{
	#			'type': 'pair_request',
	#			'so_number': str(so_num),
	#			'hardware_uuid': str(hardware_id),
	#			'message': 'Hardware (' + str(hardware_id) + ') Requesting to Pair with SO (' + so_num + ')'
	#		}
	#	)
		response = HttpResponse()
		response.status_code = 200
		response.reason_phrase = "Success"
		return response
	#else:
	#	response = HttpResponse()
	#	response.status_code = 400
	#	response.reason_phrase = "Incomplete Data"
	#	return response
