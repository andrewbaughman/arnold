$(document).ready(function(){
	showhide();
	adjustvotes();
});
function adjustvotes(){
	$('#roseland-vote-1').on('click', function()
	{
		voteOne('roseland', 1);
	});
}
							 
							 
function voteOne(parkname){
	$.ajax({
		url: 'ajax/voteone/',
		method: 'post',
		data: {
			"park_name": parkname,
		},
		beforeSend: function(xhr, settings){
		},
		complete: function(data){
			//console.log(data.responseJSON);
			if(data.responseJSON == undefined) {
				console.log('vote one undefined');
			} 
			else if(data.responseJSON['status'] == 'OK') {
				console.log('vote one success');
			} else if (data.responseJSON['status'] == 'ERROR') {
				console.log('vote one fail');

			}
		}
	});
}


function getRoselandRating(){
	$.ajax({
		url: 'ajax/getroselandrating/',
		method: 'get',
		beforeSend: function(xhr, settings){
		},
		complete: function(data){
			//console.log(data.responseJSON);
			if(data.responseJSON == undefined) {
				console.log('vote one undefined');
			} 
			else if(data.responseJSON['status'] == 'OK') {
				console.log('vote one success');
			} else if (data.responseJSON['status'] == 'ERROR') {
				console.log('vote one fail');

			}
		}
	});
}
	
function showhide(){
	$('#roseland-btn').on('click', function(){
		if(!$('.info_section').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('.info_section').find('#sample_suggestion').addClass('hidden');
			}
		if($('.info_section').find('#roseland').hasClass('hidden')) 
			{
				$('.info_section').find('#roseland').removeClass('hidden');
			}
		if(!$('.info_section').find('#garver').hasClass('hidden')) 
			{
				$('.info_section').find('#garver').addClass('hidden');
			}
		if(!$('.info_section').find('#recreation').hasClass('hidden')) 
			{
				$('.info_section').find('#recreation').addClass('hidden');
			}
		if(!$('.info_section').find('#eastend').hasClass('hidden')) 
			{
				$('.info_section').find('#eastend').addClass('hidden');
			}
		if(!$('.info_section').find('#butterfly').hasClass('hidden')) 
			{
				$('.info_section').find('#butterfly').addClass('hidden');
			}
		var rating = getRoselandRating();
		$('#roseland-btn').find('.primarygrouptype').html(rating);

	});
	$('#garver-btn').on('click', function(){
		if(!$('.info_section').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('.info_section').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('.info_section').find('#roseland').hasClass('hidden')) 
			{
				$('.info_section').find('#roseland').addClass('hidden');
			}
		if($('.info_section').find('#garver').hasClass('hidden')) 
			{
				$('.info_section').find('#garver').removeClass('hidden');
			}
		if(!$('.info_section').find('#recreation').hasClass('hidden')) 
			{
				$('.info_section').find('#recreation').addClass('hidden');
			}
		if(!$('.info_section').find('#eastend').hasClass('hidden')) 
			{
				$('.info_section').find('#eastend').addClass('hidden');
			}
		if(!$('.info_section').find('#butterfly').hasClass('hidden')) 
			{
				$('.info_section').find('#butterfly').addClass('hidden');
			}
	});
	$('#recreation-btn').on('click', function(){
		if(!$('.info_section').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('.info_section').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('.info_section').find('#roseland').hasClass('hidden')) 
			{
				$('.info_section').find('#roseland').addClass('hidden');
			}
		if(!$('.info_section').find('#garven').hasClass('hidden')) 
			{
				$('.info_section').find('#garver').addClass('hidden');
			}
		if($('.info_section').find('#recreation').hasClass('hidden')) 
			{
				$('.info_section').find('#recreation').removeClass('hidden');
			}
		if(!$('.info_section').find('#eastend').hasClass('hidden')) 
			{
				$('.info_section').find('#eastend').addClass('hidden');
			}
		if(!$('.info_section').find('#butterfly').hasClass('hidden')) 
			{
				$('.info_section').find('#butterfly').addClass('hidden');
			}
	});
	$('#eastend-btn').on('click', function(){
		if(!$('.info_section').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('.info_section').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('.info_section').find('#roseland').hasClass('hidden')) 
			{
				$('.info_section').find('#roseland').addClass('hidden');
			}
		if(!$('.info_section').find('#garver').hasClass('hidden')) 
			{
				$('.info_section').find('#garver').addClass('hidden');
			}
		if(!$('.info_section').find('#recreation').hasClass('hidden')) 
			{
				$('.info_section').find('#recreation').addClass('hidden');
			}
		if($('.info_section').find('#eastend').hasClass('hidden')) 
			{
				$('.info_section').find('#eastend').removeClass('hidden');
			}
		if(!$('.info_section').find('#butterfly').hasClass('hidden')) 
			{
				$('.info_section').find('#butterfly').addClass('hidden');
			}
	});
	$('#butterfly-btn').on('click', function(){
		if(!$('.info_section').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('.info_section').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('.info_section').find('#roseland').hasClass('hidden')) 
			{
				$('.info_section').find('#roseland').addClass('hidden');
			}
		if(!$('.info_section').find('#garver').hasClass('hidden')) 
			{
				$('.info_section').find('#garver').addClass('hidden');
			}
		if(!$('.info_section').find('#recreation').hasClass('hidden')) 
			{
				$('.info_section').find('#recreation').addClass('hidden');
			}
		if(!$('.info_section').find('#eastend').hasClass('hidden')) 
			{
				$('.info_section').find('#eastend').addClass('hidden');
			}
		if($('.info_section').find('#butterfly').hasClass('hidden')) 
			{
				$('.info_section').find('#butterfly').removeClass('hidden');
			}
	});
		
}