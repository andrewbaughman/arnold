$(document).ready(function(){
	showhide();
	
});

function showhide(){
	$('#roseland-btn').on('click', function(){
		console.log('roseland'); 
		if(!$('#info_panel').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('#info_panel').find('#sample_suggestion').addClass('hidden');
			}
		if($('#info_panel').find('#roseland-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#roseland-btn').removeClass('hidden');
				console.log('unhide');
			}
		if(!$('#info_panel').find('#garver-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#garver-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#recreation-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#recreation-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#eastend-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#eastend-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#butterfly-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#butterfly-btn').addClass('hidden');
			}
	});
	$('#garver-btn').on('click', function(){
		console.log('garver'); 
		if(!$('#info_panel').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('#info_panel').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('#info_panel').find('#roseland-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#roseland-btn').addClass('hidden');
			}
		if($('#info_panel').find('#garver-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#garver-btn').removeClass('hidden');
			}
		if(!$('#info_panel').find('#recreation-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#recreation-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#eastend-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#eastend-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#butterfly-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#butterfly-btn').addClass('hidden');
			}
	});
	$('#recreation-btn').on('click', function(){
		console.log('recreation'); 
		if(!$('#info_panel').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('#info_panel').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('#info_panel').find('#roseland-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#roseland-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#garver-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#garver-btn').addClass('hidden');
			}
		if($('#info_panel').find('#recreation-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#recreation-btn').removeClass('hidden');
			}
		if(!$('#info_panel').find('#eastend-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#eastend-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#butterfly-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#butterfly-btn').addClass('hidden');
			}
	});
	$('#eastend-btn').on('click', function(){
		console.log('east end'); 
		if(!$('#info_panel').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('#info_panel').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('#info_panel').find('#roseland-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#roseland-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#garver-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#garver-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#recreation-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#recreation-btn').addClass('hidden');
			}
		if($('#info_panel').find('#eastend-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#eastend-btn').removeClass('hidden');
			}
		if(!$('#info_panel').find('#butterfly-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#butterfly-btn').addClass('hidden');
			}
	});
	$('#butterfly-btn').on('click', function(){
		console.log('butterfly'); 
		if(!$('#info_panel').find('#sample_suggestion').hasClass('hidden')) 
			{
				$('#info_panel').find('#sample_suggestion').addClass('hidden');
			}
		if(!$('#info_panel').find('#roseland-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#roseland-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#garver-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#garver-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#recreation-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#recreation-btn').addClass('hidden');
			}
		if(!$('#info_panel').find('#eastend-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#eastend-btn').addClass('hidden');
			}
		if($('#info_panel').find('#butterfly-btn').hasClass('hidden')) 
			{
				$('#info_panel').find('#butterfly-btn').removeClass('hidden');
			}
	});
		
}