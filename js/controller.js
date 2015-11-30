$(document).ready(function(){

	var view = new View

	var vine_url = 'http://cors.io/?u=https://api.vineapp.com/timelines/popular' 
	var reddit_url = 'https://www.reddit.com/r/videos/top.json?sort=top&t=day&limit=20'

	view.appendDiv($('#container'), 'vine_section')
	view.appendDiv($('#container'), 'reddit_section')

	//

	$.ajax({
	 	type: "GET",
	 	url: vine_url,
	 	dataType: "json",
	 	crossDomain: true,
	 	success: function(res){
	 		view.displayVineVideos(res)
	 	},
	 	error: function(){
	 		alert('Something went Wrong')
	 	}
	})

	$.ajax({
	 	type: "GET",
	 	url: reddit_url,
	 	success: function(res){
	 		view.displayRedditVideos(res)
	 	},
	 	error: function(){
	 		alert('Something went Wrong')
	 	}
	})

})